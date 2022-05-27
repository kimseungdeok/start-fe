import { avg } from "./quiz12.js";
import { random } from "./quiz12.js"

const avgBtn = document.querySelector('#avgBtn');
const randBtn = document.querySelector('#randBtn');

// let avgValue = document.querySelector('#avg').value;
let randValue = document.querySelector('#random').value;

avgBtn.addEventListener('click', ()=> {
    let avgValue = document.querySelector('#avg').value;
    console.log(avg(...avgValue));
    console.log(avgValue);
    console.log();
})

randBtn.addEventListener('click', ()=> {
    random(randValue);
})


// function init() {
//     const avgResult = avg(1,2);
//     const randomResult = random(100);

//     console.log(avgResult);
//     console.log(randomResult);
// }

// init();


