const frisby = require("frisby");
const BASE_URL = "https://postman-echo.com";
const API_KEY =
  "PMAK-64971fa26777880043d889ca-b8be5bbac39859b203fe12ede2b27feb80";

describe("Day 20", () => {
  const params = new URLSearchParams({
    collectionUid: "649a21ab8e7e312bfea1e035",
  });
  it("Submit", async () => {
    const response = await frisby
      .setup({
        request: {
          headers: {
            "x-api-key": API_KEY,
          },
        },
      })
      .get(`${BASE_URL}/get?${params}`)
      .expect("status", 200);
    expect(response.json.args.collectionUid.length).toEqual(24);
  });
});
