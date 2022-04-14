const body = document.querySelector('body');
const boxes = document.querySelectorAll('.box');
// const box1 = document.querySelector('.box1');


let boxWidth = null;
let boxHeight = null;
let isDragging = null;
let originX = null;
let originY = null;
let originLeft = null;
let originTop = null;

for(i=0;i<boxes.length;i++){
    boxes[i].addEventListener('mousedown', (e) => {
        boxWidth = boxes[i].getBoundingClientRect().width;
        boxHeight = boxes[i].getBoundingClientRect().height;
        isDragging = true;
        originX = boxes[i].clientX; 
        originY = boxes[i].clientY;
        // clientX, clientY 브라우저에서 사용자에게 웹페이지가 보여지는 영역을 기준으로 좌표를 표시한다.
        originLeft = boxes[i].offsetLeft;
        originTop = boxes[i].offsetTop;
        
        console.log(originX, originY, originLeft,originTop);
    });


    boxes[i].addEventListener('mouseup', (e)=> {
        isDragging = false;
    });


    boxes[i].addEventListener('mousemove', (e) => {
        if(isDragging == true){
            const diffX = boxes[i].clientX - originX;
            const diffY = boxes[i].clientY - originY;

            boxes[i].style.left = `${originLeft + diffX}px`
            boxes[i].style.top = `${originTop + diffY}px`
        }
    })

}