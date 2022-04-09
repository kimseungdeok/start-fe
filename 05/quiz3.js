function addRed() {
    let $box = document.querySelectorAll('.box')
    for(let i = 0; i < $box.length; i++){
        $box[i].classList.add('red')
        console.log($box[i].className)
    }
    console.log(document.querySelectorAll('.box'))
}

function addBox(){
    let str = '';
    str += `<div class="box"></div>`;
    document.querySelector('.box-container').innerHTML += str;
}

function deleteBox(){
    var $boxElement = document.querySelector('.box');
    $boxElement.remove();
}


function resetBox(){
    document.querySelector('.box-container').innerHTML = '';
}

function textBox(){
    var txt = document.querySelector('.txt').value
    // var $boxElement = document.querySelector('.box');
    // $boxElement.innerHTML = `<div class="box">${txt}</div>`
    console.log(document.querySelector('.txt').value)

    let $box = document.querySelectorAll('.box')
    for(let i = 0; i < $box.length; i++){
        $box[i].innerHTML = `<div class="box">${txt}</div>`
    }
}

function toggleBox(){
    let $box = document.querySelectorAll('.box')
    for(let i = 0; i < $box.length; i++){
        $box[i].classList.toggle('hidden')
        console.log($box[i].className)
    }
    
}

function imageBox(){
    let $box = document.querySelectorAll('.box');
    var $boxElement = document.querySelector('.box');
    // console.log($box[0]);
    if(!$box[0]){
        let str = '';
        str += `<div class="box"></div>`;
        document.querySelector('.box-container').innerHTML += str;
    }
    $boxElement.innerHTML = `<div class="box"><img src="https://i.imgur.com/69NjYBH.png"></div>`
}

document.querySelector('.add-red').addEventListener('click', addRed)
document.querySelector('.add-btn').addEventListener('click',addBox)
document.querySelector('.delete-btn').addEventListener('click',deleteBox)
document.querySelector('.reset-btn').addEventListener('click',resetBox)
document.querySelector('.text-btn').addEventListener('click',textBox)
document.querySelector('.toggle-btn').addEventListener('click',toggleBox)
document.querySelector('.image-btn').addEventListener('click',imageBox)