const frisby = require("frisby");
const Joi = frisby.Joi;
describe("Day3", () => {
  it("Check status and data", function () {
    return frisby
      .post("https://postman-echo.com/post", {
        data: "doodles",
      })
      .expect("status", 200)
      .expect("json", "data", {
        data: "doodles",
      })
      .then((result) => {
        console.log(result.json);
      });
  });
});
