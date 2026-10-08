export async function retry(fn, attempts) {
  let ultimoErrore;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      ultimoErrore = error;
    }
  }
  throw ultimoErrore;
}
