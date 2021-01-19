function Book(title, author, year,) {
    // keys = values;
    this.title = title;
    this.author = author;
    this.year = year;
};

//Magazine Constructor

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// Prototype
// getSummary

Book.prototype.getSummary = function() {
    return `${this.title} is written by ${this.author} in ${this.year}`
};

//Inherit Prtototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Mag Object

const mag1 = new Magazine('Mag One, John Dough', '2018', 'Jan');

Magazine.prototype.constructor = Magazine;

console.log(mag1)