import Button from "../src/components/ui/Button";
import { render, screen } from "@testing-library/react";

describe(`Unit Test for ${Button.name} component`, () => {
  describe(`based on the ${Button.name} for toggling read and edit mode`, () => {
    const toggleButtonText = "Edit/Read Mode";

    beforeEach(() => {
      render(
        <Button theme={"main-theme"} buttonRole={toggleButtonText}>
          {toggleButtonText}
        </Button>
      );
    });

    test("if an element of role button is rendered.", () => {
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    test("if it displays the correct text-content.", () => {
      const button = screen.getByRole("button");
      expect(button.textContent).toBe(toggleButtonText);
    });

    test("it the primary theme is applied.", () => {
      const button = screen.getByRole("button");
      expect(button).toHaveClass("main-theme");
    });
  });
});
