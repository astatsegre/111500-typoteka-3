drop table if exists articles_categories;
drop table if exists categories;
drop table if exists comments;
drop table if exists articles;
drop table if exists users;

create table users(
 id integer not null primary key generated always as identity,
 avatar_url varchar(255),
 first_name varchar(255),
 last_name varchar(255),
 email varchar(255),
 password_hash varchar(255)
);


create table articles(
 id integer not null primary key generated always as identity,
 user_id integer not null,
 annotation varchar(255) not null,
 full_text varchar(1005),
 created_at timestamp default current_timestamp,
 img_url varchar(255),
 title varchar(255) not null,
 foreign key(user_id) references users(id)
    on delete cascade
    on update cascade
);



create table comments(
  id integer not null primary key generated always as identity,
  user_id integer not null,
  article_id integer not null,
  text varchar(1000) not null,
  created_at timestamp default current_timestamp,
  foreign key(user_id) references users(id)
    on delete cascade
    on update cascade,
  foreign key(article_id) references articles(id)
    on delete cascade
    on update cascade
);


create table categories(
 id integer not null primary key generated always as identity,
 name varchar(35)
);

create table articles_categories(
  article_id integer not null,
  category_id integer not null,
  constraint articles_categories_id primary key (article_id, category_id),
  foreign key(article_id) references articles(id)
    on delete cascade
    on update cascade,
  foreign key(category_id) references categories(id)
    on delete cascade
    on update cascade
);

create index on articles(title);
create index on articles(user_id);
create index on comments(user_id);
create index on comments(article_id);
create index on articles_categories(article_id);
create index on articles_categories(category_id);
create unique index on users(email);
create unique index on categories(name);
