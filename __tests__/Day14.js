const frisby = require("frisby");
const Joi = frisby.Joi;
const token = "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";

describe("Day 14", () => {
  it("Get github repositories", () => {
    return frisby
      .fetch("https://api.github.com/user/repos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .expect("status", 200)
      .then((response) => {
        console.log(response.json.length);
      });
  });
});
