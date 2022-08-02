
let books=[];
const title=document.querySelector(".title");
const author=document.querySelector(".author");
const displayContainer=document.querySelector(".container");
const storage=()=>{
    localStorage.setItem("books",JSON.stringify(books));
    }
let addBtn= document.querySelector(".add");
addBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    if (title.value !== '' && author.value !== '') {
        const book={
            title,
            author
        }
        books.push(book);
        const div= document.createElement("div");
        books.forEach((book,index)=>{
            div.innerHTML= `
            <p>${book.title.value}</p>
            <p>${book.author.value}</p>                                          
            <button type="button" id="${index}" class="remove">Remove</button>   
            <hr>`;
            let removebtn=div.querySelector(".remove");
            removebtn.addEventListener("click",()=>{
                books.splice(index,1);
                div.remove();
                storage();
            })
        })
        storage();
        displayContainer.appendChild(div); 
        document.querySelector("form").reset();
      }
})
function display() {
    const items = JSON.parse(localStorage.getItem('books'));
    if (items) {
        items.forEach((item) => {
            const book={
                title,
                author
            }
            books.push(book);
            const div= document.createElement("div");
            books.forEach((book,index)=>{
                div.innerHTML= `
                <p>${book.title.value}</p>
                <p>${book.author.value}</p>                                          
                <button type="button" id="${index}" class="remove">Remove</button>   
                <hr>`;
                let removebtn=div.querySelector(".remove");
                removebtn.addEventListener("click",()=>{
                    books.splice(index,1);
                    div.remove();
                    storage();
                })
            })
            storage();
            displayContainer.appendChild(div);   
      });
    }
  }
  display();
