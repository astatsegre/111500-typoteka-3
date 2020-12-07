'use strict';

const request = require(`supertest`);

const getApp = require(`./index`);

const mockedData = [`Деревья`, `За жизнь`, `Без рамки`, `Разное`, `IT`];

const app = getApp([], mockedData);
describe(`API returns category list`, () => {
  let response;
  beforeAll(async () => {
    response = await request(app)
      .get(`/api/categories`);
  });

  test(`Status code should be 200`, async () => {
    expect(response.statusCode).toBe(200);
  });

  test(`In body should be curtain categories list`, async () => {
    expect(response.body).toEqual(expect.arrayContaining([`Деревья`, `За жизнь`, `Без рамки`, `Разное`, `IT`]));
  });
});
