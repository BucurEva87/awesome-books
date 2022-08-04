// const { isClosingBraceToken } = require('eslint-utils');
import utils from './utils.js';

// create a class of book.
const displayContainer = utils.qs('.container');
let books = localStorage.getItem('books')
  ? JSON.parse(localStorage.getItem('books'))
  : [];

const populateBooks = () => {
  utils.qs('div', displayContainer)?.remove();
  const div = document.createElement('div');
  books.forEach((book) => {
    const wrapper = utils.createElement({});

    wrapper.appendChild(
      utils.createElement({
        tagName: 'p',
        textContent: book.title,
        class: 'title',
      }),
    );
    wrapper.appendChild(
      utils.createElement({
        tagName: 'p',
        textContent: book.author,
        title: 'author',
      }),
    );
    wrapper.appendChild(
      utils.createElement({
        tagName: 'button',
        type: 'button',
        class: 'remove',
        textContent: 'Remove',
      }),
    );
    wrapper.appendChild(utils.createElement({ tagName: 'hr' }));
    div.appendChild(wrapper);
  });
  displayContainer.appendChild(div);
};

if (books.length) populateBooks();

const storeData = () => {
  localStorage.setItem('books', JSON.stringify(books));
};

const removeData = (title) => {
  books.splice([books.findIndex((book) => book.title === title)], 1);
  books = books.filter((v) => v !== null);
};

displayContainer.addEventListener('click', (e) => {
  const { target } = e;

  if (!target.classList.contains('remove')) return;

  const title = utils.qs('p.title', target.parentElement).textContent;

  removeData(title);
  storeData();
  populateBooks();
});

class Book {
  constructor(title, author) {
    this.author = author;
    this.title = title;
  }
}

utils.qs('form').addEventListener('submit', (e) => {
  const title = utils.qs('.title', e.target);
  const author = utils.qs('.author', e.target);

  e.preventDefault();

  if (!title.value.trim().length || !author.value.trim().length) return;

  const book = new Book(title.value, author.value);
  books.push(book);
  storeData();
  populateBooks();
  e.target.reset();
});
