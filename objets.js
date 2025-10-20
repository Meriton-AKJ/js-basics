//1

//1.1
function createUser (name, age, email){
    return { name, age, email };
}

const user1 = createUser('Alice', 30, 'alice@exemple.com');
const user2 = createUser('Bob', 25, 'bob@exemple.com');

//1.2
function updateUser (user, email = '', age = null, name =''){
    if (email) user.email = email;
    if (age) user.age = age;
    if (name) user.name = name;
    return user;
}

const user3 = updateUser(user1, 'charlie@exemple.com', null , 'Charlie');

//1.3
function getUserInfo (user){
         return user.name + ' - ' + user.age + ' ans - ' + user.email;
}

const user4 = getUserInfo('Meriton', 25, 'meriton@exemple.com');

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
    
    return bankAccount;
}

//2.2
function createCar (){
    const car = {
        brand: brand,
        model: model,
        year: year,
        start: function(){
            return "Vroum vroum!";
        },
        getAge: function(){
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }

    return car;
}

