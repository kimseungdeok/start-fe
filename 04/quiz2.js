var $board = document.getElementById("board");
var boardCount = 16;
var isWhite = false;
var className = 'black'
var boardLineCount = 4;

var str = '';
for(var i=0; i<boardCount; i++){
    className = (isWhite) ? 'black': 'white';
     
    str += '<span class="'+className+'"></span>'

    isWhite = !isWhite;

    if(i % boardLineCount === 3) {
        isWhite = !isWhite;
    }
}

$board.innerHTML = str;

var $boards = document.querySelectorAll('span');
var boardLength = $boards.length;
var $select = null;

function select(event) {
    if($select) {
        $select.className = $select.className.replace(' select', '')
    }
    var el = event.currentTarget;//현재 element가 나옴
    console.log(el);
    el.className += ' select';
    $select = el;
}

for(var i = 0; i < boardLength; i++) {
    $boards[i].addEventListener('click', select);
}