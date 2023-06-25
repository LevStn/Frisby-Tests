const frisby = require("frisby");
const Joi = frisby.Joi;
const apiKey =
  "PMAK-64971fa26777880043d889ca-b8be5bbac39859b203fe12ede2b27feb80";

describe("Day4", () => {
  it("Check status and respose body", function () {
    return frisby
      .post("https://api.getpostman.com/collections", {
        method: "get",
        headers: {
          Accept: "aplication/json",
          "Content-Type": "aplication/json",
          "x-api-key": apiKey,
        },
      })
      .expect("status", 200)
      .expect("jsonTypes", "collections.*", {
        id: Joi.string(),
        name: Joi.string(),
        owner: Joi.string(),
        uid: Joi.string(),
      });
  });
});
