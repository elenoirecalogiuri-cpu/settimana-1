export function sum(numbers){
    return numbers.reduce((totale, n) => totale + n, 0);
}


export function average (numbers) {
    if (numbers.length === 0 ) 
        return 0;
    return sum(numbers) / numbers.length;
}