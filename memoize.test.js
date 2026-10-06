import { it, expect, vi } from "vitest";
import { memoize } from "./memoize";

it("memoize", () => {
  const slow = vi.fn((n) => n * 2);
  const fast = memoize(slow);
  expect(fast(2)).toBe(4);
  expect(fast(2)).toBe(4);
  expect(fast(3)).toBe(6);
  expect(slow).toHaveBeenCalledTimes(2);
});