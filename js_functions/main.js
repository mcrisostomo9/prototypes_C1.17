//fs1.1
function myMessage(){
    console.log('This is my first function');
}

//fs1.3
function add(x, y){
    var total = x + y;
    console.log(total);
}

//fs2.1
function add2(x, y){
    var total = x + y;
    return total;
}
var add2result = add2(100, 300);

//fs3
function cardFlip(div){
    $(div).hide();
}
