import db from "#pg"
import query from "./sql.js"

async function getBook({ id }) {
    const branch = await db(query.GET)
    console.log(branch)
    return branch
}

export default {
    getBook
}