const BASE_URL = "https://postman-echo.com";
const frisby = require("frisby");

describe("Day 2", () => {
  it("Post raw text", async () => {
    const result = await frisby.post(`${BASE_URL}/post`)
    .expect("status", 200);
  });

  it("Get with query params", async () => {
    const params = new URLSearchParams({ number: 1, value: "start" });
    const result = await frisby
      .get(`${BASE_URL}/get?${params}`)
      .expect("status", 200)
      .expect("json", "args", { number: "1", value: "start" });
  });
});
