import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  const skills = ["html", "css", "js"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders list of skills", () => {
    render(<Skills skills={skills} />);
    const listItem = screen.getAllByRole("listitem");
    expect(listItem).toHaveLength(skills.length);
  });
});
