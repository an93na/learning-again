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
const powiekszRozmiar = () => {
    test.className = 'powieksz'
}
const zmniejszRozmiar = () => {
    test.className = 'zmniejsz'
}
let test = document.getElementById("test");
test.onmouseover = zmienKolor;
test.onmouseleave = zmienKolor2;

let increase = document.getElementById("+");
let decrease = document.getElementById("-")

increase.onclick = powiekszRozmiar;
decrease.onclick = zmniejszRozmiar;