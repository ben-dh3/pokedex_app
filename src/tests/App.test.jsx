import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../components/App";

test("renders with the correct title ", () => {
    // Setup - rendering the component on the page
    render(<App />);
    // Assert
    expect(screen.getByRole("heading")).toHaveTextContent("Welcome to the Pokedex");
});