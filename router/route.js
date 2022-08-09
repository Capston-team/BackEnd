const app = require("express");
const router = app.Router();
const { storeAddressService } = require("../service/storeAddressService");

router.get("/store-address", async (req, res, next) => {
  let t0 = performance.now();

  try {
    let storeList = await storeAddressService(
      req.query.latitude,
      req.query.longitude,
      req.query.category,
      req.query.carrier,
      req.query.rate
    );
    res.status(200).send(storeList);
  } catch (e) {
    console.error("Failed Connection to Android Retrofit : router.js \n" + e);
    res.status(500).send({
      message: "error response",
    });
  }

  let t1 = performance.now();
  console.log("전체 수행시간 : " + (t1 - t0) + " milliseconds.");
  console.log("\n");
});

module.exports = router;
