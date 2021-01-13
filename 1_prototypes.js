// Constructor
function Book(title, author, year) {
    // keys = values;
    this.title = title;
    this.author = author;
    this.year = year;
};

// getSummary

Book.prototype.getSummary = function() {
    return `${this.title} is written by ${this.author} in ${this.year}`
};

//Instantiate an object

const book1 = new Book('Book One', 'Jane Doe', 2021)

console.log(book1.year)
console.log(book1)
console.log(Object.keys(book1));
console.log(book1.getSummary());