import { it, expect } from "vitest";
import {sum, average}from "./stats.js"

it("sum e average", () => {
  expect(sum([1, 2, 3])).toBe(6);
  expect(sum([])).toBe(0);
  expect(average([2, 4, 6])).toBe(4);
  expect(average([])).toBe(0);
});