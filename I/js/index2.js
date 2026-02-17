function wypiszTekst(tekst) {
    console.log(tekst + "!!!")
}

let wybor = document.getElementById("wybor")
wybor.onclick = function () {
    alert('kliknieto')
}


function zmienKolor() {
    this.className = "zmienKolor"
}
function zmienKolor2() {
    this.className = ""
}
let test = document.getElementById("test");
test.onmouseover = zmienKolor;
test.onmouseleave = zmienKolor2;

