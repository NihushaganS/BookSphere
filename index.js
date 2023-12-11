const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const database = require("./database");

const booky = express();


booky.use(bodyParser.urlencoded({extended: true}));
booky.use(bodyParser.json());


mongoose.connect("",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFineAndModify: false,
  useCreateIndex: true
}
).then(() => console.log("Connection established!"));

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

  return res.json({book: getSpecificBook});
});

booky.listen(3000, () => {
  console.log("Server is running");
});