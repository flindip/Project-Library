let myLibrary=[{title: 'Slaughter House Five', author: 'Kurt Vonnegut', length: '295 pages', haveRead: 'Read'}];
displayLibrary();
const submit=document.getElementById('submit');
submit.addEventListener('click', (e)=>{e.preventDefault(); submitBook();}); 
const addBook=document.getElementById('open-form');
addBook.addEventListener('click', (e)=>{
 const form=document.getElementsByClassName('form');
 for(const x of form){
  const styles={
    display:'flex',
    overflow: 'visible'}
Object.assign(x.style, styles);
 }  
});

const closeForm=document.getElementById('close-form');
closeForm.addEventListener('click', (e)=>{
  const form=document.getElementsByClassName('form');
 for(const x of form){
  const styles={
    display:'none',
    overflow: 'hidden'}
Object.assign(x.style, styles);
 }})

function delBook(value){
    const books=document.getElementsByClassName('book');
  for(let i=books.length-1;i>=0; i--){
        books[i].remove();
  }
  myLibrary.splice(value, 1);
  displayLibrary();
}

function statBook(value){
let status=myLibrary[value].haveRead;
if(status==='Read'){
  myLibrary[value].haveRead='Not Read';
}
else{
  myLibrary[value].haveRead='Read';
}
const books=document.getElementsByClassName('book');
  for(let i=books.length-1;i>=0; i--){
        books[i].remove();
  }
displayLibrary();
}

function displayLibrary(){
        for(const x of myLibrary){
           const table=document.getElementById('library-table');
           const book=table.insertRow(-1);
            book.className='book';
            const title=book.insertCell(-1);
            title.textContent=`${x.title}`;
            const author=book.insertCell(-1);
            author.textContent=`${x.author}`;
            const length=book.insertCell(-1);
            length.textContent=`${x.length}`;
            const status=document.createElement('button');
            book.appendChild(status);
            status.className='status';
            status.setAttribute('type', 'button');
            status.addEventListener('click', (e)=>{
            const value=myLibrary.indexOf(x);
            statBook(value);})
            status.textContent=`${x.haveRead}`;
            const del=document.createElement('button');
            book.appendChild(del);
            del.className='del';
            del.setAttribute('type', 'button');
            del.textContent='Delete';
            del.addEventListener('click', (e)=>{
            const value=myLibrary.indexOf(x);
            delBook(value);})
          }};

function submitBook(){
const form=document.getElementById('book-form');
const title=form.title.value;
const author=form.author.value;
const length=form.length.value;
const haveRead=form.status.value;
const book= new Book(title, author, length, haveRead);
book.fileBook();
}


function Book(title, author, length, haveRead){
        this.title=title;
        this.author=author;
        this.length=`${length} pages`;
          if(haveRead==='Yes'){
             this.haveRead='Read';
          }
          else{
          this.haveRead= 'Not Read';
          }}
          
          Book.prototype.fileBook=function(){
            myLibrary.push(this);
            const table=document.getElementById('library-table');
            const book=table.insertRow(-1);
            book.className='book';
            const title=book.insertCell(-1);
            title.textContent=`${this.title}`;
            const author=book.insertCell(-1);
            author.textContent=`${this.author}`;
            const length=book.insertCell(-1);
            length.textContent=`${this.length}`;
            const status=document.createElement('button');
            book.appendChild(status);
            status.className='status';
            status.setAttribute('type', 'button');
            status.addEventListener('click', (e)=>{
              const value=myLibrary.indexOf(this);
              statBook(value);
          })
            status.textContent=`${this.haveRead}`;
            const del=document.createElement('button');
            book.appendChild(del);
            del.className='del';
            del.setAttribute('type', 'button');
           del.textContent='Delete';
           del.addEventListener('click', (e)=>{
            const value=myLibrary.indexOf(this);
            delBook(value);})
           }



   const book2=new Book('Weeping Willows', 'A.Dude', 300, 'No');
   book2.fileBook();
   const book3=new Book('Lord of the Rings', 'JRR Tolkien', 400, 'Yes');
   book3.fileBook();