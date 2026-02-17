function wypiszTekst (tekst) {
    console.log(tekst + "!!!")
}

let wybor = document.getElementById("wybor")
wybor.onclick = function (){
    console.log('kliknięto na tekst')
}


function zmienKolor () {
    this.style.color = "blue"
}
let test = document.getElementById("test");
test.onmouseover = zmienKolor;