-- Active: 1684278635009@@127.0.0.1@3306
create table users(
    id text PRIMARY key not null,
    name text not null,
    email text not null,
    password text not null
);

insert into users(id,name,email,password)
values(
    "user001",
    "testando teste dos santos",
    "testando@gmail.com",
    "testando123"
);

create table tasks(
    id text PRIMARY KEY NOT NULL,
    title text not null,
    description text not null,
    created_at datetime DEFAULT(datetime('now','localtime')) not null,
    status INTEGER
);

create table users_tasks(
    user_id text not null,
    task_id text not null,
    constraint fk_user_id_tasks foreign key (user_id) references users(id),
    constraint fk_task_id_tasks foreign key (task_id) references tasks(id)
);

SELECT * from tasks;