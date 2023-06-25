const frisby = require("frisby");
const Joi = frisby.Joi;
describe("Day1", () => {
  it("Check status and message", function () {
    return frisby
      .post("https://postman-echo.com/post", {
        payload: "hello world",
      })
      .expect("status", 200)
      .expect("json", "data", {
        payload: "hello world",
      })
      .then((result) => {
        console.log(result.json);
      });
  });
});
