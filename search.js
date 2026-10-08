export function createSearch(fetcher, onResult) {
  let controller;

  return async function search(query) {
    controller?.abort();
    controller = new AbortController();
    try {
      const risultato = await fetcher(query, controller.signal);

      onResult(risultato);
    } catch (error) {
      if (error.name !== "AbortError") throw error;
    }
  };
}
