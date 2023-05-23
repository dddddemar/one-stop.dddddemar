
//Dynamically generate borrowing orders
const borrowedBooksData = [
  { title: 'What MY Bones Konw', author: 'Foo', cover: '../book/book1.jpg' },
   /*
          img-name:book1.jpg
          souerce:https://www.amazon.cn/s?k=book&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&ref=nb_sb_noss
    */
  { title: 'Fatty Boom', author: 'Rabia', cover: '../book/book2.jpg' },
   /*
          img-name:book2.jpg
          souerce:https://www.amazon.cn/s?k=Fatty&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&crid=1TBLQ7QMUXGEP&sprefix=fatty%2Caps%2C500&ref=nb_sb_noss_1
    */
  { title: 'Four Treasure', author: 'Jenny', cover: '../book/book3.jpg' }
   /*
          img-name:book2.jpg
          souerce:https://www.amazon.cn/s?k=Fatty&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&crid=1TBLQ7QMUXGEP&sprefix=fatty%2Caps%2C500&ref=nb_sb_noss_1
    */
];

const borrowedContainer = document.getElementById('books-container');
const borrowedCount = document.getElementById('borrowed-count');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');

//Initialize the list of borrowed books
function initBorrowedBooks() {
    let borrowedBooksHtml = '';
    borrowedBooksData.forEach(book => {
        borrowedBooksHtml += `
<div class="book">
<img src="${book.cover}" id="e1" alt="${book.title}">
<h3>${book.title}</h3>
<p>${book.author}</p>
<button class="return-button" data-title="${book.title}">return</button>
</div>
`;
    });
    borrowedContainer.innerHTML = borrowedBooksHtml;
    borrowedCount.innerText = `You borrowed ${borrowedBooksData.length} books`;
}

// Returning Books
function returnBook(title) {
    borrowedBooksData.forEach((book, index) => {
        if (book.title === title) {
            borrowedBooksData.splice(index, 1);
        }
    });
    initBorrowedBooks();
}

// Click event for binding the return button
function bindButtons() {
    const returnButtons = document.querySelectorAll('.return-button');
    for (let i = 0; i < returnButtons.length; i++) {
        returnButtons[i].addEventListener('click', function () {
            const title = this.getAttribute('data-title');
            returnBook(title);
            alert('Successfully returned');
        });
    }
}

// Search for books based on book title and author
function searchBooks() {
    const keyword = searchInput.value.trim().toLowerCase();
    const filteredBooks = borrowedBooksData.filter(book => {
        const title = book.title.toLowerCase();
        const author = book.author.toLowerCase();
        return title.includes(keyword) || author.includes(keyword);
    });
    let filteredBooksHtml = '';
    filteredBooks.forEach(book => {
        filteredBooksHtml += `
<div class="book">
<img src="${book.cover}" alt="${book.title}">
<h3>${book.title}</h3>
<p>${book.author}</p>
<button class="return-button" data-title="${book.title}">return</button>
</div>
`;
    });
    borrowedContainer.innerHTML = filteredBooksHtml;
    borrowedCount.innerText = `You have borrowed ${borrowedBooksData.length} books`;
    bindButtons();
}

//Bind the click event of the search button
searchBtn.addEventListener('click', searchBooks);

// Initialize the list of borrowed books
initBorrowedBooks();
bindButtons(); 


const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const navbar = document.getElementById('navbar');

// This function closes navbar if user clicks anywhere outside of navbar once it's opened
// Does not leave unused event listeners on
// It's messy, but it works
function closeNavbar(e) {
  if (
    document.body.classList.contains('show-nav') &&
    e.target !== toggle &&
    !toggle.contains(e.target) &&
    e.target !== navbar &&
    !navbar.contains(e.target)
  ) {
    document.body.classList.toggle('show-nav');
    document.body.removeEventListener('click', closeNavbar);
  } else if (!document.body.classList.contains('show-nav')) {
    document.body.removeEventListener('click', closeNavbar);
  }
}

// Toggle nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
  document.body.addEventListener('click', closeNavbar);
});

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);
