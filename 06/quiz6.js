const btn = document.getElementById('btn');

btn.addEventListener('click', btnClick);

function btnClick(){
    let str = '';
    let value = document.getElementById('num').value;
    console.log(value);
    let numValue = parseInt(value);
    console.log(numValue, typeof(numValue));
    let result = document.getElementById('result');
    console.log(typeof(numValue))
    console.log(Number.isNaN(numValue))
    if(Number.isNaN(numValue)){
        alert('숫자를 입력해주세요.')
    } else {
        for(i=1; i<10; i++){
            str += `<div>${value} x ${i} = ${value * i}</div>`
        }
    }
    result.innerHTML = str; 

}

