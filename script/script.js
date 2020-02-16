// getting form DOM
let formBookSubmit = document.getElementById('new-book-form');

// card-container
let cardContainer = document.querySelector('.card-container');

// array for saving book data
let myLibrary = [
  {
    bookId: 0,
    author: "Yogasmara",
    title: "The Dark Project",
    pages: 2556
  },
  {
    bookId: 1,
    author: "Hisako Arata",
    title: "Good Plates",
    pages: 299
  }
];

function Book(title, author, pages, hasBeenRead) {
  this.bookId = myLibrary.length
  this.title = title
  this.author = author
  this.pages = pages
  this.hasBeenRead = hasBeenRead
}
Book.prototype.saveBook = function() {
  console.log(this.bookId)
  console.log(this.title)
  console.log(this.author)
  console.log(this.pages)
  console.log(this.hasBeenRead)
}

function addBookToLibrary(e) {
  e.preventDefault() // preventing browser to reload

  let bookTitle = e.target[0].value // getting book title
  let bookAuthor = e.target[1].value // getting book author
  let bookPages = e.target[2].value // getting book pages
  let hasBeenRead = e.target[3].value // getting has been read

  let insertBook = new Book(bookTitle, bookAuthor, bookPages, hasBeenRead)

  insertBook.saveBook()

}

// render array to HTML
function render() {
  myLibrary.forEach(function(currentValue, index) {
    cardContainer.innerHTML += cardElement(currentValue)
  })
}

// card element
function cardElement(data) {
  return `
  <div class="card">
    <div class="card-top">
      <div class="content">
        <div class="left-side">
          <p>read</p>
        </div> <!-- left-side -->
        <div class="right-side">
          <p class="title"><b>${data.title}</b></p>
          <p>${data.author} - ${data.pages} pages</p>
        </div> <!-- right-side -->
      </div>
    </div> <!-- card-top -->
    <div class="card-bottom">
      <button class="read-button"><b>read</b></button>
      <button class="delete-button"><b>delete</b></button>
    </div> <!-- card-bottom -->
  </div> <!-- card -->
  `
}

render()

// getting form submit
formBookSubmit.addEventListener('submit', addBookToLibrary)