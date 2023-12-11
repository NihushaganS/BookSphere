const express = require("express");

const booky = express();

booky.listen(3000, (req,res) => {
  console.log("Server is running");
});