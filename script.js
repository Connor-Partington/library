const addBookButton = document.querySelector(".add-book");
const addFormDialog = document.querySelector(".add-book-dialog");
const closeDialogButton = addFormDialog.querySelector(".close-dialog-button");
const addBookDialogButton = addFormDialog.querySelector(".add-book-dialog-button");
const bookTable = document.getElementById("demo");

addBookButton.addEventListener("click", () => {
    addFormDialog.showModal();
});

closeDialogButton.addEventListener("click", (event) => {
    event.preventDefault();
    addFormDialog.close();
});

addBookDialogButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary(title.value, author.value);
    addFormDialog.close();
});

const myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author) {
    const newBook = new Book(title, author);
    myLibrary.push(newBook);
    displayBooksFromLibrary();
    console.log(myLibrary);
}

function displayBooksFromLibrary() {
    let books = "";
    for (let x of myLibrary) {
        books += x.title + " " + x.author + "<br>";
    };
    bookTable.innerHTML = books;
}