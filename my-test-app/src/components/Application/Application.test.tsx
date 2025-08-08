import Application from "./Application";

import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

// https://testing-library.com/docs/

describe("Application ", () => {
  test("renders correctly", () => {
    render(<Application />);

    const nameElement = screen.getByLabelText("Name");
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByPlaceholderText("Fullname");
    expect(nameElement2).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toBeInTheDocument();

    const subHeadingElement = screen.getByRole("heading", { level: 2 });
    expect(subHeadingElement).toBeInTheDocument();

    const imgElement = screen.getByAltText("a person with a laptop");
    expect(imgElement).toBeInTheDocument();

    const testElement = screen.getByTestId("custom-element");
    expect(testElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const tAndcElement = screen.getByRole("checkbox");
    expect(tAndcElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
