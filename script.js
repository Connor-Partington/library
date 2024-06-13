const myLibrary = [{title:"book1"}];

function Book() {

}

function addBookToLibrary() {

}

let books = "";

function displayBooksFromLibrary() {
    for (let x of myLibrary) {
        books += x;
    };
    return books;
}

console.log(displayBooksFromLibrary());
document.getElementById("demo").innerHTML = books;