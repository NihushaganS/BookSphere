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



booky.listen(3000, () => {
  console.log("Server is running");
});