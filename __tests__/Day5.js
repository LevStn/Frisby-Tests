const frisby = require("frisby");
const currensy = "usd";

describe("Day5", () => {
  it("Check status", function () {
    return frisby
      .get(`https://api.coindesk.com/v1/bpi/currentprice/${currensy}.json`)
      .expect("status", 200)
      .then((result) => {
        console.log(result.body);
      });
  });
});
