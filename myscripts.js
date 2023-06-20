let myLibrary=[{title: 'Slaughter House Five', author: 'Kurt Vonnegut', length: '295 pages', haveRead: 'Read'}];
displayLibrary();





/*function delButton(){
const del=document.getElementsByClassName('del');
for(let i=0; i<del.length; i++){
  del[i].addEventListener('click', (e)=>{
  const value=del[i].getAttribute('data-location');
  delBook(value);})
}}*/ 


/*const value=del[i].getAttribute('data-location');
      delBook(value);*/
      

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
            /*book.dataset.location=myLibrary.indexOf(x);*/
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
            /*status.dataset.location=myLibrary.indexOf(x);*/
            status.addEventListener('click', (e)=>{
            const value=myLibrary.indexOf(x);
            statBook(value);
        })

            status.textContent=`${x.haveRead}`;
            const del=document.createElement('button');
            book.appendChild(del);
            del.className='del';
            del.setAttribute('type', 'button');
            /*del.setAttribute('onclick', 'delButton()');*/
            /*del.dataset.location=myLibrary.indexOf(x);*/
            del.textContent='Delete';
            del.addEventListener('click', (e)=>{
            const value=myLibrary.indexOf(x);
            delBook(value);})
          }};


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
            /*book.dataset.location=myLibrary.indexOf(this);*/
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
            /*status.dataset.location=myLibrary.indexOf(this);*/
            status.textContent=`${this.haveRead}`;
            const del=document.createElement('button');
            book.appendChild(del);
            del.className='del';
            del.setAttribute('type', 'button');
            /*del.setAttribute('onclick', 'delButton()')*/
           /*del.dataset.location=myLibrary.indexOf(this);*/
           del.textContent='Delete';
           del.addEventListener('click', (e)=>{
            const value=myLibrary.indexOf(this);
            delBook(value);})
           }
           
 //new approach to delete button changes context of code//          
//task 1-3finished//


   const book2=new Book('Weeping Willows', 'A.Dude', 300, 'No');
   book2.fileBook();
   const book3=new Book('Lord of the Rings', 'JRR Tolkien', 400, 'Yes');
   book3.fileBook();