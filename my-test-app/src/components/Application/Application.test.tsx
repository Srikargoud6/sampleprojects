import Application from "./Application";

import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

describe("Application ", () => {
  test("renders correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const tAndcElement = screen.getByRole("checkbox");
    expect(tAndcElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
