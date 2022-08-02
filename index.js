
let books=[];

document.getElementById('add').addEventListener('click', (event)=>{
    event.preventDefault();
    let book={
        Title: document.querySelector("#title").value,
        Author: document.querySelector("#author").value
    }
    if(JSON.parse(localStorage.getItem("books"))){
        books=JSON.parse(localStorage.getItem("books"));
    }else{
        books.push(book);
     }
    localStorage.setItem('books', JSON.stringify(books));
    window.onload=fromLocalStorage();
    document.querySelector("form").reset();
})
// Retrive from local storage and display.
function fromLocalStorage(){
        let items=JSON.parse(localStorage.getItem("books"));
        items.forEach(book => {
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
        
    });
}



// //Removing book.
let remove=()=>{
    document.querySelector("remove").addEventListener("click",()=>{
        let removeEl= this.parentNode;
        elementContainer.removeChild(removeEl);
    })
}
