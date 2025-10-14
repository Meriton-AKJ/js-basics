//1

//1.1
function createUser (name, age, email){
    return { name, age, email };
}

const user1 = createUser('Alice', 30, 'alice@exemple.com');
const user2 = createUser('Bob', 25, 'bob@exemple.com');

//1.2
function updateUser (user, email = '', age = null, name =''){
    
}{
    const user = {
        name: 'Alice',
        age: 30,
        email: ''
    };
    return user;
}

//1.3
function getUserInfo (){
    const user = {
        resultat: user.name + ' ' + user.age + ' ' + user.email
    }
}

//2

//2.1
function createBankAccount () {
    const bankAccount = {
        balance: 0,
        deposit: function(amount){
            this.balance += amount;
        },

        withdraw: function(amount){
            this.balance -= amount;
        },

        getBalance: function(){
            return this.balance;
        }

    }
    
}

//2.2
function createCar (){
    const car = {
        brand: '',
        model: '',
        year: 2020,
        start: function(){
            return "Vroum vroum!";
        },
        getAge: function(){
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }
}