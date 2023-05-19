-- Active: 1684278635009@@127.0.0.1@3306
create table users(
    id text PRIMARY key not null,
    name text not null,
    email text not null ,
    password text not null
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
insert into users(id,name,email,password)
values(
    "user001",
    "testando teste dos santos",
    "testando@gmail.com",
    "testando123"
);

SELECT * from users_tasks;

CREATE UNIQUE INDEX idx_unique_email ON users (email);
SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;

DELETE FROM users WHERE id NOT IN (SELECT MAX(id) FROM users GROUP BY email HAVING COUNT(*) > 1);

INSERT into users_tasks(user_id,task_id)values("1","1");


SELECT tasks.*, users_tasks.user_id
FROM tasks
INNER JOIN users_tasks ON tasks.id = users_tasks.task_id;

SELECT users.*,tasks.*
from users
INNER JOIN users_tasks on users.id = users_tasks.user_id
INNER JOIN users_tasks on tasks.id = users_tasks.task_id;



SELECT users.*, tasks.*
FROM users
INNER JOIN users_tasks ON users.id = users_tasks.user_id
INNER JOIN tasks ON tasks.id = users_tasks.task_id;