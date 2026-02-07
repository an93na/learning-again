// zmienne
//var nazwaZmiennej ; //deklaracja zmiennej var to zmienna działająca w zakresie funkcyjnym lub globalnym, podelega hostingowi i może być dwklarowana wielokrotnie
// nazwaZmiennej = 5

var nazwaZmiennej = 5;
let x = 5;
let y = 6;

// typy zmiennych
// liczby - number
// ciąg znaków - string
// wartość logiczna - true/false
// tablice, obiekty 
// null - pustka
// undefined - niezdefiniowana

const vat = 23;
const obliczonyVat = (1+(vat*1/100));
// console.log(obliczonyVat)
const cenaNettoJava=39;
const centaNettoAjax = 34;

let cennaBruttoJava = cenaNettoJava+obliczonyVat;
// console.log(cennaBruttoJava)
let cennaBruttoAjax = centaNettoAjax+obliczonyVat;

const imie = "Arkadiusz";
const wynik = true
// alert(`wypisz ${x+y}`);

// alert('Cena brutto Java wynosi'+" "+cennaBruttoJava);

// 
// Ćwiczenie 1 Oblicz cenę brutto produktu
const podatekVat = 23;
const obliczonyVat2 = (1+(podatekVat/100)) 
const cenaSluchawek = 100;
const cenaAparatu = 700;

const cenaSluchawekBrutto = cenaSluchawek + obliczonyVat2;
const cenaAparatuBrutto = cenaAparatu + obliczonyVat2;

// alert('cena słuchawek brutto:'+" "+ cenaSluchawekBrutto + "zł");


let a = 9;
let b = 2;

console.log(a%b)

// a = a+2;
a+=2;

console.log(a);

// b = b+1;
b++;
console.log(b);

// a=a-1;
a--

// a++ post inkrementacja - zrob coś po
// a-- post decrementacja
// --a preinkrementacja - zrób coś przed
// ++a predekrementacja
console.log('preinkrementacja',++a)
console.log('postinkrementacja',a++)

// === porównanie czy wartości dwóch zmiennnych są identyczne
// == porównanie
// = przypisanie
// !== różne od 

let q = 3;
let w = '3';

console.log(q == w) //true
console.log(q === w) // tu patrzy na typ więc false
console.log(q !== b) // false
console.log(q!=w) // false
console.log(q!==w) // true

// Operatory logiczne 
// operują na true lub false
// ! negacja 
//  1 to zmieni w 0
//  o to zmieni w 1
// && koniunkcja "i" - w tym samym momencie spełnione
// 1 1 - 1
// 1 0 - 0
// 0 1 - 0
// 0 0 - 0
// koniunkcja jest prawdziwa wtedy i tylko wtedy gdy oba wyrażenia są prawdziwe
 
let e = 3;
let r = 31;

if (e < r) {
    console.log('prawda')
}  

// instrukcje warunkowe
if (e < r) {
    console.log('e mniejsze od r')
}
else if (e > r ) 
{
    console.log('e jest większe od r')
}
else {
    console.log('e nie jest ani większe ani mniejsze od r')
}
// skrocona wersja wyrażenie ? zwróć jeżeli wyrażenie true : zwróć jeżeli wyrażenie false

let czyParzysta = (e % 2 === 0) ? true : false;
console.log(`liczba ${e} jest liczbą parzystą ${czyParzysta}`)

// switch

let dzienTygodnia = 5;

switch(dzienTygodnia){
    case 1:
        console.log('dziś jest poniedziałek')
    break
    case 2:
            console.log('dziś jest wtorek')
    break
    case 3:
        console.log('dziś jest środa')
    break
    case 4:
        console.log('dziś jest czwartek')
    break
    case 5:
        console.log('dziś jest piątek')
    break
    case 6:
        console.log('dziś jest sobota')
    break
    case 7:
        console.log('dziś jest niedziela')
    break
    default: 
        console.log('nie ma takiego dnia tygodnia')
}

switch(dzienTygodnia){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('dziś jest dzień pracujący')
    break
    case 6:
    case 7:
        console.log('dziś jest weekend')
    break
    default: 
        console.log('nie ma takiego dnia tygodnia')
}