import { renderHook } from "@testing-library/react";
import useProduct from "../../hooks/useProduct";

describe("useProduct hook", () => {
  test("Hook should return loading state while loading product", () => {
    const { result } = renderHook(() => useProduct("45845656556"));
    const { status } = result.current;
    expect(status).toEqual("loading");
  });
});
