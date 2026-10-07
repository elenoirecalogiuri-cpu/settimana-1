import { it, expect } from "vitest";
import { validate } from "./validate.js";

it("validate", () => {
  expect(validate({ name: "Anna", email: "a@b.it" })).toEqual({});
  expect(validate({ name: "A", email: "a@b.it" })).toHaveProperty("name");
  expect(validate({ name: "Anna", email: "ab.it" })).toHaveProperty("email");
  expect(Object.keys(validate({ name: "", email: "" }))).toHaveLength(2);
});
