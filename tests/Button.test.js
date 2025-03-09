import Button from "../src/components/ui/Button";
import { render, screen } from "@testing-library/react";

describe(`Unit Test for ${Button.name} component`, () => {
  beforeEach(() => {
    render(<Button />);
  });

  test("Renders an element of role button", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("Has text content based on prop passed with the example of the toggle button", () => {
    const toggleButton = screen.getByRole("button").textContent;
    expect(toggleButton).toHaveAttribute("buttonRole");
    expect(toggleButton).toBe("Edit/Read Mode");
  });

  test("Has a primary theme", () => {
    expect(screen.getByRole("button")).toHaveAttribute("theme");
  });
});
