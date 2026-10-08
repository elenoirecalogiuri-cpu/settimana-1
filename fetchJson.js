export class HttpError extends Error {
  constructor(status, url) {
    super(`Richiesta fallita: ${status}`);
    this.name = "HttpError";
    this.status = status;
    this.url = url;
  }
}

export async function fetchJson(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new HttpError(res.status, url);
  }
  return res.json();
}
