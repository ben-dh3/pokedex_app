import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormatData from "../components/FormatData";

test("renders with the correct data ", () => {
    const data = {
        name: "Pikachu",
        height: "15"
    }
    render(<FormatData data={data} />);
    // Assert
    expect(screen.getByText("Pikachu")).toHaveTextContent("Pikachu");
    expect(screen.getByText("15")).toHaveTextContent("15");
});