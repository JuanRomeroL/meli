import { render } from "@testing-library/react";
import Seo from "../components/Seo";

describe("<Seo /> component", () => {
  test("Component should be rendered correctly", () => {
    const { container } = render(
      <Seo title={"test title"} description={"description title"} />
    );
    expect(container).toMatchSnapshot();
  });
});
