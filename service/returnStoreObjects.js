const { compareDistance } = require("../utils/compareDistance");

const returnStoreObject = async (item, currentLocation, brand) => {
  let temp_obj = {
    Branch: [],
    Location: [],
    Latitude: [],
    Longitude: [],
    StoreName: undefined,
    Discount_rate: undefined,
  };

  const cursor = brand.find({});

  await cursor.forEach((data) => {
    if (compareDistance(data.Latitude, data.Longitude, currentLocation)) {
      temp_obj.Branch.push(data.Branch);
      temp_obj.Location.push(data.Location);
      temp_obj.Latitude.push(data.Latitude);
      temp_obj.Longitude.push(data.Longitude);
    }
  });
  temp_obj.StoreName = item[0].toUpperCase();
  temp_obj.Discount_rate = item[1];

  // console.log(temp_obj);

  return temp_obj;
};

module.exports = { returnStoreObject };
