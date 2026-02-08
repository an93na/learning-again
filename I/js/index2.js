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


// while(i<listaZakupow.length){
//     rezultat.innerHTML += listaZakupow[i].innerHTML+"<br>"
//     i++
// }

// for (let index = 0; index < listaZakupow.length; index++) {
//     rezultat.innerHTML += listaZakupow[index].innerHTML+"<br>"

// }

// for (let index = 0; index < listaZakupow.length; index++) {
//     if(index %2 ==! 0){
//         listaZakupow[index].innerHTML =  "parzysty: " + listaZakupow[index].innerHTML
//     }
//     else
//         continue
//     alert(index)
// }
// object = {
//     imie: "Agata",
//     nazwisko: "Kowalska",
//     wiek: 43
// }

// for (const key in object) {
//     alert(object[key])
// }

let argument = [3, 4, 7, 6, 9, 78]
const addNumbers = () => {
    let sum = 0
    for (let index = 0; index < argument.length; index++) {
        sum += argument[index]
    }
    return sum
}

let sum = 0;
for (const key in argument) {
    sum += argument[key];
}

let suma = addNumbers(argument);
console.log(suma)
console.log(sum)
