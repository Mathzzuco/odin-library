const library = [];
const dialog = document.getElementById("dialog");
const button = document.querySelector(".add-book-btn");

button.addEventListener("click", function() {
    
    // addBookToLibrary("creative title", "creative author", "mystery", 100, false);
    // loadLibrary();
    dialog.showModal();
})

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
    console.log(book);
    library.push(book);
}

function loadLibrary() {
    if (library.length > 0) {
        library.forEach((e) => {
            const section = document.getElementById(e.gender);
            loadBook(e, section);
        })
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
    bookTitleText.innerHTML = book.title + " <br>";

    const bookAuthorText = document.createElement("span");
    bookAuthorText.classList.add("author");
    bookAuthorText.innerHTML = book.author + " <br>";

    const bookPagesText = document.createElement("span");
    bookAuthorText.classList.add("pages");
    bookPagesText.innerHTML = book.pages + " pages";

    const interactionButtons = document.createElement("div");
    interactionButtons.classList.add("interaction-buttons");

    const readButton = document.createElement("button");
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
