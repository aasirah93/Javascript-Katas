// Constructor
function Book(title, author, year, paperback) {
    // keys = values;
    this.title = title;
    this.author = author;
    this.year = year;
    this.paperback = paperback;
};

// getSummary

Book.prototype.getSummary = function() {
    return `${this.title} is written by ${this.author} in ${this.year}`
};

//getAge

Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old;`
};


//addProperty

Book.prototype.paperback = true;

//Instantiate an object

const book1 = new Book('Book One', 'Jane Doe', 2021, 'false')

console.log(book1.year)
console.log(book1)
console.log(Object.keys(book1));
console.log(book1.getSummary());
console.log(book1.getAge());
console.log(book1.paperback)