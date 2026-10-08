import { it, expect, vi } from "vitest";
import { retry } from "./retry.js";

it("riprova finché riesce", async () => {
  const fn = vi
    .fn()
    .mockRejectedValueOnce(new Error("1"))
    .mockRejectedValueOnce(new Error("2"))
    .mockResolvedValue("ok");
  await expect(retry(fn, 3)).resolves.toBe("ok");
  expect(fn).toHaveBeenCalledTimes(3);
});
it("rilancia ultimo errore", async () => {
  const fn = vi.fn().mockRejectedValue(new Error("no"));
  await expect(retry(fn, 2)).rejects.toThrow("no");
  expect(fn).toHaveBeenCalledTimes(2);
});
