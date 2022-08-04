import utils from './utils.js';

class Books {
  books = localStorage.getItem('books')
    ? JSON.parse(localStorage.getItem('books'))
    : [];

  add(book) {
    this.books.push(book);
    this.storeData();
  }

  remove(title) {
    this.books.splice(this.findIndexByTitle(title), 1);
    this.storeData();
  }

  findIndexByTitle(title) {
    return this.books.findIndex((b) => b.title === title);
  }

  storeData() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

const populateBooks = (books) => {
  utils.qs('div', displayContainer)?.remove();
  const div = document.createElement('div');
  books.forEach((book) => {
    const wrapper = utils.createElement({});

    wrapper.appendChild(
      utils.createElement({
        tagName: 'p',
        textContent: `"${book.title}" by ${book.author}`,
        class: 'title',
      })
    );
    wrapper.appendChild(
      utils.createElement({
        tagName: 'button',
        type: 'button',
        class: 'remove',
        textContent: 'Remove',
      })
    );
    div.appendChild(wrapper);
  });
  displayContainer.appendChild(div);
};

const books = new Books();
const displayContainer = utils.qs('.container');

if (books.books.length) populateBooks(books.books);

displayContainer.addEventListener('click', (e) => {
  const { target } = e;

  if (!target.classList.contains('remove')) return;

  const title = utils.qs('p.title', target.parentElement).textContent;

  books.remove(title.match(/^"(.+?)"/)[0].replaceAll('"', ''));
  populateBooks(books.books);
});

utils.qs('form').addEventListener('submit', (e) => {
  const title = utils.qs('.title', e.target);
  const author = utils.qs('.author', e.target);

  e.preventDefault();

  if (!title.value.trim().length || !author.value.trim().length) return;

  books.add({
    title: title.value,
    author: author.value,
  });
  populateBooks(books.books);
  e.target.reset();
});
