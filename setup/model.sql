\c postgres;
-- drop database if exists
drop database if exists book;

-- create database look
create database book;

--connect to database

--table branches

drop table if exists users;
create table users (
    user_id serial not null primary key,
    first_name varchar(64) not null,
    last_name varchar(64) not null,
    age int not null,
    created_at timestamp default CURRENT_TIMESTAMP not null,
    updated_at timestamp default CURRENT_TIMESTAMP not null
);

drop table if exists books;
create table books (
    book_id serial not null,
    title varchar(64) not null,
    author varchar(64) not null,
    is_free boolean default true,
    created_at timestamp default CURRENT_TIMESTAMP not null,
    user_id int references users(user_id)
);


