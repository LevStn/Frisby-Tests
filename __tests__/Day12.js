const { API_KEY_TEST } = require("../Properties");
const COLLECTIONU_ID = "27982648-129f4e67-3670-4a69-8b62-353db4c90852";
const ENVIRONMENT_ID = "27982648-0175fa67-e2ad-41a8-97c3-84429d03af59";
const WORKSPACE_ID = "ed19f89a-e9b9-428f-bbcf-6c2b6fce0026";
const BASE_URL = "https://postman-echo.com";

const frisby = require("frisby");

describe("Day 12", () => {
  it("Submit", async () => {
    const response = await frisby
      .setup({
        request: {
          headers: {
            "x-api-key": API_KEY_TEST,
          },
        },
      })
      .post(`${BASE_URL}/post`, {
        collectionId: COLLECTIONU_ID,
        environmentId: ENVIRONMENT_ID,
        workspaceId: WORKSPACE_ID,
      })
      .expect("status", 200)
      .expect("json", "data", {
        collectionId: COLLECTIONU_ID,
        environmentId: ENVIRONMENT_ID,
        workspaceId: WORKSPACE_ID,
      });
  });
});
