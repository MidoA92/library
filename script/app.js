const btnBook = document.querySelector('.btn-books');
const btnUser = document.querySelector('.btn-user');
const infoBooks = document.getElementById('infoBooks');
const infoUser = document.getElementById('infoUser');

function removeVisible() {
  infoBooks.classList.toggle('invisble');
  infoUser.classList.toggle('invisble');
  btnBook.classList.add('invisble');
  btnUser.classList.add('invisble');
}

btnBook.addEventListener('click', removeVisible);
btnUser.addEventListener('click', removeVisible);
