const library = [];

const dialog = document.getElementById("dialog");
const addButton = document.querySelector(".add-book-btn");
const form = document.querySelector("form");

addButton.addEventListener("click", function() {
    
    // addBookToLibrary("creative title", "creative author", "mystery", 100, false);
    // loadLibrary();
    dialog.showModal();
})

form.addEventListener("submit", function (e) {
    // e.preventDefault();
    const formData = new FormData(form);
    const formBook = Object.fromEntries(formData);

    if (formBook.read === "true") {
        formBook.read = true;
    } else {
        formBook.read = false;
    }

    addBookToLibrary(formBook.title, formBook.author, formBook.gender, formBook.pages, formBook.read);
    loadLibrary();
    form.reset();
    closeForm();
})

// function used on a onclick on html
function closeForm() {
    dialog.close();
}

function Book(title, author, gender, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.gender = gender;
    this.pages = pages;
    this.read = read;

    this.changeRead = function() {
        this.read = !this.read;
    }
}

function addBookToLibrary(title, author, gender, pages, read) {
    const book = new Book(title, author, gender, pages, read);
    library.push(book);
}

function loadLibrary() {
    if (library.length > 0) {
        const bookElements = document.querySelectorAll(".book-wrapper");
        bookElements.forEach((bookElement) => {
            bookElement.remove();
        })
        library.forEach((book) => {
            const section = document.getElementById(book.gender);
            loadBook(book, section);
        })
    } else {
        console.log("No books Available");
    }
}

// book is the book object, section is the element from html with the id of the book gender
function loadBook(book, section) {
    const bookWrapper = document.createElement("div");
    bookWrapper.classList.add("book-wrapper");
    bookWrapper.setAttribute("book-id", book.id);

    const bookElement = document.createElement("div");
    bookElement.classList.add("book");

    const readMark = document.createElement("div");
    readMark.classList.add("read-mark");

    const readMarkIcon = document.createElement("i");
    // icons are fa fa-check for read book and fa fa-times for not read book
    readMarkIcon.classList.add("fa");
    if(book.read) {
        readMarkIcon.classList.add("fa-check");
    } else {
        readMarkIcon.classList.add("fa-times");
    }

    const bookInformationInteractionWrapper = document.createElement("div");
    bookInformationInteractionWrapper.classList.add("book-information-interaction-wrapper");

    const bookInformation = document.createElement("div");
    bookInformation.classList.add("book-information");

    const bookTitleText = document.createElement("span");
    bookTitleText.classList.add("title");
    bookTitleText.innerHTML = book.title;

    const bookAuthorText = document.createElement("span");
    bookAuthorText.classList.add("author");
    bookAuthorText.innerHTML = "By " + book.author;

    const bookPagesText = document.createElement("span");
    bookPagesText.classList.add("pages");
    if (book.pages > 1) {
        bookPagesText.innerHTML = book.pages + " pages";
    } else {
        bookPagesText.innerHTML = book.pages + " page";
    }

    const interactionButtons = document.createElement("div");
    interactionButtons.classList.add("interaction-buttons");

    const readButton = document.createElement("button");
    readButton.setAttribute("book-id", book.id);

    const readButtonIcon = document.createElement("i");
    // icons are fa fa-check to read book and fa fa-times to unread book
    readButtonIcon.classList.add("fa");
    if (book.read) {
        // unread already read book
        readButtonIcon.classList.add("fa-times");
    } else {
        // read book
        readButtonIcon.classList.add("fa-check");
    }

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("book-id", book.id);
    
    const deleteButtonIcon = document.createElement("i");
    deleteButtonIcon.classList.add("fa", "fa-trash-o");

    section.appendChild(bookWrapper);

    bookWrapper.appendChild(bookElement);
    bookWrapper.appendChild(bookInformationInteractionWrapper);

    bookElement.appendChild(readMark);

    readMark.appendChild(readMarkIcon);

    bookInformationInteractionWrapper.appendChild(bookInformation);
    bookInformationInteractionWrapper.appendChild(interactionButtons);

    bookInformation.appendChild(bookTitleText);
    bookInformation.appendChild(bookAuthorText);
    bookInformation.appendChild(bookPagesText);

    interactionButtons.appendChild(readButton);
    interactionButtons.appendChild(deleteButton);

    readButton.appendChild(readButtonIcon);
    deleteButton.appendChild(deleteButtonIcon);
}