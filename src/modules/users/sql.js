const GET_USERSS = `
select 
    u.user_id,
    first_name,
    last_name,
    age,
    u.created_at,
    updated_at,
    book_id,
    title,
    author,
    is_free,
    b.created_at
from users as u
right join books as b on u.user_id = b.user_id
;
`

const GET_USER = `
select
    u.user_id,
    u.first_name,
    u.last_name,
    u.age,
    u.created_at,
    u.updated_at,
    json_agg(json_build_object('book_id', b.book_id, 'title', b.title, 'author', b.author, 'is_free',b.is_free, 'created_at', b.created_at, 'user_id', b.user_id)) as Books
from users as u 
left join books as b on u.user_id = b.user_id
group by u.user_id
order by u.user_id
;
`

const ADD_USER = `
insert into users (
    first_name,
    last_name,
    age
) values (
    $1::varchar,
    $2::varchar,
    $3::int
) returning *
`

const GET_ONLY_USERS = `
    select * from users;
`

const UPDATE_USER = `
update users b set
    first_name = (
        case
            when length($2) > 0 then $2
            else b.first_name
        end
    ),
    last_name = (
        case
            when length($3) > 0 then $3
            else b.last_name
        end
    ),
    updated_at = CURRENT_TIMESTAMP 
where user_id = $1
returning *
`

const UPDATE_BOOK = `
update books b set
    title = (
        case
            when length($2) > 0 then $2
            else b.title
        end
    ),
    author = (
        case
            when length($3) > 0 then $3
            else b.author
        end
    )
where book_id = $1
returning *
`

const DELETE_USER = `
delete from users
where user_id = $1
returning *
`
const DELETE_BOOK = `
delete from books
where book_id = $1
returning *
`

const GET_BOOK = `
    select
        *
    from books
    ;
`

const GET_ONE_USER = `
    select
        *
    from users
    where user_id = $1
`

const ADD_BOOK = `
insert into books (
    title,
    author,
    user_id
) values (
    $1::varchar,
    $2::varchar,
    $3::int
) returning *   
`


export default {
    GET_USER,
    ADD_USER,
    GET_ONLY_USERS,
    UPDATE_USER,
    DELETE_USER,
    UPDATE_BOOK,
    GET_BOOK,
    DELETE_BOOK,
    ADD_BOOK
}