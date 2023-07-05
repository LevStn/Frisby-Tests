const URL = "https://google.com";
const frisby = require("frisby");

describe("Day 28", () => {
  it("Response time", async () => {
    const response = await frisby.get(URL).expect("status", 200);

    if (response._responseTimeMs < 1000) {
      console.log("Response time is less than 1000ms. Test passed!");
    } else {
      console.log(
        "Response time is greater than or equal to 1000ms. Test failed!"
      );
    }
  });

  it("Lighthouse", async () => {
    const response = await frisby
      .get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL}`
      )
      .expect("status", 200);
    const performanceScore =
      response.json.lighthouseResult["categories"].performance.score * 100;

    console.log("Lighthouse Performance Score:", performanceScore);

    if (performanceScore >= 90 && performanceScore <= 100) {
      console.log(
        "Lighthouse Performance Score is between 90 and 100. Test passed!"
      );
    } else {
      console.log(
        "Lighthouse Performance Score is not between 90 and 100. Test failed!"
      );
    }
  }, 30000);
});
