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

// Instantiate Mag Object

const mag1 = new Magazine('Mag One, John Dough', '2018', 'Jan');