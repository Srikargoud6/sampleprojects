import Greet from "./Greet";
import { render, screen } from "@testing-library/react";

test("renders Greet message", () => {
  render(<Greet />);
  const greetMessage = screen.getByText(/Greet/i);
  expect(greetMessage).toBeInTheDocument();
});
