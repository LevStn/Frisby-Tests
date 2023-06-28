const { API_KEY_TEST } = require("../Properties");
const COLLECTION_ID = "21688951-2bf76ed1-6d6d-4c6d-b29d-8c6a2a39a00b";
const frisby = require("frisby");
const Joi = frisby.Joi;

describe("Day 4", () => {
  it("Authorization", async function () {
    const result = await frisby
      .get(`https://api.getpostman.com/collections?apikey=${API_KEY_TEST}`)
      .expect("status", 200)
      .expect("jsonTypes", "collections.*", {
        id: Joi.string(),
        name: Joi.string(),
        owner: Joi.string(),
        uid: Joi.string(),
      });
  });
});
