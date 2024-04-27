const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return {
            title: this.title,
            author: this.author,
            pages: this.pages,
            read: this.read
        }
    }
}

function addBookToLibrary() {    
    var book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

if (myLibrary.length === 0) {
    let main = document.querySelector("main")
    let div = document.createElement("div");
    let text = document.createTextNode("The Library is empty...");
    div.appendChild(text);
    div.setAttribute("class", "empty-msg");
    main.appendChild(div);
}
