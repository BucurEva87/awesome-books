// create a class of book.
let title=document.querySelector(".title");
let author=document.querySelector(".author");
const displayContainer = document.querySelector('.container');
let books=[];
class book{
    constructor(title, author){
        this.author=author;
        this.title=title;
    }
    //Display 
    dynamic(){
    const div = document.createElement('div');
    books.forEach((book, index) => {
      div.innerHTML = `
                <p>${book.title}</p>
                <p>${book.author}</p>                                          
                <button type="button" id="${index}" class="remove">Remove</button>   
                <hr>`;
      const removebtn = div.querySelector('.remove');
      removebtn.addEventListener('click', () => {
        // books =books.filter((el) => el.key === index);
        books.splice(index, 1);
        this.storeData();
        div.remove();
      });
    });
    displayContainer.appendChild(div);
    }

    //Add to local storage
    storeData(){
        localStorage.setItem('books', JSON.stringify(books));
      };

    //Remove from local storage
    getData(){
        JSON.parse(localStorage.getItem('books'));
    }

    //Add book to the catalogue. 

    addBook(){
        let mybook=new book(title.value,author.value);      
        books.push(mybook);
        document.querySelector('form').reset();
        this.dynamic();
        this.storeData();
    }
    execute(){
        document.querySelector('.add').addEventListener('click', (event) => {
            event.preventDefault();
            if (title.value !== '' && author.value !== '') {
              this.addBook();
            }
          });
    }
}

//Creating an instant of a class.
let book1=new book(title.value,author.value);
book1.execute();

   //Display onload.
   function diaplayOnLoad(){
    window.addEventListener('load', () => {
      book1.dynamic();
    });
  }
  diaplayOnLoad();