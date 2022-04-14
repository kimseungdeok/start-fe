const $bug = document.getElementById('bug');
const $box = document.querySelector('.box');
let point = document.getElementById('point');
let life = document.getElementById('life');
let count = 1;
let lifeCount = 9;

console.log(document.getElementById('point').innerText)

$box.addEventListener('click', (e) =>{
    if(lifeCount < 0) {
        alert('gameover');
    } else {
    life.innerHTML = lifeCount--;
    console.log('click', count, EventTarget);
    $bug.style.left = `${Math.random()*400}px`;
    $bug.style.top = `${Math.random()*400}px`;
    }

})
$bug.addEventListener('click', (e) => {
    point.innerHTML = count++;
    life.innerHTML = lifeCount++;
});