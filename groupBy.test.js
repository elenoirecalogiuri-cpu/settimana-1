import { it, expect } from "vitest";
import {groupBy} from "./groupBy.js"

it("groupBy", () => {
  const people = [
    { name: "Anna", team: "A" },
    { name: "Luca", team: "B" },
    { name: "Sara", team: "A" },
  ];
  expect(groupBy(people, (p) => p.team)).toEqual({
    A: [people[0], people[2]],
    B: [people[1]],
  });
  expect(groupBy([], (x) => x)).toEqual({});
});

it("dà lo stesso risultato di Object.groupBy", () => {
  const people = [
    { name: "Anna", team: "A" },
    { name: "Luca", team: "B" },
    { name: "Sara", team: "A" },
  ];
  expect(groupBy(people, (p) => p.team)).toEqual(
    Object.groupBy(people, (p) => p.team)
  );
});