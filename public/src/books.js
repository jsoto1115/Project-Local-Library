function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let result = [[], []];
  for (let i in books) {
    if (books[i].borrows[0].returned === false) {
      result[0].push(books[i]);
    }else{
      result[1].push(books[i])
    }
  }
  return result
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  for (let i in book.borrows) {
    result.push(accounts.find((account) => book.borrows[i].id === account.id))
  }
  for(let i in result) {
    for(let j in book.borrows) {
      result[i]["returned"] = book.borrows[j].returned;
    }
  }
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
