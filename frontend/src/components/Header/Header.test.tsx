import { render, screen } from "@testing-library/react";
import { Header } from "./index";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  it("renders the title link with the correct text", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const titleLink = screen.getByText("Task Management App");
    expect(titleLink).toBeInTheDocument();
    expect(titleLink).toHaveAttribute("href", "/");
  });

  it("renders the Home link with the correct href", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
