const express = require("express");
const database = require("./database");

const booky = express();

/*
Route               /
Description         Get all books
Access              Public
Parameter           None
Methods             Get
*/
booky.get("/", (req,res) => {
  return res.json({books: database.books});
});

/*
Route               /is
Description         Get specific books on ISBN
Access              Public
Parameter           ISBN
Methods             Get
*/
booky.get("/is/:isbn", (req,res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.ISBN === req.params.isbn
  );

  if(getSpecificBook.length === 0) {
    return res.json({error: `No book found for the ISBN of ${req.params.isbn}`});
  }
  else{
    return res.json({book: getSpecificBook});
  }
});

booky.listen(3000, () => {
  console.log("Server is running");
});