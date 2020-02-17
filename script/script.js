// getting the form input
let formInput = document.querySelectorAll('.form-input')

// getting form DOM
let formBookSubmit = document.getElementById('new-book-form')

// card-container
let cardContainer = document.querySelector('.card-container')

// array for saving book data
let myLibrary = []

function Book(title, author, pages, hasBeenRead) {
  this.bookId = myLibrary.length
  this.title = title
  this.author = author
  this.pages = pages
  this.hasBeenRead = hasBeenRead
}
Book.prototype.saveBook = function() {
  // arrange the object to push
  let bookToSave = {
    bookId: this.bookId,
    title: this.title,
    author: this.author,
    pages: this.pages,
    hasBeenRead: this.hasBeenRead
  }

  myLibrary.unshift(bookToSave)

  render()
}

function addBookToLibrary(e) {
  e.preventDefault() // preventing browser to reload

  let bookTitle = e.target[0].value // getting book title
  let bookAuthor = e.target[1].value // getting book author
  let bookPages = e.target[2].value // getting book pages
  let hasBeenRead = e.target[3].value // getting has been read

  let insertBook = new Book(bookTitle, bookAuthor, bookPages, hasBeenRead)

  insertBook.saveBook()

  // close the modal after insert the book
  modal.style.display = "none"

  // clear the form after submit
  formInput.forEach(function(item, index){
    item.value = ''
  })
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
          <p>${data.hasBeenRead}</p>
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