drop table if exists articles_categories;
drop table if exists categories;
drop table if exists comments;
drop table if exists articles;
drop table if exists users;

create table users(
 id integer not null primary key generated always as identity,
 "createdAt" timestamp default current_timestamp,
 "updatedAt" timestamp default current_timestamp,
 "avatarUrl" varchar(255) not null,
 "firstName" varchar(255) not null,
 "lastName" varchar(255) not null,
 email varchar(255) not null,
 "passwordHash" varchar(255) not null
);


create table articles(
 id integer not null primary key generated always as identity,
 "userId" integer not null,
 annotation varchar(255) not null,
 "fullText" varchar(1005),
 "createdAt" timestamp default current_timestamp,
 "updatedAt" timestamp default current_timestamp,
 "imgUrl" varchar(255),
 title varchar(255) not null,
 foreign key("userId") references users(id)
    on delete cascade
    on update cascade
);



create table comments(
  id integer not null primary key generated always as identity,
  "userId" integer not null,
  "articleId" integer not null,
  text varchar(1000) not null,
  "createdAt" timestamp default current_timestamp,
  foreign key("userId") references users(id)
    on delete cascade
    on update cascade,
  foreign key("articleId") references articles(id)
    on delete cascade
    on update cascade
);


create table categories(
 id integer not null primary key generated always as identity,
 name varchar(35) not null
);

create table articles_categories(
  "articleId" integer not null,
  "categoryId" integer not null,
  "createdAt" timestamp default current_timestamp,
  "updatedAt" timestamp default current_timestamp,
  constraint articles_categories_id primary key ("articleId", "categoryId"),
  foreign key("articleId") references articles(id)
    on delete cascade
    on update cascade,
  foreign key("categoryId") references categories(id)
    on delete cascade
    on update cascade
);

create index on articles(title);
create index on articles("userId");
create index on comments("userId");
create index on comments("articleId");
create index on articles_categories("articleId");
create index on articles_categories("categoryId");
create unique index on users(email);
create unique index on categories(name);
