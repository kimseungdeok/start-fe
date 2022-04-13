const $btn = document.getElementById('btn');
const $result = document.getElementById('result');
const $num = document.getElementById('num');

$btn.addEventListener('click', () => {
    let str = '';
    let value = $num.value;
    let numValue = parseInt(value);
    if(Number.isNaN(numValue)){
        alert('숫자를 입력해주세요.')
    } else {
        for(i=1; i<10; i++){
            str += `<div>${value} x ${i} = ${value * i}</div>`
        }
    }
    $result.innerHTML = str; 
});


