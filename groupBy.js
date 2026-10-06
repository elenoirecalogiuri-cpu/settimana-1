export function groupBy(items, keyFn) {
  const gruppi = {};
  for (const item of items) {
    const chiave = keyFn(item);
    if (gruppi[chiave] === undefined) {
      gruppi[chiave] = [];
    }
    gruppi[chiave].push(item);
  }
  return gruppi;
}