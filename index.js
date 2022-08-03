let books = [];
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const displayContainer = document.querySelector('.container');
// Function to add to local storage
const storeData = () => {
  localStorage.setItem('books', JSON.stringify(books));
};
// Function to get from local storage.
const getData = () => JSON.parse(localStorage.getItem('books'));
// function to remove from local storage.
const removeBook = (book) => {
  localStorage.removeItem(book);
};
// Function to add book object to the books array.
const addBook = (title, author) => {
  const book = {
    title,
    author,
  };
  books.push(book);

  // Dynamic
  const div = document.createElement('div');
  books.forEach((book, index) => {
    div.innerHTML = `
              <p>${book.title}</p>
              <p>${book.author}</p>                                          
              <button type="button" id="${index}" class="remove">Remove</button>   
              <hr>`;

    // Remove through the remove button
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
// Add button event.

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