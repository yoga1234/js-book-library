let formInput = document.querySelectorAll('.form-input') // getting the form input
let formBookSubmit = document.getElementById('new-book-form') // getting the DOM
let cardContainer = document.querySelector('.card-container') // getting the card container
let totalBooks = document.querySelector('.total-books') // getting total books DOM

let myLibrary = [] // array for saving book data

function Book(title, author, pages, hasBeenRead) {
  this.bookId = myLibrary.length + pages
  this.title = title
  this.author = author
  this.pages = pages
  this.hasBeenRead = hasBeenRead
}

function addBookToLibrary(e) {
  e.preventDefault() // preventing browser to reload

  let bookTitle = e.target[0].value // getting book title
  let bookAuthor = e.target[1].value // getting book author
  let bookPages = e.target[2].value // getting book pages
  let hasBeenRead = e.target[3].value // getting has been read

  let insertBook = new Book(bookTitle, bookAuthor, bookPages, hasBeenRead)

  // saving the book
  myLibrary.push(insertBook)

  // close the modal after insert the book
  modal.style.display = "none"

  // clear the form after submit
  formInput.forEach(function(item, index){
    item.value = ''
  })

  render()
}

// render array to HTML
function render() {
  // remove card before adding new one
  cardContainer.innerHTML = ''

  myLibrary.forEach(function(currentValue, index) {
    cardContainer.innerHTML += cardElement(currentValue)
  })

  // rendering total books
  totalBooks.innerHTML = myLibrary.length
}

// card element
function cardElement(data) {
  return `
  <div class="card">
    <div class="card-top">
      <div class="content">
        <div class="left-side">
          <p class="has-been-read" data-is-read="read${data.bookId}">${data.hasBeenRead}</p>
        </div> <!-- left-side -->
        <div class="right-side">
          <p class="title"><b>${data.title}</b></p>
          <p>${data.author} - ${data.pages} pages</p>
        </div> <!-- right-side -->
      </div>
    </div> <!-- card-top -->
    <div class="card-bottom">
      <button class="read-button" data-read="read${data.bookId}">read</button>
      <button class="delete-button" data-book="book${data.bookId}">delete</button>
    </div> <!-- card-bottom -->
  </div> <!-- card -->
  `
}

// function for deleting the book data
function deleteFunc(e){
  // overwrite myLibrary with new array and then re-render the list
  myLibrary = myLibrary.filter(function(data){
    return data.bookId != e.target.dataset.book.replace('book','')
  })
  render()
}

// function for read/unread the book data
function readFunc(e){
  let readText = document.querySelector(`[data-is-read="${e.target.dataset.read}"]`) // getting the read text
  // console.log(readText.getAttribute('data-is-read'))
  
  // check if the book has been read/unread
  // get the data based on id
  let dataForChange = myLibrary.find(function(data) {
    return data.bookId == readText.getAttribute('data-is-read').replace('read','')
  })
  // toggle the has been read data
  if(dataForChange['hasBeenRead'] == 'read'){
    dataForChange['hasBeenRead'] = 'unread'
    render()
  } else {
    dataForChange['hasBeenRead'] = 'read'
    render()
  }
  
}

render() // rendering the list to the dom

// form submit eventListener
formBookSubmit.addEventListener('submit', addBookToLibrary)

document.addEventListener('click', function(e){
  if(e.target.classList.contains('delete-button')){
    deleteFunc(e)
  } else if(e.target.classList.contains('read-button')){
    readFunc(e)
  }
})