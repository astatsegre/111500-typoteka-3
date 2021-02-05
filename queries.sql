/* все статьи */
SELECT * FROM ARTICLES;


/* Категории, по которым есть хотя бы одна статья */
SELECT
    categories.id,
    categories.name
FROM articles_categories
INNER JOIN categories
    ON articles_categories.category_id = categories.id
    GROUP BY categories.id;

/* категории с количеством публикаций по ним */
SELECT
    categories.id,
    categories.name,
    count(articles_categories.category_id)
FROM articles_categories
RIGHT JOIN categories
    ON articles_categories.category_id = categories.id
    GROUP BY categories.id;

/* список публикаций (идентификатор публикации, заголовок публикации, анонс публикации,
дата публикации, имя и фамилия автора, контактный email, количество комментариев,
наименование категорий). Сначала свежие публикации; */
SELECT
    articles.id,
    articles.title,
    articles.created_at,
    articles.annotation,
    concat(users.first_name, ' ', users.last_name) as "first_name_last_name",
    users.email,
    count(comments.id) as "comments_count",
    string_agg(categories.name, ', ') as "categories"
FROM articles
INNER JOIN users
    ON articles.user_id = users.id
INNER JOIN comments
    ON articles.id = comments.article_id
INNER JOIN articles_categories
    ON articles_categories.article_id = articles.id
INNER JOIN categories
    ON categories.id = articles_categories.category_id
GROUP BY articles.id, users.id
ORDER BY articles.created_at DESC;

/* Данные публикации (идентификатор публикации, заголовок публикации, анонс, полный текст публикации, дата публикации,
путь к изображению, имя и фамилия автора, контактный email, количество комментариев, наименование категорий) */
SELECT
    articles.*,
    concat(users.first_name, ' ', users.last_name) as "first_name_last_name",
    users.email,
    count(comments.id) as "comments_count",
    string_agg(categories.name, ', ') as "categories"
FROM articles
INNER JOIN users
    ON articles.user_id = users.id
INNER JOIN comments
    ON articles.id = comments.article_id
INNER JOIN articles_categories
    ON articles_categories.article_id = articles.id
INNER JOIN categories
    ON categories.id = articles_categories.category_id
WHERE articles.id = 2
GROUP BY articles.id, users.id;

/* 5 свежих комментариев (идентификатор комментария, идентификатор публикации, имя и фамилия автора, текст комментария); */
SELECT
    comments.id,
    comments.article_id,
    concat(users.first_name, ' ', users.last_name) as "first_name_last_name",
    comments.text
FROM comments
INNER JOIN users
    ON comments.user_id = users.id
GROUP BY comments.id, users.id
ORDER BY comments.created_at DESC
LIMIT 5;

/* Комментарии для определённой публикации (идентификатор комментария, идентификатор
публикации, имя и фамилия автора, текст комментария). Сначала новые комментарии; */
SELECT
    comments.id,
    comments.article_id,
    concat(users.first_name, ' ', users.last_name) as "first_name_last_name",
    comments.text
FROM comments
INNER JOIN users
    ON comments.user_id = users.id
WHERE comments.article_id = 1
GROUP BY comments.id, users.id
ORDER BY comments.created_at DESC;

/* Обновляет заголовок публикации на «Как я встретил Новый год» */
UPDATE articles
SET title = 'Как я встретил Новый год'
WHERE id = 1;
