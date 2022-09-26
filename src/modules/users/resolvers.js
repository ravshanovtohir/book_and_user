import model from "./model.js"

export default {
    Query: {
        ali: async (_, args) => {
            return "Ali"
        },
        users: async (_,) => {
            return await model.getUser()

        },
        books: async (_,) => {
            return await model.getBook()
        }
    },
    Mutation: {
        addUser: async (_, args) => {
            try {
                let { firstName, lastName, age } = args
                const newUser = await model.addUser({ firstName, lastName, age })
                return {
                    status: 200,
                    message: 'The user successfully added!',
                    data: newUser
                }
            } catch (error) {
                throw new Error(error.message)
            }

        },
        editUser: async (_, args) => {
            try {
                let { userId, firstName, lastName } = args
                let updatedAt = new Date
                console.log(typeof updatedAt);
                const updatedUser = await model.editUser({ userId, firstName, lastName, updatedAt })
                return {
                    status: 200,
                    message: 'The user successfully edited!',
                    data: updatedUser
                }
            } catch (error) {
                throw new Error(error.message)
            }

        },
        deleteUser: async (_, args) => {
            try {
                let { userId } = args
                const deletedUser = await model.deleteUser({ userId })
                return {
                    status: 200,
                    message: 'The user successfully deleted!',
                    data: deletedUser
                }
            } catch (error) {
                throw new Error(error.message)
            }

        },
        editBook: async (_, args) => {
            try {
                let { bookId, bookTitle, bookAuthor, isFree } = args
                console.log(args);
                const editedBook = await model.editBook({ bookId, bookTitle, bookAuthor, isFree })
                return {
                    status: 200,
                    message: 'The book successfully updated!',
                    data: editedBook
                }
            } catch (error) {
                throw new Error(error.message)
            }

        },
        deleteBook: async (_, args) => {
            try {
                let { bookId } = args
                const deletedBook = await model.deleteBook({ bookId })
                return {
                    status: 200,
                    message: 'The book successfully deleted!',
                    data: deletedBook
                }
            } catch (error) {
                throw new Error(error.message)
            }

        },
        addBook: async (_, args) => {
            try {
                let { bookTitle, bookAuthor, userId } = args
                const newBook = await model.addBook({ bookTitle, bookAuthor, userId })
                return {
                    status: 200,
                    message: 'The book successfully added!',
                    data: newBook
                }
            } catch (error) {
                throw new Error(error.message)
            }

        },
    },


    User: {
        userId: global => global.user_id,
        firstName: global => global.first_name,
        lastName: global => global.last_name,
        createdAt: global => global.created_at.toISOString(),
        updatedAt: global => global.updated_at.toISOString()
    },

    Book: {
        bookId: global => {
            let i = 1
            let a = global.map((el) => {
                return el.book_id
            })
            console.log(a);
            for (let i of a) {
                let arr = []
                arr.push(i)
                for (let j of arr) {

                    return j
                }
            }


        },
        bookTitle: global => {
            let i = 1
            let a = global.map((el) => {
                return el.title
            })
            console.log(a);
            for (let i of a) {
                return i
            }


        },
        bookAuthor: global => {
            let i = 1
            let a = global.map((el) => {
                return el.author
            })
            console.log(a);
            for (let i of a) {
                return i
            }


        },
        isFree: global => {
            let i = 1
            let a = global.map((el) => {
                return el.is_free
            })
            console.log(a);
            for (let i of a) {
                return i
            }


        },
        createdAt: global => {
            let i = 1
            console.log(global);

            let a = global.map((el) => {
                return el.created_at
            })
            console.log(a);
            for (let i of a) {
                return i
            }


        },
    },

}