# book_and_user
 
To use the program, first download this repository
 
# setup database

The data structure is located inside the model file inside the setup file. In this file, copy the postgres code to your postgresql terminal and create a database. After that, edit the database information in the .env file (such as password and database name).
If you want, postgresQl code for mock data is written in the mockData.js file inside the setup file


# start program
```
To run the program fully, you need to type npm i in the terminal
To run the program, type npm run start:dev in the terminal
```

# About program
```
I used express.js to get the user and books to the browser after running the app
For user: http://localhost:5000/api/books
For book: http://localhost:5000/api/books
```

# QUERIES for GRAPHQL


# Add User
```

mutation{
  addUser(firstName: "Laziz", lastName: "Lazizov", age: 25){
    status
    message
     data {
      userId
      firstName
      lastName
      age
      createdAt
      updatedAt
    }
  } 
  }


```

# Edit User
```

mutation{
  editUser(userId:1, lastName: "Azizov"){
    status
    message
    data{
      userId
      firstName
      lastName
      age
      createdAt
      updatedAt
    }
  }
}

```

# Delete User
```

mutation{
  deleteUser(userId:9){
    status
    message
    data{
      userId
      firstName
      lastName
    }
  }
}

```

# Add Book
```

mutation{
  addBook(bookTitle: "Olma", bookAuthor: "Olma", userId: 1){
    status
    message
    data{
      bookId
      bookTitle
      bookAuthor    
    }
  }
}

```

# Edit Book 
```

mutation{
  editBook(bookId: 1, bookTitle: "Olma", isFree: false, bookAuthor: "Azizxan"){
    status
    message
    data{
      bookId
      bookTitle
      bookAuthor
    }
  }
}

```

# Delete Book
```

mutation{
  deleteBook(bookId: 5){
    status
    message
    data{
      bookId
      bookTitle
      bookAuthor
    }
  }
}

```
