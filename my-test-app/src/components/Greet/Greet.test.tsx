import Greet from "./Greet";
import { render, screen } from "@testing-library/react";

test("renders Greet message", () => {
  render(<Greet />);
  const greetMessage = screen.getByText(/Hello/i);
  expect(greetMessage).toBeInTheDocument();
});

test("renders greet message followed by name", () => {
  render(<Greet name="Srikar" />);
  const greetMessage = screen.getByText(/Hello Srikar/i);
  expect(greetMessage).toBeInTheDocument();
});
