import model from "./model.js"


export default {
    Query: {
        ali: async (_, args) => {
            return "Ali"
        },
        // branch: async (_, args) => {
        //     return await model.getBook(args)
        // }
    },

    // Book: {
    //     firstName: global => global.first_name,
    //     lastName: global => global.last_name,
    //     branchAdress: global => global.branche_address,
    //     createdAt: global => global.created_at.toISOString(),
    //     updatedAt: global => global.updated_at.toISOString()
    // }
}