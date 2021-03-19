'use strict';

const request = require(`supertest`);
const getApp = require(`./index`);

const mockedData = [{"id": `3jKViUtz9mODTX_24Krpa`, "title": ` Рок — это протест`, "createdAt": `2020-11-13T23:37:29.521Z`, "annotation": [`Как начать действовать? Для начала просто соберитесь.`, `Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравится только игры.`, `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`, `Вам стоит начать со вставания с дивана.`], "full_text": [`Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравится только игры.`, `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`, `Вам стоит начать со вставания с дивана.`, `Гладьте по часовой стрелки.`, `Продолжайте в том же духе, пока не почувствуйте покалывания в левой пятке.`, `Лак лучше наносить в самом конце, когда поверхность максимально к этому готова.`, `Не бойтесь!`], "category": [`IT`], "comments": [{"id": `-7KWgr7CVxrUmxlfmvVIN`, "text": `Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`}, {"id": `0A62KxhCSuGXH3bGfVmJ_`, "text": `Хочу такую же футболку :-) Плюсую, но слишком много буквы!`}, {"id": `MYX2kzpMwtgkOxTG6W1lA`, "text": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Хочу такую же футболку :-) Плюсую, но слишком много буквы!`}, {"id": `ZHMFlrN0YQagUj6BcyMxB`, "text": `Совсем немного... Согласен с автором! Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Хочу такую же футболку :-) Плюсую, но слишком много буквы!`}]}, {"id": `ADwhCVbpVQe_YKpSFvwsf`, "title": ` Как собрать камни бесконечности`, "createdAt": `2020-12-04T01:22:23.161Z`, "annotation": [`Из под его пера вышло 8 платиновых альбомов.`, `Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем.`, `Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле?`], "full_text": [`Гладьте по часовой стрелки.`, `Продолжайте в том же духе, пока не почувствуйте покалывания в левой пятке.`, `Лак лучше наносить в самом конце, когда поверхность максимально к этому готова.`, `Не бойтесь!`], "category": [`Кино`, `Программирование`], "comments": [{"id": `yqRVyPbVUr6BNpYd4Km2D`, "text": `Совсем немного... Согласен с автором! Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`}, {"id": `jJTIeRh0862GQ4CFySrA9`, "text": `Согласен с автором! Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Хочу такую же футболку :-)`}, {"id": `309A_xuBDgLA3Yrg_f2PV`, "text": `Мне кажется или я уже читал это где-то?`}, {"id": `eyV8YXbErJeQtdaDHxwni`, "text": `Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Хочу такую же футболку :-)`}, {"id": `VyDhJFDA5FHpMVElPXc-f`, "text": `Совсем немного... Согласен с автором! Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Хочу такую же футболку :-) Плюсую, но слишком много буквы!`}, {"id": `mHwZ3mXW9JskgYqJjpyyv`, "text": `Хочу такую же футболку :-)`}]}];
const mockedNewArticle = {"title": ` Рок — это протест`, "createdAt": `2020-11-13T23:37:29.521Z`, "annotation": [`Как начать действовать? Для начала просто соберитесь.`, `Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравится только игры.`, `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`, `Вам стоит начать со вставания с дивана.`], "full_text": [`Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравится только игры.`, `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`, `Вам стоит начать со вставания с дивана.`, `Гладьте по часовой стрелки.`, `Продолжайте в том же духе, пока не почувствуйте покалывания в левой пятке.`, `Лак лучше наносить в самом конце, когда поверхность максимально к этому готова.`, `Не бойтесь!`], "category": [`IT`], "comments": [{"id": `-7KWgr7CVxrUmxlfmvVIN`, "text": `Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`}, {"id": `0A62KxhCSuGXH3bGfVmJ_`, "text": `Плюсую, но слишком много буквы!`}, {"id": `MYX2kzpMwtgkOxTG6W1lA`, "text": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Хочу такую же футболку :-) Плюсую, но слишком много буквы!`}, {"id": `ZHMFlrN0YQagUj6BcyMxB`, "text": `Совсем немного... Согласен с автором! Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Давно не пользуюсь стационарными компьютерами.`}]};
const updatedArticle = {"id": `3jKViUtz9mODTX_24Krpa`, "title": ` Рок уже не торт`, "createdAt": `2020-11-13T23:37:29.521Z`, "annotation": [`Как начать действовать? Для начала просто соберитесь.`, `Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравится только игры.`, `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`, `Вам стоит начать со вставания с дивана.`], "full_text": [`Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравится только игры.`, `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`, `Вам стоит начать со вставания с дивана.`, `Гладьте по часовой стрелки.`, `Продолжайте в том же духе, пока не почувствуйте покалывания в левой пятке.`, `Лак лучше наносить в самом конце, когда поверхность максимально к этому готова.`, `Не бойтесь!`], "category": [`IT`], "comments": [{"id": `-7KWgr7CVxrUmxlfmvVIN`, "text": `Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`}, {"id": `0A62KxhCSuGXH3bGfVmJ_`, "text": `Хочу такую же футболку :-) Плюсую, но слишком много буквы!`}, {"id": `MYX2kzpMwtgkOxTG6W1lA`, "text": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Хочу такую же футболку :-) Плюсую, но слишком много буквы!`}, {"id": `ZHMFlrN0YQagUj6BcyMxB`, "text": `Совсем немного... Согласен с автором! Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Хочу такую же футболку :-) Плюсую, но слишком много буквы!`}]};
const app = getApp(mockedData);
describe(`Returns article list`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .get(`/api/articles`);
  });

  test(`Status code should be 200`, async () => {
    expect(response.statusCode).toBe(200);
  });

  test(`Response should be 2 elements length`, async () => {
    expect(response.body.length).toEqual(2);
  });

  test(`First item title should be " Рок — это протест"`, async () => {
    expect(response.body[0].title).toEqual(` Рок — это протест`);
  });
});

describe(`Returns single article with certain id`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .get(`/api/articles/3jKViUtz9mODTX_24Krpa`);
  });

  test(`Status code should be 200`, async () => {
    expect(response.statusCode).toBe(200);
  });

  test(`Response should be object type`, async () => {
    expect(typeof response.body).toBe(`object`);
  });

  test(`Title should be " Рок — это протест"`, async () => {
    expect(response.body.title).toEqual(` Рок — это протест`);
  });
});

describe(`Can't find article`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .get(`/api/articles/HZ4WS`);
  });

  test(`Status code should be 404`, async () => {
    expect(response.statusCode).toBe(404);
  });

  test(`Response should be "Not found. id HZ4WS"`, async () => {
    expect(response.text).toBe(`Not found. id HZ4WS`);
  });

});

describe(`Creates new article`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .post(`/api/articles`)
      .send(mockedNewArticle);
  });

  test(`Status code should be 201`, async () => {
    expect(response.statusCode).toBe(201);
  });

  test(`Response has property "id"`, async () => {
    expect(response.body).toHaveProperty(`id`);
  });

  test(`Title should be " Рок — это протест"`, async () => {
    expect(response.body.title).toBe(` Рок — это протест`);
  });
});

describe(`Updates article`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .put(`/api/articles/3jKViUtz9mODTX_24Krpa`)
      .send(updatedArticle);
  });

  test(`Status code should be 200`, async () => {
    expect(response.statusCode).toBe(200);
  });

  test(`Response should be object`, async () => {
    expect(typeof response.body).toBe(`object`);
  });

  test(`Prop "picture" should be " Рок уже не торт"`, async () => {
    expect(response.body.title).toBe(` Рок уже не торт`);
  });

  test(`Prop "createdAt" should be 2020-11-13T23:37:29.521Z`, async () => {
    expect(response.body.createdAt).toBe(`2020-11-13T23:37:29.521Z`);
  });
});

describe(`Can't update article, because not all props provided`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .put(`/api/articles/3jKViUtz9mODTX_24Krpa`)
      .send({"createdAt": `2020-11-13T23:37:29.521Z`});
  });

  test(`Status code should be 400`, async () => {
    expect(response.statusCode).toBe(400);
  });

  test(`Response text should be "Bad request"`, async () => {
    expect(response.text).toBe(`Bad request`);
  });
});

describe(`Deletes article`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .delete(`/api/articles/3jKViUtz9mODTX_24Krpa`);
  });

  test(`Status code should be 200`, async () => {
    expect(response.statusCode).toBe(200);
  });

  test(`Response should be object`, async () => {
    expect(typeof response.body).toBe(`object`);
  });

  test(`Id should be 3jKViUtz9mODTX_24Krpa`, async () => {
    expect(response.body.id).toBe(`3jKViUtz9mODTX_24Krpa`);
  });
});

describe(`Can't delete article, because it doesn't exist`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .delete(`/api/articles/HZTAo4WS`);
  });

  test(`Status code should be 404`, async () => {
    expect(response.statusCode).toBe(404);
  });

  test(`Response should be "Not found. id HZTAo4WS"`, async () => {
    expect(response.text).toBe(`Not found. id HZTAo4WS`);
  });
});

describe(`Returns comments`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .get(`/api/articles/3jKViUtz9mODTX_24Krpa/comments`);
  });

  test(`Status code should be 200`, async () => {
    expect(response.statusCode).toBe(200);
  });

  test(`Response should be 4 elements length`, async () => {
    expect(response.body.length).toEqual(4);
  });

  test(`First comment id should be "-7KWgr7CVxrUmxlfmvVIN"`, async () => {
    expect(response.body[0].id).toEqual(`-7KWgr7CVxrUmxlfmvVIN`);
  });
});

describe(`Deletes comment`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .delete(`/api/articles/3jKViUtz9mODTX_24Krpa/comments/-7KWgr7CVxrUmxlfmvVIN`);
  });

  test(`Status code should be 200`, async () => {
    expect(response.statusCode).toBe(200);
  });

  test(`Should returns object with id "-7KWgr7CVxrUmxlfmvVIN"`, async () => {
    expect(response.body.id).toEqual(`-7KWgr7CVxrUmxlfmvVIN`);
  });
});

describe(`Adds new comment`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .post(`/api/articles/3jKViUtz9mODTX_24Krpa/comments`)
      .send({"text": `new comment`});
  });

  test(`Status code should be 201`, async () => {
    expect(response.statusCode).toBe(201);
  });

  test(`Response has property "id"`, async () => {
    expect(response.body).toHaveProperty(`id`);
  });
});

