export function once(fn){
    let called = false;
    let result;
    return (...args) => {
        if (!called){
            called = true;
            result = fn(...args);
        }
        return result;
    }
}






export function debounce(fn, ms){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn (...args),ms);
    }
}