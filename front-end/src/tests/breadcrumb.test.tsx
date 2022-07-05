import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

describe("<Breadcrumb/> component", () => {
  test("Component should be rendered correctly in success state", () => {
    const { container } = render(
      <Breadcrumb
        labels={["Test Label 1", "Test Label 2"]}
        status={"success"}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("Component should be rendered correctly in loading state", () => {
    const { container } = render(
      <Breadcrumb
        labels={["Test Label 1", "Test Label 2"]}
        status={"loading"}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("Component should be rendered correctly in error state", () => {
    const { container } = render(
      <Breadcrumb labels={["Test Label 1", "Test Label 2"]} status={"error"} />
    );
    expect(container).toMatchSnapshot();
  });
});
