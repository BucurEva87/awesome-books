let books = [];
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const displayContainer = document.querySelector('.container');

const storeData = () => {
  localStorage.setItem('books', JSON.stringify(books));
};

const getData = () => JSON.parse(localStorage.getItem('books'));

const removeBook = (book) => {
  localStorage.removeItem(book);
};

const addBook = (title, author) => {
  const book = {
    title,
    author,
  };
  books.push(book);
  const div = document.createElement('div');
  books.forEach((book, index) => {
    div.innerHTML = `
              <p>${book.title}</p>
              <p>${book.author}</p>                                          
              <button type="button" id="${index}" class="remove">Remove</button>   
              <hr>`;
    const removebtn = div.querySelector('.remove');
    removebtn.addEventListener('click', () => {
      books = books.filter((el) => el.key !== index);
      div.remove();
      storeData();
      removeBook(book);
    });
  });
  storeData();
  displayContainer.appendChild(div);
};

document.querySelector('.add').addEventListener('click', (event) => {
  event.preventDefault();
  if (title.value !== '' && author.value !== '') {
    addBook(title.value, author.value);
    document.querySelector('form').reset();
  }
});

const display = () => {
  if (getData()) {
    getData().forEach((book) => {
      addBook(book.title, book.author);
    });
  }
};
display();