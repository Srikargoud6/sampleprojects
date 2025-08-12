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

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("staart learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("staart learning button is eventually rendered", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).toBeInTheDocument();
  });
});
