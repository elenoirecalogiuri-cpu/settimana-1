export function withTimeout(promise, ms) {
  const timer = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("timeout")), ms),
  );
  return Promise.race([promise, timer]);
}
