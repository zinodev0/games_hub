import { render, screen } from "@testing-library/react";
import Index from "./index";
import "@testing-library/jest-dom";

describe("Rock Paper Scissors", () => {
  it("renders text", () => {
    render(<Index />);
    // check if all components are rendered
    const TextElement = screen.getByText(/result/i);
    expect(TextElement).toBeInTheDocument();
  });
});
