function returnBrandList(category, carrier, rate) {
  let t0 = performance.now();

  const fs = require("fs");

  const brandObj = new Object();

  const jsonFile = fs.readFileSync("./STORELIST/brand_Discount_rate.json", "utf-8");
  const jsonData = JSON.parse(jsonFile);

  let brands = jsonData[`${carrier}_${category}`];

  for (let key in brands) {
    brandObj[key] = brands[key][rate];
  }

  // 할인율 정렬
  // CONV - CU : 20  GS25 : 10
  let sorted_ranking = Object.entries(brandObj).sort((a, b) => b[1] - a[1]);

  let t1 = performance.now();
  console.log("get Carrier time " + (t1 - t0) + " milliseconds.");
  console.log("\n");

  return sorted_ranking;
}

module.exports = { returnBrandList };
