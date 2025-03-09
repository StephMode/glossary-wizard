import Button from "../src/components/ui/Button";
import { render, screen } from "@testing-library/react";

describe(`Unit Test for ${Button.name} component`, () => {
  const toggleButtonText = "Edit/Read Mode";

  beforeEach(() => {
    render(
      <Button theme={"main-theme"} buttonRole={toggleButtonText}>
        {toggleButtonText}
      </Button>
    );
  });

  test("Renders an element of role button.", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Has text-content according to the role of the button.", () => {
    expect(screen.getByRole("button").textContent).toBe(toggleButtonText);
  });

  it("Has a primary theme.", () => {
    expect(screen.getByRole("button")).toHaveClass("main-theme");
  });
});
