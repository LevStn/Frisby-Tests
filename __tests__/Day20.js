const frisby = require("frisby");
const COLLECTIONU_UID = "27982648-0353d770-45bd-4cf3-90b8-5bdff8e15dd7";
const BASE_URL = "https://api.getpostman.com/collections";
const API_KEY =
  "PMAK-64971fa26777880043d889ca-b8be5bbac39859b203fe12ede2b27feb80";

describe("Day 20", () => {
  it("Submit", async () => {
    const response = await frisby
      .setup({
        request: {
          headers: {
            "x-api-key": API_KEY,
          },
        },
      })
      .get(`${BASE_URL}/${COLLECTIONU_UID}`)
      .expect("status", 200);
    const collection = response.json.collection;
    const firstRequest = collection.item[0].item[0];

    expect(collection.info.name).toEqual("Day 20: Documentation");
    expect(firstRequest.request.description).not.toEqual("");
    expect(firstRequest.request.url.query).not.toEqual("");
    expect(firstRequest.request.header).not.toEqual("");
  });
});
