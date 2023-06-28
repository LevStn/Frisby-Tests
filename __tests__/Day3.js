const frisby = require("frisby");

describe("Day 3", () => {
  it("Check status and data", async function () {
    const echoResult = await frisby
      .post("https://postman-echo.com/post", {
        data: "doodles",
      })
      .expect("status", 200)
      .expect("json", "data", {
        data: "doodles",
      });
    console.log(echoResult.json);
  });
});
