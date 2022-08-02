
let books=[];

const addBook= (event)=>{
    event.preventDefault();
    let book={
        Title: document.querySelector("#title").value,
        Author: document.querySelector("#author").value
    }
    books.push(book);
    //Local storage
    localStorage.setItem('books', JSON.stringify(books));
    display(book);
    document.querySelector("form").reset();
    //remove();
  
}

//Method to display
const display=(book)=>{
 let elementContainer=document.querySelector(".container");
 let div=document.createElement("div");
 elementContainer.appendChild(div);
 let booktitle= document.createElement("p");
 booktitle.textContent=book.Title;
 div.appendChild(booktitle);

 let bookauthor= document.createElement("p");
 bookauthor.textContent=book.Author;
 div.appendChild(bookauthor);
 
 let removebtn= document.createElement("button");
 removebtn.textContent="Remove";
 removebtn.className="remove"
 div.appendChild(removebtn);

}
// localStorage.setItem('books', JSON.stringify(books));
document.getElementById('add').addEventListener('click', addBook);

// //Removing book.
let remove=()=>{
    document.querySelector("remove").addEventListener("click",()=>{
        let removeEl= this.parentNode;
        elementContainer.removeChild(removeEl);
    })
}
