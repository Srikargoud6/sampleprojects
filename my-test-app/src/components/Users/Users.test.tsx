import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Users from "./Users";

describe("users", () => {
  test("renders users list", () => {
    render(<Users />);

    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });
});
