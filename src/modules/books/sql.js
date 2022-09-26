const GET_BOOKS = `
select
    branche_id,
    branche_name,
    branche_address,
    branche_created_at
from branches
where branche_name ilike concat('%', $3::varchar, '%')
offset $1 limit $2
;
`

const GET = `
    select * from books;
`

export default {
    GET_BOOKS,
    GET
}