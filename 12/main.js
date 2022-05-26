import { avg } from "./quiz12.js";
import { random } from "./quiz12.js"

function init() {
    const avgResult = avg(1,2);
    const randomResult = random(100);

    console.log(avgResult);
    console.log(randomResult);
    
}

init();