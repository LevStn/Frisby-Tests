const frisby = require("frisby");
const Joi = frisby.Joi;
jest.setTimeout(150000);

describe("Day 8", () => {
  it("Check status 200", async function () {
    const result = frisby
      .get("https://randomuser.me/api")
      .expect("status", 200);
    console.log(result.json);
  });

  it("Check non-empty response with female gender", async function () {
    const result = await frisby
      .get("https://randomuser.me/api/?gender=female")
      .expect("status", 200)
      .expect("jsonTypes", "results.0.gender", Joi.string().valid("female"));
    console.log(result.json);
  });

  it("Gender and nationality check", async function () {
    const result = await frisby
      .get("https://randomuser.me/api/?gender=female&nat=fr")
      .expect("status", 200)
      .expect("jsonTypes", {
        "results.0.gender": Joi.string().valid("female"),
        "results.0.nat": Joi.string().valid("FR"),
      });
    console.log(result.json);
  });
});
