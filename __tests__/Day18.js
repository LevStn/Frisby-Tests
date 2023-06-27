const frisby = require("frisby");
const API_ID = "a6fbdaf6-3eac-49c6-8c2b-27a1d22e4e60";
const URL = "https://api.getpostman.com/apis";
const API_KEY =
  "PMAK-64971fa26777880043d889ca-b8be5bbac39859b203fe12ede2b27feb80";

describe("Day 18", () => {
  it("Submit API", async () => {
    const result = await frisby
      .setup({
        request: {
          headers: {
            "x-api-key": API_KEY,
          },
        },
      })
      .get(`${URL}/${API_ID}`)
      .expect("status", 200);

    expect(result.json.api.name).toEqual("Cosmos");
  });
});
