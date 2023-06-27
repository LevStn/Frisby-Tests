const frisby = require('frisby');
const BASE_URL = 'https://postman-echo.com';

describe("Day2", () => {
  it("Post raw text", async () => {
    const result = await frisby.post(`${BASE_URL}/post`)
      .expect("status", 200);
  });

  it("Get with query params", async () => {
    const result = await frisby.get(`${BASE_URL}/get?number=1&value=start`)
      .expect("status", 200)
      .expect("json", "args", {"number": "1", "value": "start" });
  });
});