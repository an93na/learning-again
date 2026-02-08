// pętle
let zakupy = [
    "marchewka",
    "pietruszka",
    "sałata",
    "rzodkiewka",
    "ogórek",
    "pomidor"
]
let rezultat = document.getElementById('rezultat');

let i = 0;
// while (i <= zakupy.length) {
//     rezultat.innerHTML += zakupy[i]+"<br>"; 
//     i++
// }

// do {
//     console.log(i)
//     i++
// }
// while (i < 5)
// ta pętla wykonuje się przynajmniej raz gdy warunek nie jest nawet spełniony od początku

let listaZakupow = document.getElementById("produkty").getElementsByTagName('li');


while(i<listaZakupow.length){
    rezultat.innerHTML += listaZakupow[i].innerHTML+"<br>"
    i++
}