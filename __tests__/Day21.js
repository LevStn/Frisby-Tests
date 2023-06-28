const { API_KEY_TEST } = require("../Properties");
const BASE_URL = "https://postman-echo.com";

const frisby = require("frisby");

describe("Day 21", () => {
  const params = new URLSearchParams({
    collectionUid: "649a21ab8e7e312bfea1e035",
  });
  it("Submit", async () => {
    const response = await frisby
      .setup({
        request: {
          headers: {
            "x-api-key": API_KEY_TEST,
          },
        },
      })
      .get(`${BASE_URL}/get?${params}`)
      .expect("status", 200);
    expect(response.json.args.collectionUid.length).toEqual(24);
  });
});
