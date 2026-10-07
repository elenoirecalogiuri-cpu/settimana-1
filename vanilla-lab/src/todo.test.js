// @vitest-environment jsdom
import { it, expect, beforeEach } from "vitest";
import { mountTodo } from "./todo.js";

let root;
beforeEach(() => {
  root = document.createElement("div");
  document.body.replaceChildren(root);
  mountTodo(root);
});

function add(text) {
  root.querySelector("input").value = text;
  root.querySelector("form").dispatchEvent(new Event("submit", { cancelable: true }));
}

it("aggiunge una voce", () => {
  add("Studiare");
  expect(root.querySelectorAll("li")).toHaveLength(1);
  expect(root.querySelector("li").textContent).toContain("Studiare");
});
it("non aggiunge voci vuote", () => {
  add("   ");
  expect(root.querySelectorAll("li")).toHaveLength(0);
});
it("elimina una voce", () => {
  add("A");
  root.querySelector("[data-action=delete]").click();
  expect(root.querySelectorAll("li")).toHaveLength(0);
});
it("non interpreta HTML nel testo", () => {
  add("<b>ciao</b>");
  expect(root.querySelector("li b")).toBe(null);
});
