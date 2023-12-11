const books = [
  {
    isbn: "ISBN001",
    title: "Tesla",
    pubDate: "2023-12-10",
    language: "en",
    page: 200,
    authors: [1,2],
    publication: 1,
    category: ["Tech", "Space"]
  }
]

const authors = [
  {
    id: 1,
    name: "Shagan",
    books: ["ISBN001", "Secret"]
  },
  {
    id: 2,
    name: "Peter",
    books: ["ISBN001", "Secret"]
  }
] 

const publication = [
  {
    id: 1,
    name: "Rockstar",
    books: "ISBN001"
  }
] 


module.exports = {books,authors,publication};