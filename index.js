const express = require("express");
const database = require("./database");

const booky = express();

booky.listen(3000, (req,res) => {
  console.log("Server is running");
});