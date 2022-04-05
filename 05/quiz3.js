function addRed() {
    document.querySelector('box-container').className += 'red'
    console.log(document.querySelectorAll('.box') )
}

document.querySelector('.add-red').addEventListener('click', addRed)

function addBox(){
    let str = '';
    str += `<div class="box"></div>`;
    document.querySelector('.box-container').innerHTML += str;
 
}

document.querySelector('.add-btn').addEventListener('click',addBox)

function deleteBox(){

}

document.querySelector('.delete-btn').addEventListener('click',deleteBox)