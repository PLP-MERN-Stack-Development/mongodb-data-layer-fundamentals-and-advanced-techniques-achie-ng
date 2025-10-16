// MongoDB Shell Script - Run with: mongosh filename.js
// insert_books.js
use plp_bookstore

db.books.insertMany([
  {
    title: "Auntie's House",
    author: "Mba Nnachi",
    genre: "Fiction",
    published_year: 2010,
    price: 15.99,
    in_stock: true,
    pages: 200,
    publisher: "Farafina Books"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee", 
    genre: "Fiction",
    published_year: 1960,
    price: 14.99,
    in_stock: true,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 10.99,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    published_year: 1813,
    price: 9.99,
    in_stock: true,
    pages: 432,
    publisher: "T. Egerton"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 15.99,
    in_stock: true,
    pages: 310,
    publisher: "George Allen & Unwin"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy", 
    published_year: 1997,
    price: 18.99,
    in_stock: true,
    pages: 320,
    publisher: "Bloomsbury"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    published_year: 1951,
    price: 11.99,
    in_stock: true,
    pages: 234,
    publisher: "Little, Brown and Company"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    published_year: 1988,
    price: 16.99,
    in_stock: true,
    pages: 208,
    publisher: "HarperTorch"
  },
  {
    title: "The River Between",
    author: "Ngugi wa Thiong'o",
    genre: "Fiction",
    published_year: 1995,
    price: 635,
    in_stock: true,
    pages: 176,
    publisher: "Heinemann"
  }
])

print("Books inserted successfully!")