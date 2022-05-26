export function avg() {
    let sum = 0;
    let avg = 0;
    let count = 0;
    // console.log(Array.isArray(arguments[0]));
    if(Array.isArray(arguments[0])){
        
    }

    for (let i = 0; i < arguments.length; i++) {
        count++;
        if(typeof(arguments[i]) !== "number"){
            count--;
            continue;
        }
        sum += arguments[i];
        avg = sum / count;
    }

    return avg;
}

// console.log(avg(1,2,'a','a',3,'a','b'));
console.log(avg([1,2,3]));

export function random(min, max) {
    console.log(typeof(min),typeof(max));

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

console.log(random(3));


