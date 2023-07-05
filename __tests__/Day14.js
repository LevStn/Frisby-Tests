const frisby = require("frisby");
const TOKEN = api;

describe("Day 14", () => {
  it("Get github repositories", async () => {
    const response = await frisby
      .fetch("https://api.github.com/user/repos", {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .expect("status", 200);
    console.log(response.json.length);
  });
});
