'use strict';

const request = require(`supertest`);

const getApp = require(`./index`);
const mockedData = [{"id": `3jKViUtz9mODTX_24Krpa`, "title": ` Рок — это протест`, "createdDate": `2020-11-13T23:37:29.521Z`, "announce": [`Как начать действовать? Для начала просто соберитесь.`, `Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравится только игры.`, `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`, `Вам стоит начать со вставания с дивана.`], "fullText": [`Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравится только игры.`, `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`, `Вам стоит начать со вставания с дивана.`, `Гладьте по часовой стрелки.`, `Продолжайте в том же духе, пока не почувствуйте покалывания в левой пятке.`, `Лак лучше наносить в самом конце, когда поверхность максимально к этому готова.`, `Не бойтесь!`], "category": [`IT`], "comments": [{"id": `-7KWgr7CVxrUmxlfmvVIN`, "text": `Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`}, {"id": `0A62KxhCSuGXH3bGfVmJ_`, "text": `Хочу такую же футболку :-) Плюсую, но слишком много буквы!`}, {"id": `MYX2kzpMwtgkOxTG6W1lA`, "text": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Хочу такую же футболку :-) Плюсую, но слишком много буквы!`}, {"id": `ZHMFlrN0YQagUj6BcyMxB`, "text": `Совсем немного... Согласен с автором! Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Хочу такую же футболку :-) Плюсую, но слишком много буквы!`}]}, {"id": `ADwhCVbpVQe_YKpSFvwsf`, "title": ` Как собрать камни бесконечности`, "createdDate": `2020-12-04T01:22:23.161Z`, "announce": [`Из под его пера вышло 8 платиновых альбомов.`, `Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем.`, `Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле?`], "fullText": [`Гладьте по часовой стрелки.`, `Продолжайте в том же духе, пока не почувствуйте покалывания в левой пятке.`, `Лак лучше наносить в самом конце, когда поверхность максимально к этому готова.`, `Не бойтесь!`], "category": [`Кино`, `Программирование`], "comments": [{"id": `yqRVyPbVUr6BNpYd4Km2D`, "text": `Совсем немного... Согласен с автором! Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`}, {"id": `jJTIeRh0862GQ4CFySrA9`, "text": `Согласен с автором! Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Хочу такую же футболку :-)`}, {"id": `309A_xuBDgLA3Yrg_f2PV`, "text": `Мне кажется или я уже читал это где-то?`}, {"id": `eyV8YXbErJeQtdaDHxwni`, "text": `Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Хочу такую же футболку :-)`}, {"id": `VyDhJFDA5FHpMVElPXc-f`, "text": `Совсем немного... Согласен с автором! Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Хочу такую же футболку :-) Плюсую, но слишком много буквы!`}, {"id": `mHwZ3mXW9JskgYqJjpyyv`, "text": `Хочу такую же футболку :-)`}]}];

const app = getApp(mockedData);

describe(`Returns search results`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .get(`/api/search`)
      .query({query: `Рок`});
  });

  test(`Status code should be 200`, async () => {
    expect(response.statusCode).toBe(200);
  });

  test(`Body length should be 1`, async () => {
    expect(response.body.length).toBe(1);
  });

  test(`First element id should be "3jKViUtz9mODTX_24Krpa"`, async () => {
    expect(response.body[0].id).toBe(`3jKViUtz9mODTX_24Krpa`);
  });
});

test(`Returns 400 when no query string`,
    () => request(app)
    .get(`/api/search`)
    .expect(400)
);
