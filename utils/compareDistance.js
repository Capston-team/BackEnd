const { distanceCalculate } = require("./distanceCalculation");

// 500M 안에 있는 Branch, Location, Latitude, Longitude 객체 return
// 아직 null처리는 하지않음
function compareDistance(Latitude, Longitude, currentLocation) {
  // 500M 이내에 있다면 true 반환

  if (distanceCalculate(Latitude, Longitude, currentLocation.Latitude, currentLocation.Longitude) <= 0.5) {
    // console.log(distanceCalculate(Latitude, Longitude, currentLocation.Latitude, currentLocation.Longitude));
    return true;
  }
  return false;
}

module.exports = { compareDistance };
