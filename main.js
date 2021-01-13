// console.log('Hello World');
// console.warn('This is a warning');
// console.error('This is an error');

// const age = 30;
// age = 31;

// console.log(age);

// let score;

// score = 10

// console.log(score);

const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
      return `${this.title} was written by ${this.author} in
       ${this.year}`;
    }
};

console.log(book1.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));