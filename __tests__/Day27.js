const { USERNAME, PASSWORD } = require("../Properties");

const frisby = require("frisby");
const URL = "http://security.postman-breakable.com";

describe("Day 27", () => {
  it("User", async () => {
    const userLogged = await frisby
      .post(`${URL}/user/login`, {
        body: {
          username: "test1213",
          password: "test",
        },
      })
      .expect("status", 200);

    const sessionToken = userLogged.json.response.session_token;
    const userId = userLogged.json.response.user_id;

    const information = await frisby
      .get(`${URL}/user`, {
        headers: {
          "x-api-key": sessionToken,
        },
      })
      .expect("status", 200);

    const summaru = await frisby
      .get(`${URL}/account/${userId}/summary`, {
        headers: {
          "x-api-key": sessionToken,
        },
      })
      .expect("status", 200);

    const logout = await frisby
      .get(`${URL}/user/logout`, {
        headers: {
          "x-api-key": sessionToken,
        },
      })
      .expect("status", 200);

    const withoutToken = await frisby
      .get(`${URL}/account/${userId}/summary`)
      .expect("status", 403);
  });
});
