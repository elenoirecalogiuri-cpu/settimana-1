import { it, expect } from "vitest";
import { isEven, fizzBuzz, clamp } from "./basics.js";

it("isEven", () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(7)).toBe(false);
  expect(isEven(0)).toBe(true);
  expect(isEven(-2)).toBe(true);
});
it("fizzBuzz", () => {
  expect(fizzBuzz(3)).toBe("Fizz");
  expect(fizzBuzz(10)).toBe("Buzz");
  expect(fizzBuzz(30)).toBe("FizzBuzz");
  expect(fizzBuzz(7)).toBe("7");
});
it("clamp", () => {
  expect(clamp(5, 0, 10)).toBe(5);
  expect(clamp(-3, 0, 10)).toBe(0);
  expect(clamp(42, 0, 10)).toBe(10);
});