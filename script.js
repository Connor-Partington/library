const addBookButton = document.querySelector(".add-book");
const addFormDialog = document.querySelector(".add-book-dialog");
const bookForm = document.querySelector(".add-book-form");
const closeDialogButton = addFormDialog.querySelector(".close-dialog-button");
const addBookDialogButton = addFormDialog.querySelector(".add-book-dialog-button");
const bookTable = document.getElementById("book-container");

// show the dialog when the user clicks the add book button
addBookButton.addEventListener("click", () => {
    addFormDialog.showModal();
});

// hide the dialog when the user clicks the close button
closeDialogButton.addEventListener("click", (event) => {
    event.preventDefault();
    addFormDialog.close();
    bookForm.reset();
});

// hide the dialog when the user presses the escape key
addFormDialog.addEventListener("keypress", (event) => {
    if(event.key == "Escape") {
        addFormDialog.close();
        bookForm.reset();
    };
});

// close the dialog and fun the function to create a new book when the user clicks the add book button
addBookDialogButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    addFormDialog.close();
    bookForm.reset();
});

const myLibrary = [];


// book constructor 
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// create a new book from the values provided and add to library
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooksFromLibrary();
}

// create and add default books to the library and then display them
function addDefaultBooksToLibrary(title, author, pages, read) {
    const book1 = new Book("book1", "author1", 12, true);
    const book2 = new Book("book2", "author2", 12, false);
    const book3 = new Book("book3", "author3", 12, true);
    const book4 = new Book("book4", "author4", 12, true);
    myLibrary.push(book1, book2, book3, book4);
    displayBooksFromLibrary();
}

// create a new book card from each entry of the library array
function displayBooksFromLibrary() {
    bookTable.innerHTML = "";
    for (const [index, x] of myLibrary.entries()) {
        const bookCard = document.createElement('div');
        const readButton = document.createElement('button');
        readButton.classList.add('read-button');
        readButton.addEventListener("click", () => {
            toggleRead(index);
        });
        if(x.read) {
            readButton.innerHTML = "Not read";
        } else {
            readButton.innerHTML = "Read";
        }
		bookCard.classList.add('book-card');
        bookCard.dataset.indexValue = index;
		bookCard.innerHTML = 
			`<div>${x.title}</div>
			<div>${x.author}</div>
			<div>${x.pages}</div>
            <div>${x.read}</div>
            <button class="remove-btn" onclick="removeBook(${index})">x</button>`;
        bookCard.append(readButton);
        bookTable.append(bookCard);
    }
}

// remove book from library based on index value data-attribute 
function removeBook(index) {
	myLibrary.splice(index, 1);
	displayBooksFromLibrary();
}

function toggleRead(index) {
    if(myLibrary[index].read) {
        myLibrary[index].read = false;
    } else {
        myLibrary[index].read = true;
    }
    displayBooksFromLibrary();
}

// check for existing books and display an empty state if none
function checkForBooks() {
    if(myLibrary == "") {
        bookTable.innerHTML = "No books added yet";
    }
}

addDefaultBooksToLibrary();
checkForBooks()