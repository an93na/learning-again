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
console.log(wynikDzielenia)