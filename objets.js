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

const ba = createBankAccount();
ba.deposit(4);
ba.withdraw(3);
ba.getBalance();

//2.2
function createCar (brand, model, year){
    const car = {
        brand: brand,
        model: model,
        year: year,
        start: function(){
            return "Vroum vroum!";
        },
        getAge: function(){
            const currentYear = new Date().getFullYear();
            return (currentYear - this.year);
        }
    }

    return car;
}

//3.1
function createShoopingCart(){
    const shoppingCart = {
    items: [],
    /**
     * @param article object with properties name and price {name: '', price: 0};
     */
    addItem: function(article){
        this.items.push(article);
    },
    removeItem: function(article){
        const index = this.items.indexOf(article);
        if (index !== -1){
            this.items.splice(index, 1);
        }
    },
    getTotal: function() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
        total += this.items[i].price; }
        return total;
    }
}
    return shoppingCart;
}


//3.2
function createLibrary (){
    const library = {
    books: [],
    addBook: function(book){
        this.books.push(book);
    },
    findBook: function(title){
        const bookFounded = this.books.find(book => book.title === title);
        if (bookFounded){
            return title + " is in our library";
        } else {
            return title + " is not in our library";
        }
    },
    getBooksByAuthor: function (author){
        return this.book.filter(book => book.author === author);
    }
 };
 return library;
}

//4.1
class Student {
  #name;
  #notes;

  constructor(name, notes = []) {
    this.#name = name;
    this.#notes = notes;
  }

  get notes() {
    return this.#notes;
  }

  set notes(newNote) {
    this.#notes.push(newNote);
  }

  getAverage() {
    let total = 0;
    for (let note of this.#notes) {
      total += note;
    }
    return total / this.#notes.length;
  }

  isPassing() {
    return this.getAverage() >= 10;
  }
}


//4.2
class createTimer {
    #timeLeft;

    constructor (timeLeft = []){
        this.#timeLeft = timeLeft;
    }

    start(){
        let time = this
    }
}