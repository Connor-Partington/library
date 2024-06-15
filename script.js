const addBookButton = document.querySelector(".add-book");
const addFormDialog = document.querySelector(".add-book-dialog");
const bookForm = document.querySelector(".add-book-form");
const closeDialogButton = addFormDialog.querySelector(".close-dialog-button");
const addBookDialogButton = addFormDialog.querySelector(".add-book-dialog-button");
const bookTable = document.getElementById("demo");

addBookButton.addEventListener("click", () => {
    addFormDialog.showModal();
});

closeDialogButton.addEventListener("click", (event) => {
    event.preventDefault();
    addFormDialog.close();
    bookForm.reset();
});

addFormDialog.addEventListener("keypress", (event) => {
    if(event.key == "Escape") {
        addFormDialog.close();
        bookForm.reset();
    };
});

addBookDialogButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, isRead.value);
    addFormDialog.close();
    bookForm.reset();
});

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    displayBooksFromLibrary();
    console.log(myLibrary);
}

function displayBooksFromLibrary() {
    let books = "";
    for (const [index, x] of myLibrary.entries()) {
        console.log(index, x);
        books += index + " " + x.title + " " + x.author +  " " + x.pages +  " " + x.isRead +  "<br>";
    }
    bookTable.innerHTML = books;
}

function checkForBooks() {
    if(myLibrary == "") {
        bookTable.innerHTML = "No books added yet";
    }
}

checkForBooks()