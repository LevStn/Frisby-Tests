const frisby = require("frisby");
const currency = "USD";

describe("Day 5", () => {
  it("Check currency", async function () {
    const result = await frisby
      .get(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
      .expect("status", 200);
    console.log(result.body);
  });
});
