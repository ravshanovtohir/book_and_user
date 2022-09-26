import db from "#pg"
import query from "./sql.js"

async function getUser() {
    console.log(query.GET_USER)
    const branch = await db(query.GET_USER)
    return branch
}

async function getBook() {
    const branch = await db(query.GET_BOOK)
    return branch
}

async function addUser({ firstName, lastName, age }) {
    const [user] = await db(query.ADD_USER, firstName, lastName, age)
    return user
}

async function editUser({ userId, lastName, firstName }) {
    const [user] = await db(query.UPDATE_USER, userId, firstName, lastName)
    return user
}

async function editBook({ bookId, bookTitle, bookAuthor }) {
    const user = await db(query.UPDATE_BOOK, bookId, bookTitle, bookAuthor)
    return user
}

async function deleteUser({ userId }) {
    const [user] = await db(query.DELETE_USER, userId)
    return user
}

async function deleteBook({ bookId }) {
    const user = await db(query.DELETE_BOOK, bookId)
    return user
}

async function addBook({ bookTitle, bookAuthor, userId }) {
    console.log(bookAuthor);
    const user = await db(query.ADD_BOOK, bookTitle, bookAuthor, userId)
    return user
}

export default {
    getUser,
    addUser,
    editUser,
    deleteUser,
    editBook,
    deleteBook,
    getBook,
    addBook
}