const frisby = require("frisby");
const COLLECTIONU_UID = "27982648-a23d9aa5-b271-4ef8-9c8d-e4230a93f0bc";
const BASE_URL = "https://api.getpostman.com/collections";
const API_KEY =
  "PMAK-64971fa26777880043d889ca-b8be5bbac39859b203fe12ede2b27feb80";

describe("Day 10", () => {
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
    const mockRequest = response.json.collection.item[0].item.find(
      (req) => req.name === "mock call"
    );

    expect(collection.info.name).toEqual("Day 10: Mock services");
    expect(mockRequest.name).toEqual("mock call");
    expect(mockRequest.request.url.raw).toContain("mock.pstmn.io");
  });
});
