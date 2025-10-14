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
    console.log(global);
    console.log(local);
}

//4
let bankAccount = {
    balance =  1000,
    deposit = function(){
        this.balance +=100;
    }

    withdraw = function(){
        this.balance -=100;
    }
}

/* Fonctions */
//1.1
function greet(){
    name = ['name'];
    console.log('Hello ' + name);
}

//1.2
function calculateArea (){
    width = 5;
    height = 10;
    return width * height; // A = L * l
}

//1.3
function isEven (){
    number = 4;
    if (number % 2 === 0){ 
        return true;
    }
    else {
        return false;
    }
}

//2.1
function createUser(){
    name = '';
    age = 18;
    isActive = true;

    if (!name)
         throw new Error("Le paramètre 'name' est obligatoire !");

//2.2
    return {
        name: name,
        age: age,
        isActive: isActive
    };
}

//3.1
const globalVar = 'global';

//3.2
function testScope(){
    const localVar = 'local';
    console.log(globalVar);
    console.log(localVar);

//3.3
    return globalVar, localVar;
}

//4.1
function add(a, b){
    return a + b;
}
//4.2
function multiply(a, b){
    return a * b;
}

//4.3
function getFullName(firstName, lastName){
    return firstName + ' ' + lastName;
}

/* Operateurs */

//1
function calculate (a, b){
    return [
        a + b,
        a - b,
        a * b,
        a / b,
        a % b,
    ]
}

//2
function compareNumbers (a, b){
    if (a > b){
        return true;
    }
    else if (a < b){
        return true;
    }
    else if (a == b){
        return true;
    }
    else if (a === b){
        return true;
    }
}

//3

//3.1
function checkAge(age){
    if (18 <= age >= 65){
        return true;
    }
    else {
        return false;
    }
}

//3.2
function isValidUser(){
    age = int;
    hasValidEmail = true;
    isActive = 
    if (age >= 18 && hasValidEmail && isActive){
        return true;
    }
}

//4

//4.1

function updateCounter(nombre){
//4.1.1
    let = nombre = 0;
    
//4.1.2
    nombre += 1;

//4.1.3
    nombre = nombre * 2;

//4.1.4
    return nombre;
}

//4.2
/*function calculateTotal(){

}*/

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