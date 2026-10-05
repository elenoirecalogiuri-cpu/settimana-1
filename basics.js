export function isEven(n) {
    return n % 2 === 0;
}



export function fizzBuzz(n) {
    if (n % 15 === 0) {
        return "FizzBuzz";
    } else if ( n% 3 === 0){
        return "Fizz";
    } else if (n % 5 === 0){
        return "Buzz";
    } else {
        return String(n);
    }
};




export function clamp(value, min, max) {
    if (value < min){
        return min;
    } else if ( value > max){
        return max;
    } else {
        return value;
    }
}