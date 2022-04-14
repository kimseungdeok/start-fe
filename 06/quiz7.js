const $bug = document.getElementById('bug');
const $box = document.querySelector('.box');
const $point = document.getElementById('point');
const $life = document.getElementById('life');
let count = 1; // 점수
let lifeCount = 9; // 생명

$box.addEventListener('click', (e) =>{
    if(lifeCount < 0) {
        alert('gameover');
    } else {
    $life.innerHTML = lifeCount--;
    $bug.style.left = `${Math.random()*400}px`;
    $bug.style.top = `${Math.random()*400}px`;
    }
})

$bug.addEventListener('click', (e) => {
    $point.innerHTML = count++;
    $life.innerHTML = lifeCount++;
});