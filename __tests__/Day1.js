const frisby = require("frisby");

describe("Day 1", () => {
  it("Check status and message", async function () {
    const echoResult = await frisby
      .post("https://postman-echo.com/post", {
        payload: "hello world",
      })
      .expect("status", 200)
      .expect("json", "data", {
        payload: "hello world",
      });
    console.log(echoResult.json);
  });
});
