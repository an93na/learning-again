// funkcje to metoda 

function test(a, b) {
    // instrukcja 1
    // instrukcja 2
    // instrukcja 3
    return 5
}

console.log(test())

function dodaj(a, b) {
    return a + b
}

const sumaZmiennych = dodaj(2, 7)
console.log(sumaZmiennych)

function dzielenie(x, y) {
    if (y === 0) {
        console.log('nie można dzielić przez zero')
        return
    }
    return x / y;
}

let wynikDzielenia = dzielenie(10, 5);
console.log(wynikDzielenia);


if (true) {
    let imie = "Kinga"
    // var imie = "Kinga"
}

// console.log(imie)

let suma = 0;

for (let i = 0; i < 10; i++) {
    suma += 4;
}

console.log(suma)

let x = function () {
    console.log('tu jest funkcja anonimowa')
}

x()

function testowa(f) {
    f()
}

testowa(function () {
    console.log('message')
})

let hi = function (type) {
    if (type === 'szef') {
        return function (imie) { console.log('Cześć szefie ' + imie + "!") }
    }
    else {
        return function (imie) {
            console.log('Cześć ' + imie + "!");
        }
    }
}

let zwroconaFunkcja = hi("szef");
zwroconaFunkcja("Antek");

// obiekty

// let div = document.getElementById(1);
// div.innerHTML = `<p>treść</p>`;
// console.log(div);

let osoba = {
    imie: "Antek",
    nazwisko: "Kowalski",
    wiek: 23,
    plec: "m",
    pobierzInformacje: function () {
        return this.imie + " " + this.nazwisko;
    }
};

// osoba.imie = "Agata"

// console.log(osoba.imie + " " + osoba.nazwisko + " " + osoba.wiek);
console.log(osoba.pobierzInformacje())

// klasy

class tworzenieOsob {
    constructor(imie, nazwisko) {
        this.imie = imie
        this.nazwisko = nazwisko
        this.toString = function () {
            return this.imie + " " + this.nazwisko
        }

    }
}

let pierwszaOsoba = new tworzenieOsob("Agata", "Kowalska")
// console.log(pierwszaOsoba)

// tablica

let tablica = ["1", "2", "3", "4", "5"];
tablica[tablica.length] = "6"
tablica.push = "7"


console.log(tablica);

// ASSOVISTIVE ARRAYS

let osoba2 = [];
osoba2["imie"] = 'Julka';

console.log(osoba2["imie"]);
console.log(osoba2.imie);

const sklepy = document.getElementById("sklepy");
const liArray = sklepy.getElementsByTagName("li")

const calosc = document.getElementById("sklepy").getElementsByTagName("li");

console.log(sklepy)
console.log(liArray[0].innerHTML)
console.log(calosc[2].innerHTML)

let produkty = [
    'groszek',
    'kukurydza',
    'pietruszka',
    'pomidor',
    'jajka',
    'mleko'
];

produkty[produkty.length] = 'pomidory'
document.getElementById("rezultat").innerHTML = produkty.length;
document.getElementById("rezultat").innerHTML += "<p>___________________</p>";
document.getElementById("rezultat").innerHTML += produkty;

let tmp = ["czekolada", 'baton', 'wafelek']
document.getElementById("rezultat").innerHTML = produkty.concat(tmp); // łączy tablice na chwilę
document.getElementById("rezultat").innerHTML = produkty.join(' ') // join łączy elementy tablicy w określony sposób
document.getElementById("rezultat").innerHTML = produkty.pop() // pop usuwa ostatni element tablicy i zwraca go do dalszej operacji
document.getElementById("rezultat").innerHTML = produkty.push('ogórki') // push popchnięcie elementu na koniec tablicy, zwraca długość tablicy
document.getElementById("rezultat").innerHTML = produkty.shift() // shift usuwa pierwszy element z tablicy i go zwraca
document.getElementById("rezultat").innerHTML = produkty.unshift("herbata") // unshift przesuwa wszystko o 1 element i dodaje nowy element
document.getElementById("rezultat").innerHTML = produkty.sort() // sort sortuje 
// produkty.reverse() // sotruje malejąco

let liczby = [3, 34, 5, 43, 67, 11, 29]
let posortowaneRosnąco = liczby.sort((a, b) => a - b);// sortowanie rosnąco
// let posortowaneMalejąco = liczby.sort((a, b) => b - a);// sortowanie malejąci=o


console.log(produkty)
console.log(posortowaneRosnąco)
// console.log(posortowaneMalejąco)

// slice - kroić od ... do ...
// document.getElementById("rezultat").innerHTML = produkty.slice(1,3)
// splice od którego elementu zacząć usuwać, a drugi ile elemntów ma usunąć, lepić
document.getElementById("rezultat").innerHTML = produkty.splice(1,3, 'hmm', 'uuu', 'ooo')
