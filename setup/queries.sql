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
    is_free
    b.created_at
from users as u
inner join books as b on u.user_id = b.user_id
;


select
    u.user_id,
    u.first_name,
    u.last_name,
    u.age,
    u.created_at,
    u.updated_at,
    json_agg(json_build_object('book_id', b.book_id, 'title', b.title, 'author', b.author, 'is_free',b.is_free, 'created_at', b.created_at )) as Books
from users as u 
left join books as b on u.user_id = b.user_id
group by u.user_id
; 


select 
    u.user_id,
    first_name,
    last_name,
    age,
    u.created_at,
    updated_at,
    json_agg(json_build_object('book_id', b.book_id, 'title', b.title, 'author', b.author, 'is_free',b.is_free, 'created_at', b.created_at )) as Books
from users as u
inner join books as b on u.user_id = b.user_id
group by u.user_id
;

    -- {
--      "id": 2,
--      "firstName": "Bob",
--      "lastName": "Davidson",
--      "age": 21,
--      "isFree": true,
--      "createdAt": "2022-03-25",
--      "updatedAt": "2022-03-27",
--      "Books": [{
--         "id": 43,
--         "title": "Clean Architecture",
--         "author": "Rober Martin"
--         "createdAt": "2022-03-25",
--      }]
-- }