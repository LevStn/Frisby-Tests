const { API_KEY_TEST } = require("../Properties");
const COLLECTIONU_UID = "27982648-a23d9aa5-b271-4ef8-9c8d-e4230a93f0bc";
const BASE_URL = "https://api.getpostman.com/collections";
const frisby = require("frisby");

describe("Day 10", () => {
  it("Submit", async () => {
    const response = await frisby
      .setup({
        request: {
          headers: {
            "x-api-key": API_KEY_TEST,
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
