const main = document.querySelector(".main");
const btn = document.querySelector(".add");
const dialog = document.querySelector("#newBook");
const submit = document.querySelector("#confirm");
const cancel = document.querySelector("#cancel");
const bookname = document.querySelector("#Book");
const authorname = document.querySelector("#Author");
const noPaages = document.querySelector("#Pages");
const library = [
  {
    book: "Bhagvad Gita",
    author: "Veda Vyasa",
    pages: 730,
    add: false,
    read: false,
    index: 0,
  },
  {
    book: "Man's Search for Meaning",
    author: "Viktor Frankl",
    pages: 200,
    read: false,
    add: false,
    index: 1,
  },
  {
    book: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    pages: 499,
    read: false,
    add: false,
    index: 2,
  },
];
btn;
function add(book, author, pages) {
  this.book = book;
  this.author = author;
  this.pages = pages;
  this.add = false;
  this.read = false;
  this.index = library.length;
}
function display() {
  library.forEach((obj) => {
    const div = document.createElement("div");
    const header = document.createElement("h2");
    header.classList.add("repair");
    header.innerText = obj.book;
    const pages = document.createElement("p");
    pages.classList.add("repair");
    pages.innerText = `No. of pages :${obj.pages}`;
    const author = document.createElement("p");
    author.classList.add("repair");
    author.innerText = `By : ${obj.author}`;
    const buttons = document.createElement("div");
    const link1 = document.createElement("img");
    link1.classList.add("icon");
    link1.classList.add("icon1");
    link1.src = "img/delete.svg";
    link1.addEventListener("click", () => {
      obj.add = false;
      library.splice(obj.index, 1);
      main.removeChild(div);
    });
    const link2 = document.createElement("img");
    link2.classList.add("icon");
    link2.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("icon1");
      obj.read = obj.read === true ? false : true;
    });
    link2.src = "img/read.svg";
    buttons.appendChild(link1);
    buttons.appendChild(link2);
    buttons.classList.add("icon-box");
    div.appendChild(header);
    div.appendChild(pages);
    div.appendChild(author);
    div.appendChild(buttons);
    div.classList.add("box");
    if (obj.add == false) {
      main.appendChild(div);
      obj.add = true;
    }
  });
}
btn.addEventListener("click", () => {
  dialog.showModal();
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  getValue();
  dialog.close();
});
cancel.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
});
function getValue() {
  let name = bookname.value;
  let aut = authorname.value;
  let pag = noPaages.value;
  const newbook = new add(name, aut, pag);
  library.push(newbook);
  display();
}

window.addEventListener("load", () => {
  display();
});
