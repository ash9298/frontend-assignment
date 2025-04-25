import React, { useState, useEffect } from "react";
import StatusIndicator from "./components/StatusIndicator";
import ProjectTable from "./components/ProjectTable";
import Pagination from "./components/Pagination";
import "./App.css";

const API_URL =
  "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";
const ITEMS_PER_PAGE = 5;

function App() {
  const [allProjects, setAllProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format received from API.");
        }
        setAllProjects(data);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError(
          `Error loading projects: ${err.message}. Please try refreshing.`
        );
        setAllProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProjects = allProjects.slice(startIndex, endIndex);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <h1>Highly-Rated Kickstarter Project</h1>

      <div className="container">
        <StatusIndicator isLoading={isLoading} error={error} />

        {!isLoading && !error && (
          <ProjectTable projects={currentProjects} startIndex={startIndex} />
        )}
      </div>

      {!isLoading && !error && allProjects.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevClick={() => handlePageClick(Math.max(1, currentPage - 1))}
          onNextClick={() =>
            handlePageClick(Math.min(totalPages, currentPage + 1))
          }
          onPageNumClick={handlePageClick}
        />
      )}
    </>
  );
}

export default App;
