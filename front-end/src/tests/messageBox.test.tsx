import React from "react";
import { render } from "@testing-library/react";
import MessageBox from "../components/MessageBox";

describe("<MessageBox/> component", () => {
  test("Component should be rendered correctly", () => {
    const { container } = render(<MessageBox message={"Test message"} />);
    expect(container).toMatchSnapshot();
  });
});
