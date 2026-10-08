import { it, expect, vi, afterEach } from "vitest";
import { fetchJson, HttpError } from "./fetchJson.js";

afterEach(() => vi.unstubAllGlobals());
const response = (status, body) => ({
  ok: status >= 200 && status < 300,
  status,
  json: async () => body,
});

it("restituisce il JSON", async () => {
  vi.stubGlobal(
    "fetch",
    vi.fn(async () => response(200, { id: 1 })),
  );
  await expect(fetchJson("/x")).resolves.toEqual({ id: 1 });
});
it("lancia HttpError sugli stati di errore", async () => {
  vi.stubGlobal(
    "fetch",
    vi.fn(async () => response(404, {})),
  );
  await expect(fetchJson("/x")).rejects.toBeInstanceOf(HttpError);
  await expect(fetchJson("/x")).rejects.toMatchObject({
    status: 404,
    url: "/x",
  });
});
it("passa le opzioni a fetch", async () => {
  const spy = vi.fn(async () => response(200, {}));
  vi.stubGlobal("fetch", spy);
  await fetchJson("/x", { method: "POST" });
  expect(spy).toHaveBeenCalledWith("/x", { method: "POST" });
});
