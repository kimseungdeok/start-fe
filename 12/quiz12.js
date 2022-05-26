export function avg() {
    let sum = 0;
    let avg = 0;
    let count = 0;
    if(Array.isArray(arguments[0])){
        for (let i = 0; i < arguments[0].length; i++) {
            count++;
            if(typeof(arguments[0][i]) !== "number"){
                count--;
                continue;
            }
            sum += arguments[0][i];
            avg = sum / count;
        }
    }else {
        for (let i = 0; i < arguments.length; i++) {
            count++;
            if(typeof(arguments[i]) !== "number"){
                count--;
                continue;
            }
            sum += arguments[i];
            avg = sum / count;
        }
    }
    return avg;
}

export function random(min, max) {

    if(max === undefined) {
        max = min;
        min = 0;
    }
    if(typeof(min) !== "number" || typeof(max) !== "number"){
        return -1;
    }
    else {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
