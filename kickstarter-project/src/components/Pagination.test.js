import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
  it("should render the pagination controls", () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPrevClick={() => {}}
        onNextClick={() => {}}
        onPageNumClick={() => {}}
      />
    );

    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("Page 2 of 5")).toBeInTheDocument();
  });

  it("should call onPrevClick when previous button is clicked", () => {
    const onPrevClick = jest.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPrevClick={onPrevClick}
        onNextClick={() => {}}
        onPageNumClick={() => {}}
      />
    );

    fireEvent.click(screen.getByText("Previous"));
    expect(onPrevClick).toHaveBeenCalledTimes(1);
  });

  it("should call onNextClick when next button is clicked", () => {
    const onNextClick = jest.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPrevClick={() => {}}
        onNextClick={onNextClick}
        onPageNumClick={() => {}}
      />
    );

    fireEvent.click(screen.getByText("Next"));
    expect(onNextClick).toHaveBeenCalledTimes(1);
  });

  it("should disable previous button on first page", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPrevClick={() => {}}
        onNextClick={() => {}}
        onPageNumClick={() => {}}
      />
    );

    expect(screen.getByText("Previous")).toBeDisabled();
  });

  it("should disable next button on last page", () => {
    render(
      <Pagination
        currentPage={5}
        totalPages={5}
        onPrevClick={() => {}}
        onNextClick={() => {}}
        onPageNumClick={() => {}}
      />
    );

    expect(screen.getByText("Next")).toBeDisabled();
  });
});
