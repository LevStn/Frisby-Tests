const frisby = require("frisby");

jest.setTimeout(15000);

describe("Day 7", () => {
  const params = new URLSearchParams({ api_key: "DEMO_KEY", count: 10 });

  it("Check status 200", function () {
    return frisby
      .get(`https://api.nasa.gov/planetary/apod?${params}`)
      .expect("status", 200)
      .then((response) => {
        const filteredResponse = response.json.map((item) => ({
          title: item.title,
          url: item.url,
        }));
        console.log(filteredResponse);
      });
  });

  it("Check status 403", function () {
    return frisby
      .get("https://api.nasa.gov/planetary/apod?")
      .expect("status", 403);
  });
});
