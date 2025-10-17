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
let result = [];
for( let i = 1; i <= 10; i++ ){
    result.push(i);
}

console.log(result);

//1.2
for (let i = 0; i <= 20; i += 2){
    console.log(i);
}

//1.3
function factorial(n){
    let resultat = 1;

    for (let i = 1; i <= n; i++){
        resultat *= i;
    }

    return resultat;
}

//2.1
function countDown(){
    let i = 10;
    
    while ( i >= 10 ){
        console.log(i);
        i--;
    }
}

//2.2
function firstNumberDivisibleBy7 (numbers){
    let i = 0;

    while ( i < numbers.length ){
        if ( numbers[i] % 7 === 0){
            return numbers[i];
        }
    }
}

//2.3
// demander au prof


//3.1
const fruits = ['apple', 'banana', 'orange'];

for ( const fruit of fruits ){
    console.log(fruit);
}

//3.2
const userForIn = {
    name: 'Alice',
    age: 35,
}

for ( const key in userForIn ){
    console.log( key + ': ' + userForIn[key] );
}

//3.3
const numbersAverage = [10, 15, 20, 5, 3];
let sum = 0;
for ( const number of numbersAverage ){
    sum += number;
}
const average = sum / numbersAverage.length;
console.log('Moyenne = ', average);

//4.1
const findElementInArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const element = 5;

for ( let i = 0; i < findElementInArray.length; i++ ){
    if ( findElementInArray[i] === element );
    console.log('Element found:', findElementInArray[i]);
    break;
}

//4.2
const arrayOfNumbers = [ -5, 3, -2, 8, -1, 4 ];

for ( let i = 0; i < arrayOfNumbers.length; i++ ){
    if ( arrayOfNumbers[i] < 0 ) continue;
    console.log( arrayOfNumbers[i] );
}

//4.3
const listOfContacts = ['Alice', 'Bob', 'Charlie', 'Meriton'];
const searchContact = 'Meriton';

for ( let i = 0; i < listOfContacts.length; i++ ){
    if ( listOfContacts[i] === searchContact ){
        console.log('Contact found:', listOfContacts[i]);
        break;
    }
}