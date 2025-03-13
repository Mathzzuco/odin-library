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