/* Variables */
//1
let name = '';
let age = 24;
const PI = 3.14159;
let isAdult = true;

//2
let user = {
    name: '',
    age: 24,
    isAdult: true,
    hobbies: [],
};

//3
const global = 'je suis globale';

function testScope(){
    const local = 'je suis locale';
    return[ global, local ];
}

//4
const bankAccount = {
    balance: 1000,

    deposit: function(amount){
        this.balance += amount;
    },

    withdraw: function(amount){
        this.balance -= amount;
}
}

/* Fonctions */
//1.1
function  greet(name){
    return 'Hello' + ',' + name + '!';
}

//1.2
function cakculateArea (width, height){
    return  width * height ;
}

//1.3
function isEven (number){
    if (number % 2 === 0){
        return true;
    } else {
        return false;
    }
}

//2
function createUser (name, age = 18, isActive = true){
    if (name === ''){
        throw new Error('Name is required');
    }
    return {
        name: name,
        age: age,
        isActive: isActive
    };
}

//3
const globalVar = "global";

function testScope (){
    const localVar = "local";
    console.log(globalVar);
    console.log(localVar);
}

//4
function add (a, b){
    return  a + b ;
}

function miltiply (a, b){
    return a * b ;
}

function getFullName (firstName, lastName){
    return  firstName + ' ' + lastName ;
}


/* Operateurs */

//1
function calculate (a, b){
    return {
        sum: a + b,
        difference: a - b,
        product: a * b,
        quotient: a / b,
        reste: a % b
    }
}

//2
function compareNumbers (a, b){
    return {
        isBigger: a > b,
        isSmaller: a < b,
        isEqual: a == b,
        isTricklyEqual: a === b
    }
}

//3
function checkAge (age){
    if ( age >= 18 && age <= 65 ){
        return true;
    } else {
        return false;
    }
}

function isValidUser (user){
    return user.age >= 18 && user.hasValidEmail && user.isActive;
}

//4
function updateCounter (number){
    const resultat = ( number + 1 ) * 2;
    return resultat;
}

function calculateTotal (prices){
    let total = 0;
    for (let price of prices){
        total += price * 1.2;
    }
    return total;
}

/* Boucles */

//1.1
for (let i = 1; i < 10; i++){
    console.log(i);
}

//1.2
for (let i = 0; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

//1.3
// pas compris la consigne


//2.1
let x = 0;

while ( x > 10){
    x--;
    console.log(x);
}

//2.2
let n = 1;
while (true){
    if (n % 7 === 0){
        console.log(n);
        break;
    }
}

//2.3
// pas reussi a faire


//3.1
const fruits = ['pomme', 'banane', 'orange'];

for (const fruit of fruits){
    console.log(fruit);
}

//3.2
const user = {
    name: 'Meriton';
    age: 24;
}

for (const key in user){
    console.log(key + ': ' + user[key]);
}

//3.3
const note = [ '12', '15', '18', '20'];

for (const moyenne of note){
    console.log(moyenne);
}

//4.1