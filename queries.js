// queries.js - All MongoDB queries for the assignment
// MongoDB Shell Script - Run with: mongosh filename.js
use plp_bookstore

// Task 2: Basic CRUD Operations
print("=== TASK 2: BASIC CRUD OPERATIONS ===")

// 1. Find all books in a specific genre
print("1. Fiction books:");
db.books.find({ genre: "Fiction" })

// 2. Find books published after a certain year
print("2. Books published after 2000:");
db.books.find({ published_year: { $gt: 2000 } })

// 3. Find books by a specific author
print("3. Books by Mba Nnachi:");
db.books.find({ author: "Mba Nnachi" })

// 4. Update the price of a specific book
print("4. Updating Auntie's House price:");
db.books.updateOne(
  { title: "Auntie's House" },
  { $set: { price: 17.99 } }
)

// 5. Delete a book by its title
print("5. Deleting The Da Vinci Code:");
db.books.deleteOne({ title: "The Da Vinci Code" })

// Task 3: Advanced Queries
print("\n=== TASK 3: ADVANCED QUERIES ===")

// 1. Books in stock and published after 2010
print("1. In-stock books after 2010:");
db.books.find({ 
  in_stock: true, 
  published_year: { $gt: 2010 } 
})

// 2. Projection - only title, author, price
print("2. Fiction books with projection:");
db.books.find(
  { genre: "Fiction" },
  { title: 1, author: 1, price: 1, _id: 0 }
)

// 3. Sorting by price
print("3. Books sorted by price (ascending):");
db.books.find().sort({ price: 1 })

print("4. Books sorted by price (descending):");
db.books.find().sort({ price: -1 })

// 4. Pagination
print("5. Pagination - Page 1:");
db.books.find().sort({ title: 1 }).limit(5).skip(0)

// Task 4: Aggregation Pipeline
print("\n=== TASK 4: AGGREGATION PIPELINE ===")

// 1. Average price by genre
print("1. Average price by genre:");
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { averagePrice: -1 }
  }
])

// 2. Author with most books
print("2. Authors with book counts:");
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 }
  },
  {
    $limit: 3
  }
])

// 3. Books by publication decade
print("3. Books by publication decade:");
db.books.aggregate([
  {
    $project: {
      title: 1,
      author: 1,
      published_year: 1,
      decade: {
        $subtract: [
          "$published_year",
          { $mod: ["$published_year", 10] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      bookCount: { $sum: 1 },
      books: { $push: "$title" }
    }
  },
  {
    $sort: { _id: 1 }
  }
])

// Task 5: Indexing
print("\n=== TASK 5: INDEXING ===")

// 1. Create index on title field
print("1. Creating index on title field:");
db.books.createIndex({ title: 1 })

// 2. Create compound index
print("2. Creating compound index on author and published_year:");
db.books.createIndex({ author: 1, published_year: 1 })

// 3. Show indexes
print("3. Current indexes:");
db.books.getIndexes()

// 4. Performance demonstration
print("4. Performance check with explain():");
db.books.find({ title: "The Hobbit" }).explain("executionStats")