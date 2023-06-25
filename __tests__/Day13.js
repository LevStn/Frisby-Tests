const frisby = require("frisby");
const Joi = frisby.Joi;

describe("Day 13", () => {
  it("Planets check includes Tatooine", () => {
    return frisby
      .get("https://swapi.dev/api/planets/")
      .expect("status", 200)
      .expect("jsonTypes", "count", Joi.number())
      .expect("bodyContains", "Tatooine");
  });

  it("Body contains Ewokese language and average talls", () => {
    return frisby
      .get("https://swapi.dev/api/species/")
      .expect("status", 200)
      .expect("bodyContains", "Ewokese")
      .then((response) => {
        const jsonResponse = response.json;
        const tallSpecies = jsonResponse.results.filter(
          (species) => parseInt(species.average_height) > 100
        );
        console.log(
          "Number of species with average height > 100 on the first page: " +
            tallSpecies.length
        );
      });
  });
});