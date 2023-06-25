const frisby = require("frisby");
const Joi = frisby.Joi;

jest.setTimeout(10000);

describe("Day8", () => {
  it("Check status 200", function () {
    return frisby
      .get("https://randomuser.me/api")
      .expect("status", 200)
      .then((result) => {
        console.log(result.json);
      });
  });

  it("Check non-empty response with female gender", function () {
    return frisby
      .get("https://randomuser.me/api/?gender=female")
      .expect("status", 200)
      .then((response) => {
        console.log(response.json);
      })
      .expect("jsonTypes", "results.0.gender", Joi.string().valid("female"));
  });

  it("Gender and nationality check", function () {
    return frisby
      .get("https://randomuser.me/api/?gender=female&nat=fr")
      .expect("status", 200)
      .then((response) => {
        console.log(response.json);
      })
      .expect("jsonTypes", {
        "results.0.gender": Joi.string().valid("female"),
        "results.0.nat": Joi.string().valid("FR"),
      });
  });
});
