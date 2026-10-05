import { it, expect } from "vitest";
import  {toFahrenheit} from "./temperature.js";

it("toFahrenheit", () => {
  expect(toFahrenheit(0)).toBe(32);
  expect(toFahrenheit(100)).toBe(212);
  expect(toFahrenheit(-40)).toBe(-40);
  expect(toFahrenheit("20")).toBe(null);
  expect(toFahrenheit(NaN)).toBe(null);
  expect(toFahrenheit(undefined)).toBe(null);
});