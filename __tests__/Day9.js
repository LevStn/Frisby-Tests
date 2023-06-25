const frisby = require("frisby");
describe("Day 9", () => {
  it("Check status", function () {
    const gender = "male";
    return frisby
      .post("https://postman-echo.com/post?", {
        name: "Mr Thomas Jones",
        email: "thomas.jones@example.com",
        id: "e7a58de3-2aae-4aad-b324-7178bcadd158",
      })
      .expect("status", 200)
      .then((result) => {
        console.log(result.json);
      });
  });
});
