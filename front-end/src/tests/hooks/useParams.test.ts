import { render, renderHook } from "@testing-library/react";
import useParams from "../../hooks/useParams";

describe("use Params hook", () => {
  test("Hook should work correctly with specified queryString", () => {
    const { result } = renderHook(() => useParams("?q=Test"));
    expect(result.current).toEqual("Test");
  });
});
