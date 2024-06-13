const myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary() {
    myLibrary.push(book, book2);
}

let books = "";

function displayBooksFromLibrary() {
    for (let x of myLibrary) {
        books += x.title + " " + x.author + "<br>";
    };
    return books;
}

const book = new Book("Hobbit", "Connor");
const book2 = new Book("Hobbit 2.0", "Connor");

console.log(book);
addBookToLibrary();
displayBooksFromLibrary();
console.log(myLibrary);
document.getElementById("demo").innerHTML = books;