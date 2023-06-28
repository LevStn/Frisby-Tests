const { API_KEY_TEST } = require("../Properties");
const API_ID = "789cc02b-3dd5-4ff9-9421-d60608dd31e8";
const URL = "https://api.getpostman.com/apis";

const frisby = require("frisby");

describe("Day 18", () => {
  it("Submit API", async () => {
    const result = await frisby
      .setup({
        request: {
          headers: {
            "x-api-key": API_KEY_TEST,
          },
        },
      })
      .get(`${URL}/${API_ID}`)
      .expect("status", 200);

    expect(result.json.api.name).toEqual("Cosmos");
  });
});
