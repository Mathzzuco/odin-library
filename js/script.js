const library = [];

function Book(author, title, gender, pages, read) {
    this.id = crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.gender = gender;
    this.pages = pages;
    this.read = read;
    this.changeRead = function() {
        this.read = !this.read;
    }
}

function addBookToLibrary(author, title, gender, pages, read) {
    const book = new Book(author, title, gender, pages, read);
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
    readMarkIcon.classList.add("fa fa-check");

    const bookInformationInteractionWrapper = document.createElement("div");
    bookInformationInteractionWrapper.classList.add("book-information-interaction-wrapper");

    const bookInformation = document.createElement("div");
    bookInformation.classList.add("book-information");

    const bookTitleText = document.createElement("span");
    bookTitleText.classList.add("title");
    bookTitleText.innerHTML = book.title;

    const bookAuthorText = document.createElement("span");
    bookAuthorText.classList.add("author");
    bookAuthorText.innerHTML = book.author;

    const bookPagesText = document.createElement("span");
    bookAuthorText.classList.add("pages");
    bookPagesText.innerHTML = book.pages + " pages";

    const interactionButtons = document.createElement("div");
    interactionButtons.classList.add("interaction-buttons");

    const readButton = document.createElement("button");
    const readButtonIcon = document.createElement("i");
    // icons are fa fa-check to read book and fa fa-times to unread book
    readButtonIcon.classList.add("fa fa-check");

    const deleteButton = document.createElement("button");
    const deleteButtonIcon = document.createElement("i");
    deleteButtonIcon.classList.add("fa fa-trash-o");

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
