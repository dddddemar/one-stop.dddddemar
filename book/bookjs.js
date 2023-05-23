const booksData = [
    { title: 'What MY Bones Konw', author: 'Foo', cover: './book1.jpg' },
    /*
          img-name:book1.jpg
          souerce:https://www.amazon.cn/s?k=book&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&ref=nb_sb_noss
    */
    { title: 'Fatty Boom', author: 'Rabia', cover: './book2.jpg' },
    /*
          img-name:book2.jpg
          souerce:https://www.amazon.cn/s?k=Fatty&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&crid=1TBLQ7QMUXGEP&sprefix=fatty%2Caps%2C500&ref=nb_sb_noss_1
    */
    { title: 'Four Treasure', author: 'Jenny', cover: './book3.jpg' },
    /*
          img-name:book3.jpg
          souerce:https://www.amazon.cn/s?k=Four+treasures&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&crid=3BCBQ5J2J1YQ6&sprefix=four+treasure%2Caps%2C422&ref=nb_sb_noss
    */
    { title: 'The island of Sea Women', author: 'Lisa See', cover: './book4.jpg' },
    /*
          img-name:book4.jpg
          souerce:https://www.amazon.cn/s?k=the+island&crid=S1Y1GI3ZZTYA&sprefix=the+island%2Caps%2C487&ref=nb_sb_ss_ts-doa-p_1_10
    */
    { title: 'The Great Reclamation', author: 'Kyle Simpson', cover: './book5.jpg' },
    /*
          img-name:book5.jpg
          souerce:https://www.amazon.cn/s?k=Four+treasures&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&crid=3BCBQ5J2J1YQ6&sprefix=four+treasure%2Caps%2C422&ref=nb_sb_noss
    */
    { title: 'Have you eaten yet', author: 'Aditya Bhargava', cover: './book6.jpg' },
    /*
          img-name:book6.jpg
          souerce:https://www.amazon.cn/s?k=Have+you+eaten&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&crid=9SXKXZ69XS5Y&sprefix=have+you+eate%2Caps%2C468&ref=nb_sb_noss
    */
    { title: 'Real-self care', author: 'Pooja', cover: './book7.jpg' },
    /*
          img-name:book7.jpg
          souerce:https://www.amazon.cn/s?k=real+self&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&crid=LMLTXH5RTV9P&sprefix=real+sel%2Caps%2C422&ref=nb_sb_noss
    */
    { title: 'The Perfumist of Paris', author: 'Alka Joshi', cover: './book8.jpg' },
    /*
          img-name:book8.jpg
          souerce:https://www.amazon.cn/s?k=the+perfum&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&crid=LQZ5TA0RCEU5&sprefix=the+perfum%2Caps%2C593&ref=nb_sb_noss_2
    */
    { title: 'Vera Wrongs advice', author: 'Jesso', cover: './book9.jpg' },
    /*
          img-name:book9.jpg
          souerce:https://www.amazon.cn/s?k=Vera&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&crid=7LEFZ30KSVK2&sprefix=v%2Caps%2C758&ref=nb_sb_noss_2
    */
    { title: 'The last Tale of Flower Bride', author: 'Victor', cover: './book10.jpg' },
    /*
          img-name:book10.jpg
          souerce:https://www.amazon.cn/s?k=the+last+tale&rh=n%3A116169071&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&ref=nb_sb_noss
    */
    { title: 'The Secret Witness', author: 'Rishina', cover: './book11.jpg' },
    /*
          img-name:book11.jpg
          souerce:https://www.amazon.cn/s?k=the+sercet&rh=n%3A116169071&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&ref=nb_sb_noss
    */
    { title: 'The Blue Bar ', author: 'Damyanti', cover: './book12.jpg' }
    /*
          img-name:book12.jpg
          souerce:https://www.amazon.cn/s?k=Four+treasures&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&crid=3BCBQ5J2J1YQ6&sprefix=four+treasure%2Caps%2C422&ref=nb_sb_noss
    */
  ];
  const booksContainer = document.getElementById('books-container');
  const borrowedCount = document.getElementById('borrowed-count');
  const searchBtn = document.getElementById('search-btn');

  let borrowedBooks = []; // Borrowed books

  // Dynamically generate a book list
  function generateBooksList(books) {
    booksContainer.innerHTML = '';
    for (let book of books) {
      const bookElem = document.createElement('div');
      bookElem.className = 'book';
      const coverElem = document.createElement('img');
      coverElem.src = book.cover;
      const titleElem = document.createElement('h3');
      titleElem.textContent = book.title;
      const authorElem = document.createElement('p');
      authorElem.textContent = book.author;
      const borrowBtnElem = document.createElement('button');
      borrowBtnElem.className = 'borrow-button';
      borrowBtnElem.textContent = 'borrow';
      borrowBtnElem.addEventListener('click', function () {
        borrowBook(book);
      });
      bookElem.appendChild(coverElem);
      bookElem.appendChild(titleElem);
      bookElem.appendChild(authorElem);
      bookElem.appendChild(borrowBtnElem);
      booksContainer.appendChild(bookElem);
    }
  }

  // Borrowing books
  function borrowBook(book) {
    borrowedBooks.push(book);
    updateBorrowedBooksCount();
    alert('借阅成功');
  }

  // Update the number of borrowed books
  function updateBorrowedBooksCount() {
    borrowedCount.textContent = borrowedBooks.length;
  }

  // Initialization interface
  function init() {
    generateBooksList(booksData);
    updateBorrowedBooksCount();
  }

  // Search for books
  function searchBooks(keyword) {
    const filteredBooks = booksData.filter(function (book) {
      return book.title.includes(keyword) || book.author.includes(keyword);
    });
    generateBooksList(filteredBooks);
  }

  // Listening for search button click events
  searchBtn.addEventListener('click', function () {
    const keyword = document.getElementById('search').value.trim();
    searchBooks(keyword);
  });
 
  

  // Initialization interface
  init();

