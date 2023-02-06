function move() {
    document.getElementById('mul').style.marginTop = "-90px";
    document.getElementById('add').style.marginTop = "60px";
    document.getElementById('add').style.marginLeft = "-70px";
    document.getElementById('sub').style.marginTop = "60px";
    document.getElementById('sub').style.marginLeft = "70px";
}

function changeColor() {
    document.getElementById('btn').style.backgroundColor = "yellow";
}


// 2
// Do a named export here to export both of the above functions
export { move, changeColor };