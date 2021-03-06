/* insert users */
insert into users("avatarUrl", "firstName", "lastName", email, "passwordHash") values
('/imgs/user1', 'stanislav', 'novitckas', 'astatsegre@gmail.com', 'fewhub239fh23'),
('/imgs/user2', 'Grisha', 'Egorov', 'grishaegorov@gmail.com', 'dsfewfqwfsf'),
('/imgs/user3', 'Alex', 'Pushkin', 'alexpushkin@yandex.ru', 'ewfdqef94j'),
('/imgs/user4', 'Lemuel', 'Baglan', 'lbaglan0@php.net', '70LotIgGq1eE'),
('/imgs/user5', 'Stacy', 'Ben', 'sben1@deviantart.com', 'l2aeaji'),
('/imgs/user6', 'Angie', 'Piercy', 'apiercy2@fc2.com', 'zaTvQEL8e');

/* insert articles */
insert into articles("userId", annotation, "fullText", "createdAt", "updatedAt", "imgUrl", title) values
(1, 'Первая большая ёлка была установлена только в 1938 году.', 'Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Золотое сечение — соотношение двух величин, гармоническая пропорция. Собрать камни бесконечности легко, если вы прирожденный герой. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике.', '2020-04-04 20:00:00', '2020-04-04 21:00:00', 'imgs/article1', 'Ёлки. История деревьев'),
(3, 'Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле?', 'Простые ежедневные упражнения помогут достичь успеха. Это один из лучших рок-музыкантов. Он написал больше 30 хитов. Из под его пера вышло 8 платиновых альбомов. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем.', '2020-04-04 22:00:00', '2020-04-04 23:00:00', 'imgs/article2', 'Борьба с прокрастинацией'),
(1, 'Достичь успеха помогут ежедневные повторения.', 'Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Как начать действовать? Для начала просто соберитесь. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравится только игры. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Вам стоит начать со вставания с дивана. Гладьте по часовой стрелки.', '2020-04-04 21:00:00', '2020-04-04 22:00:00', 'imgs/article3',  'Рок — это протест');

/* insert comments */
insert into comments("userId", "articleId", text, "createdAt") values
(2, 2, 'Как без всех условий посчитать, что выгодно? Какой долг? Сколько выплачивать? На скольок планируете накупить техники? На сколько % уменьшит ваш платеж эти 1500$?', '2020-04-05 20:00:00'),
(1, 2, 'тьфунатебя, именно. чистая математика. что одному будет выгодно другому совершенно не так.', '2020-04-05 21:00:00'),
(3, 1, 'Вообще лучше гасить, но в Вашем конкретном случае (слишком малая сумма накоплений, из которых потребуется покупать технику/мебель в квартиру) - копить на обстановку в квартире, ибо Вы верно подметили, что ставка по потреб.кредиту будет сильно выше ипотечной', '2020-04-05 22:00:00'),
(6, 3, 'Финансово ипотека - это зачастую кредит, который невыгодно погашать досрочно. С другой стороны, психологически это может быть оправдано: уменьшается ежемесячный платёж. Однако в вашем случае досрочное погашение на 1.5 тысячи долларов вряд ли сыграют большую роль в уменьшении платежа. Поэтому разумнее копить, учитывая, что может понадобиться потребительский кредит на бытовую технику. Также оправдано держать эти деньги именно в долларах, т.к. цена техники чувствительна к валютному курсу.', '2020-04-05 23:00:00'),
(4, 3, 'Георгий, ипотека - кредит дешёвый, поэтому правило «обязательно гасить досрочно» тут неприменимо. Доллары нужно держать не из-за доходности, а из-за того, что расходы к ним привязаны. Таким образом в данном случае долларовые сбережения снижают риск.', '2020-04-05 23:30:00'),
(5, 1, 'У меня и ипотека и доллары и расходы (но в рублях), поэтому я знаю, о чем говорю и все многократно вычисляю каждый раз) Пусть у каждого останется своё мнение)', '2020-04-05 23:32:00');

/* insert categories */
insert into categories(name) values
('Музыка'),
('Спорт'),
('Экономика'),
('Авто'),
('История');

/* connects articles and categories */
insert into articles_categories values
(1, 1),
(2, 3),
(3, 2),
(3, 4),
(3, 5);
