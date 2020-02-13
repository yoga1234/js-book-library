// card-container
let cardContainer = document.querySelector('.card-container');

// array for saving book data
let myLibrary = [
  {
    author: "Yogasmara",
    title: "The Dark Project",
    pages: 2556
  },
  {
    author: "Hisako Arata",
    title: "Good Plates",
    pages: 299
  }
];

function Book() {
  // the constructor
}

function addBookToLibrary() {
  // do stuff here
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