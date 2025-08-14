import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading", { level: 2 });
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "+" });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders count 0", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading", { level: 2 });
    expect(countElement).toHaveTextContent("0");
  });

  test("renders count 1 after clicking + button", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "+" });
    await user.click(incrementButton);

    const countElement = screen.getByRole("heading", { level: 2 });
    expect(countElement).toHaveTextContent("1");
  });
});
