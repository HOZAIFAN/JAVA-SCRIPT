//Create a Book Class: Define a Book class with properties title, author, and yearPublished. Add a method getSummary() that returns a string summarizing the book's details.


let author
let tittle
let yearpublished

class Book {
    constructor(author, tittle, yearpublished) {
        this.author = author;
        this.tittle = tittle;
        this.yearpublished = yearpublished;
    }

    get_summary() {
        let summerization = `the author of the book is ${this.author} and tittle is ${this.tittle} and published year is ${this.yearpublished} `;
        return summerization;
    };
}
author = prompt("Name of author:")
tittle = prompt("Tittle  of Book:")
yearpublished = prompt("Year of Publication:")
let owner = new Book(author, tittle, yearpublished);
console.log(owner.get_summary());