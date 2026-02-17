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
// const powiekszRozmiar = () => {
//     test.className = 'powieksz'
// }
// const zmniejszRozmiar = () => {
//     test.className = 'zmniejsz'
// }
let test = document.getElementById("test");
test.onmouseover = zmienKolor;
test.onmouseleave = zmienKolor2;

let fontSize = 10
const powiekszRozmiar = () => {
    fontSize++
    test.setAttribute('style', `font-size: ${fontSize}px`)
}
const zmniejszRozmiar = () => {
    fontSize--
    test.style.fontSize = fontSize+'px'
}
let increase = document.getElementById("+");
let decrease = document.getElementById("-")

increase.onclick = powiekszRozmiar;
decrease.onclick = zmniejszRozmiar;