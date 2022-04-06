const box = document.getElementById('box');

const clientRect = box.getBoundingClientRect();

let isDragging = null;
let originX = null;
let originY = null;
let mouseX = null;
let mouseY = null;

console.log(clientRect)

box.addEventListener('mousedown', getLocation)

function getLocation(){
    isDragging = true;
    originX = clientRect.x;
    originY = clientRect.y;
    console.log(originX, originY);
    
}

function unclickMouse(){
    isDragging = false;
}


box.addEventListener('mouseup', unclickMouse)



box.addEventListener('mousemove', (e) => {
    if(isDragging == true){
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        console.log(e.clientX,e.clientY);
        box.style.left = mouseX + 'px';
        box.style.top = mouseY + 'px';
    }
})
