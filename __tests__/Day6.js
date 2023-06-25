const frisby = require("frisby");
const Joi = frisby.Joi;

describe("Day6", () => {
  it("Check response body", function () {
    return frisby
      .get("https://api.chucknorris.io/jokes/random")
      .expect("status", 200)
      .then((response) => {
        console.log(response.json);
      })
      .expect("jsonTypes", {
        categories: Joi.array(),
        icon_url: Joi.string().uri(),
        url: Joi.string().uri(),
        value: Joi.string(),
      });
  });
});
