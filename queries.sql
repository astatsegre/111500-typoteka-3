/* все статьи */
SELECT * FROM ARTICLES;


/* Категории, по которым есть хотя бы одна статья */
SELECT
    categories.id,
    categories.name
FROM categories
INNER JOIN articles_categories
    ON articles_categories.category_id = categories.id
    GROUP BY categories.id;

/* категории с количеством публикаций по ним */
SELECT
    categories.id,
    categories.name,
    count(articles_categories.category_id)
FROM categories
LEFT JOIN articles_categories
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
    concat(users.first_name, ' ', users.last_name) as "full_name",
    users.email,
    article_comments.comments_count,
    article_categories.categories
FROM articles
LEFT JOIN (
    SELECT article_id, count(comments.id) as "comments_count"
    FROM comments
    GROUP BY article_id
) article_comments
ON articles.id = article_comments.article_id
LEFT JOIN (
    SELECT articles_categories.article_id, string_agg(categories.name, ', ') as "categories"
    FROM categories
    INNER JOIN articles_categories
        ON articles_categories.category_id = categories.id
    GROUP BY articles_categories.article_id
) article_categories
    ON articles.id = article_categories.article_id
INNER JOIN users
    ON articles.user_id = users.id
ORDER BY articles.created_at DESC;

/* Данные публикации (идентификатор публикации, заголовок публикации, анонс, полный текст публикации, дата публикации,
путь к изображению, имя и фамилия автора, контактный email, количество комментариев, наименование категорий) */
SELECT
    articles.*,
    concat(users.first_name, ' ', users.last_name) as "first_name_last_name",
    users.email,
    article_comments.comments_count,
    article_categories.categories
FROM articles
LEFT JOIN (
    SELECT article_id, count(comments.id) as "comments_count"
    FROM comments
    GROUP BY article_id
) article_comments
ON articles.id = article_comments.article_id
LEFT JOIN (
    SELECT articles_categories.article_id, string_agg(categories.name, ', ') as "categories"
    FROM categories
    INNER JOIN articles_categories
        ON articles_categories.category_id = categories.id
    GROUP BY articles_categories.article_id
) article_categories
    ON articles.id = article_categories.article_id
INNER JOIN users
    ON articles.user_id = users.id
WHERE articles.id = 2

/* 5 свежих комментариев (идентификатор комментария, идентификатор публикации, имя и фамилия автора, текст комментария); */
SELECT
    comments.id,
    comments.article_id,
    concat(users.first_name, ' ', users.last_name) as "first_name_last_name",
    comments.text
FROM comments
INNER JOIN users
    ON comments.user_id = users.id
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
ORDER BY comments.created_at DESC;

/* Обновляет заголовок публикации на «Как я встретил Новый год» */
UPDATE articles
SET title = 'Как я встретил Новый год'
WHERE id = 1;
