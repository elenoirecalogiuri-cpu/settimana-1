export function memoize(fn){
    const cache = new Map();

    return (n) => {
        if (cache.has(n)){
            return cache.get(n);
        }
        const result = fn(n);
        cache.set(n, result);
        return result;
    }
}