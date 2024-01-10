'use strict';
const btnBook = document.querySelector('.btn-books');
const btnUser = document.querySelector('.btn-user');
const infoBooks = document.getElementById('infoBooks');
const infoUser = document.getElementById('infoUser');
const booksList = document.querySelector('.booksList');
const usersList = document.querySelector('.usersList');
const input = document.getElementsByTagName('input');
const inputValue = input.value;
const addBook = document.querySelector('.addBook');
const addUser = document.querySelector('.addUser');

function removeVisible() {
  infoBooks.classList.remove('invisble');
  infoUser.classList.remove('invisble');
  btnBook.classList.add('invisible');
  btnUser.classList.add('invisible');
}

let books = [];

const addBooks = (ev) => {
  ev.preventDefault();
  let book = {
    code: document.getElementById('code').value,
    title: document.getElementById('title').value,
    nameAuthor: document.getElementById('nameAuthor').value,
    yearPub: document.getElementById('yearPub').value,
    placePub: document.getElementById('placePub').value,
    publisher: document.getElementById('publisher').value,
  };
  console.log(book);
  books.push(book);
};

function inputValues() {
  for (let book of books) {
    console.log(book);
  }
}
btnBook.addEventListener('click', removeVisible);
btnUser.addEventListener('click', removeVisible);
addBook.addEventListener('click', addBooks);
addUser.addEventListener('click', inputValues);
