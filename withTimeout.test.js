import { it, expect } from "vitest";
import { withTimeout } from "./withTimeout.js";

const sleep = (ms, value) => new Promise((r) => setTimeout(() => r(value), ms));

it("withTimeout", async () => {
  await expect(withTimeout(sleep(10, "ok"), 100)).resolves.toBe("ok");
  await expect(withTimeout(sleep(100, "ok"), 10)).rejects.toThrow(/timeout/i);
});
