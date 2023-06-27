const frisby = require("frisby");

describe("Day 19", () => {
  it("Get Artist Information", async () => {
    const query = `query getByArtist($name: String!) {
      queryArtists(byName: $name) {
          name
          image
          albums {
              name
          }
      }
    }`;

    const variables = {
      name: "Britney Spears",
    };

    const response = await frisby
      .post("https://joyce-spotify-graphql.herokuapp.com/graphql", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      })
      .expect("status", 200);
    console.log(response.json.data);
  });
});
