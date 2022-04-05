function addRed() {
    let $box = document.querySelectorAll('.box')
    for(let i = 0; i < $box.length; i++){
        $box[i].classList.add('red')
        console.log($box[i].className)
    }
    console.log(document.querySelectorAll('.box'))
}

document.querySelector('.add-red').addEventListener('click', addRed)

function addBox(){
    let str = '';
    str += `<div class="box"></div>`;
    document.querySelector('.box-container').innerHTML += str;
}

document.querySelector('.add-btn').addEventListener('click',addBox)

function deleteBox(){
    var $boxElement = document.querySelector('.box');
    $boxElement.remove();
}

document.querySelector('.delete-btn').addEventListener('click',deleteBox)

function resetBox(){
    document.querySelector('.box-container').innerHTML = '';
}
document.querySelector('.reset-btn').addEventListener('click',resetBox)

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


document.querySelector('.text-btn').addEventListener('click',textBox)

function toggleBox(){
    let $box = document.querySelectorAll('.box')
    for(let i = 0; i < $box.length; i++){
        $box[i].classList.toggle('hidden')
        console.log($box[i].className)
    }
    
}

document.querySelector('.toggle-btn').addEventListener('click',toggleBox)


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

document.querySelector('.image-btn').addEventListener('click',imageBox)