const frisby = require("frisby");
const TOKEN = "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";

describe("Day 14", () => {
  it("Get github repositories", () => {
    return frisby
      .fetch("https://api.github.com/user/repos", {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .expect("status", 200)
      .then((response) => {
        console.log(response.json.length);
      });
  });
});
