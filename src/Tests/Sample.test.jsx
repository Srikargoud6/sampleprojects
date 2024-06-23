import { render, screen } from "@testing-library/react";
import Sample from "./sample";

test("renders Sample testing", () => {
  render(<Sample />);
  const element = screen.getByText("Sample testing");
  expect(element).toBeInTheDocument();
});
