const frisby = require("frisby");
const params = new URLSearchParams({ count: 10, api_key: "DEMO_KEY" });

jest.setTimeout(10000);

describe("Day7", () => {
  it("Check status 200", function () {
    return frisby
      .get(`https://api.nasa.gov/planetary/apod?${params}`)
      .expect("status", 200)
      .then((result) => {
        console.log(result.json);
      });
  });

  it("Check status 403", function () {
    return frisby
      .get("https://api.nasa.gov/planetary/apod?")
      .expect("status", 403);
  });
});
