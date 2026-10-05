export function toFahrenheit(celsius){
    if (Number.isFinite(celsius) ){
        return (celsius * 9 / 5 + 32);
    } else {
        return null;
    }
}