const area = document.querySelector('.area');
const box = document.getElementById('box');

const {width:areaWidth, height:areaHeight} = area.getBoundingClientRect();
const {width:boxWidth, height:boxHeight} = box.getBoundingClientRect();

console.log(areaWidth, areaHeight, boxWidth, boxHeight);

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
        const endOfXPoint = areaWidth - boxWidth;
        const endOfYPoint = areaHeight - boxHeight;
        console.log(diffX, diffY, endOfXPoint, endOfYPoint);
        box.style.left = `${Math.min(Math.max(0, originLeft + diffX), endOfXPoint)}px`
        box.style.top = `${Math.min(Math.max(0, originTop + diffY), endOfYPoint)}px`
    }
})