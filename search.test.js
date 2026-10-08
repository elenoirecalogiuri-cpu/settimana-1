import { it, vi, expect } from "vitest";
import { createSearch } from "./search.js";

it("vince sempre ultima ricerca", async () => {
  const onResult = vi.fn();
  const fetcher = (query, signal) =>
    new Promise((resolve, reject) => {
      const timer = setTimeout(() => resolve(query), query === "re" ? 50 : 10);
      signal.addEventListener("abort", () => {
        clearTimeout(timer);
        reject(new DOMException("Aborted", "AbortError"));
      });
    });

  const search = createSearch(fetcher, onResult);
  search("re"); // lenta
  search("react"); // veloce, annulla la prima
  await new Promise((r) => setTimeout(r, 100));

  expect(onResult).toHaveBeenCalledTimes(1);
  expect(onResult).toHaveBeenCalledWith("react");
});
