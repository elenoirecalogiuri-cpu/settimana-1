import { it, expect } from "vitest";
import { updateUserCity } from "./updateUserCity.js";


it("aggiorna senza mutare", () => {
  const state = {
    users: [
      { id: 1, name: "Anna", address: { city: "Lecce" } },
      { id: 2, name: "Luca", address: { city: "Bari" } },
    ],
  };
  const snapshot = structuredClone(state);
  const next = updateUserCity(state, 2, "Roma");

  expect(next.users[1].address.city).toBe("Roma");
  expect(state).toEqual(snapshot);              
  expect(next).not.toBe(state);                 
  expect(next.users).not.toBe(state.users);     
  expect(next.users[0]).toBe(state.users[0]);  
});