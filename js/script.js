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

function displayLibrary() {
    myLibrary.forEach(element => {
        console.log(element);
    });
}

function generateTable() {
    const tbl = document.createElement("table");
    tbl.setAttribute("id", "table-container");
    let tblHead = document.createElement("thead");
    const tblBody = document.createElement("tbody");

    // head of the table
    let hRow = document.createElement("tr");
    for (let key of Object.keys(myLibrary[0]).filter(key => key !== "info")) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        hRow.appendChild(th);
    }
    tblHead.appendChild(hRow);
    tbl.appendChild(tblHead);

    // body of the table
    myLibrary.forEach(element => {
        let row = document.createElement("tr");
        for (let key of Object.keys(myLibrary[0]).filter(key => key !== "info")) {
            let td = document.createElement("td");
            let text = document.createTextNode(`${element[key]}`);
            td.appendChild(text);
            row.appendChild(td);
        }
        tblBody.appendChild(row);
    });

    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "2");
}

theHobbit = new Book("The Hobbit", "H.R.R.", 295, false);
console.log(theHobbit.info());

addBookToLibrary();
displayLibrary();