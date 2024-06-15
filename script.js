const addBookButton = document.querySelector(".add-book");
const addFormDialog = document.querySelector(".add-book-dialog");
const bookForm = document.querySelector(".add-book-form");
const closeDialogButton = addFormDialog.querySelector(".close-dialog-button");
const addBookDialogButton = addFormDialog.querySelector(".add-book-dialog-button");
const bookTable = document.getElementById("book-container");

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
}

function addDefaultBooksToLibrary(title, author, pages, isRead) {
    const book1 = new Book("book1", "author1", 12, "read");
    const book2 = new Book("book2", "author2", 12, "notread");
    const book3 = new Book("book3", "author3", 12, "notread");
    const book4 = new Book("book4", "author4", 12, "notread");
    myLibrary.push(book1, book2, book3, book4);
    displayBooksFromLibrary();
}

function displayBooksFromLibrary() {
    bookTable.innerHTML = "";
    for (const [index, x] of myLibrary.entries()) {
        const bookCard = document.createElement('div');
		bookCard.classList.add('book-card');
        bookCard.dataset.indexValue = index;
		bookCard.innerHTML = 
			`<div>${x.title}</div>
			<div>${x.author}</div>
			<div>${x.pages}</div>
            <div>${x.isRead}</div>`;
        bookTable.append(bookCard);
    }
}

function checkForBooks() {
    if(myLibrary == "") {
        bookTable.innerHTML = "No books added yet";
    }
}

addDefaultBooksToLibrary();
checkForBooks()