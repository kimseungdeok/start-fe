const body = document.querySelector('body');
const box = document.getElementById('box');


const {width:boxWidth, height:boxHeight} = box.getBoundingClientRect();


let isDragging = null;
let originX = null;
let originY = null;
let originLeft = null;
let originTop = null;

box.addEventListener('mousedown', (e) => {
    isDragging = true;
    originX = e.clientX;
    originY = e.clientY;
    originLeft = box.offsetLeft;
    originTop = box.offsetTop;
    console.log(originX, originY, originLeft,originTop);
});



box.addEventListener('mouseup', (e)=> {
    isDragging = false;
});



box.addEventListener('mousemove', (e) => {
    if(isDragging == true){
        const diffX = e.clientX - originX;
        const diffY = e.clientY - originY;

        box.style.left = `${originLeft + diffX}px`
        box.style.top = `${originTop + diffY}px`
    }
})
