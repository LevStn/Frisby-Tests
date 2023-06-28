const frisby = require("frisby");

describe("Day 11", () => {
  it("Check status", () => {
    return frisby
      .get("https://water-ttl.herokuapp.com/hygrometer")
      .expect("status", 200);
  });

  it("Plant watering method", async () => {
    const response = await frisby
      .get("https://water-ttl.herokuapp.com/hygrometer")
      .expect("status", 200);
    console.log("Level:" + response.json.level);

    if (response.json.level < 60) {
      let amount = 99 - parseInt(response.json.level);
      const queryWater = await frisby
        .post("https://water-ttl.herokuapp.com/water", {
          duration: amount,
        })
        .expect("status", 200);
      console.log("Watered");
      const responseAfterWatering = await frisby
        .get("https://water-ttl.herokuapp.com/hygrometer")
        .expect("status", 200);
      console.log("New level:" + responseAfterWatering.json.level);
    } else {
      console.log("Not neededed");
    }
  });
});
