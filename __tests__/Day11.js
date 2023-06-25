const frisby = require("frisby");

describe("Day 11", () => {
  it("Check status", () => {
    return frisby
      .get("https://water-ttl.herokuapp.com/hygrometer")
      .expect("status", 200);
  });

  it("Plant watering method", () => {
    return frisby
      .get("https://water-ttl.herokuapp.com/hygrometer")
      .expect("status", 200)
      .then((result) => {
        console.log("Level:" + result.json.level);
        if (result.json.level < 60) {
          return frisby
            .post("https://water-ttl.herokuapp.com/water", {
              duration: 10,
            })
            .then(() => {
              console.log("Watered");
              return frisby
                .get("https://water-ttl.herokuapp.com/hygrometer")
                .then((result) => {
                  console.log("Level:" + result.json.level);
                });
            });
        } else {
          console.log("Not neededed");
        }
      });
  });
});
