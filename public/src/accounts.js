const { getTotalAccountsCount } = require("./home");

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    for (let i in book.borrows) {
      if (book.borrows[i].id === account.id) {
        acc += 1;
      }
    }
    return acc;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let accountBorrows = [] 
  books.filter((book) => {
    for (let i in book.borrows) {
      if (
        account.id === book.borrows[i].id &&
        book.borrows[i].returned === false
      ) {
        accountBorrows.push(book); 
      }
    }
  });
  for (let j in accountBorrows) { 
    for (let k in authors) { 
      if (accountBorrows[j].authorId === authors[k].id) {
        accountBorrows[j].author = authors[k];
      }
    }
  }
  return accountBorrows;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
