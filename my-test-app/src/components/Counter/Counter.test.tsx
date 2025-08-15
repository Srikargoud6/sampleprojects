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

  test("render amount of 10 after clicking set button", async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", { name: "set" });
    await user.click(setButton);

    const countElement = screen.getByRole("heading", { level: 2 });
    expect(countElement).toHaveTextContent("1");
  });

  // test("handlers are called", async () => {
  //   user.setup();
  //   const incrementHandler = jest.fn();
  //   const decrementHandler = jest.fn();
  //   render(<Counter />);

  //   const incrementButton = screen.getByRole("button", { name: "+" });
  //   const decrementButton = screen.getByRole("button", { name: "-" });

  //   await user.click(incrementButton);
  //   await user.click(decrementButton);

  //   expect(incrementHandler).toHaveBeenCalledTimes(1);
  //   expect(decrementHandler).toHaveBeenCalledTimes(1);
  // });
});
