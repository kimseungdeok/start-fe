const body = document.querySelector('body');
const box = document.querySelector('.box');
const box1 = document.querySelector('.box1');

// getBoundingClientRect() 메서드를 통해 box의 width와 height 값을 알 수 있다.
const {width:boxWidth, height:boxHeight} = box.getBoundingClientRect();
const {width:box1Width, height:box1Height} = box1.getBoundingClientRect();


let isDragging = null;
let originX = null;
let originY = null;
let originLeft = null;
let originTop = null;

box.addEventListener('mousedown', (e) => {
    isDragging = true;
    originX = e.clientX; 
    originY = e.clientY;
    // clientX, clientY 브라우저에서 사용자에게 웹페이지가 보여지는 영역을 기준으로 좌표를 표시한다.
    originLeft = box.offsetLeft;
    originTop = box.offsetTop;
    
    console.log(originX, originY, originLeft,originTop);
});

box1.addEventListener('mousedown', (e) => {
    isDragging = true;
    originX = e.clientX; 
    originY = e.clientY;
    // clientX, clientY 브라우저에서 사용자에게 웹페이지가 보여지는 영역을 기준으로 좌표를 표시한다.
    originLeft = box1.offsetLeft;
    originTop = box1.offsetTop;
    
    console.log(originX, originY, originLeft,originTop);
});



box.addEventListener('mouseup', (e)=> {
    isDragging = false;
});

box1.addEventListener('mouseup', (e)=> {
    isDragging = false;
});


box.addEventListener('mousemove', (e) => {
    if(isDragging == true){
        const diffX = e.clientX - originX;
        const diffY = e.clientY - originY;

        box.style.left = `${originLeft + diffX}px`
        box.style.top = `${originTop + diffY}px`
    }
});

box1.addEventListener('mousemove', (e) => {
    if(isDragging == true){
        const diffX = e.clientX - originX;
        const diffY = e.clientY - originY;

        box1.style.left = `${originLeft + diffX}px`
        box1.style.top = `${originTop + diffY}px`
    }
});