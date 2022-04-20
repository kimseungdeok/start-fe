const $btn = document.getElementById('btn');
const $box = document.getElementById('box');
const $min = document.getElementById('min');
const $max = document.getElementById('max');
const $innerBox = document.querySelector('.innerBox');

$btn.addEventListener('click', () => {
    let i = 0;
    let randomNum = '';
    let min = $min.value;
    let max = $max.value;
    if(min > max) {
        alert('최소 값이 최대 값보다 큽니다. 다시 입력해주세요.');
    }
    randomNum = getRandomInt(min, max);

    var movingNum = setInterval(function(){
        if(i++ < randomNum){
            $btn.style.visibility='hidden';
            $innerBox.innerText = i;
        }else{
            $btn.style.visibility='visible';
            clearInterval(movingNum);
            
        }
    },10)
    // for(i=0; i<randomNum;i++){
    //     setInterval($innerBox.innerText = i,300)
    //     // console.log(i);
    // }
    // // setInterval($innerBox.innerHTML = randomNum,3000);
}) 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}



