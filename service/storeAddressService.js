const { returnBrandList } = require("../database/returnMembershipBrandObject");
const { returnStoreObject } = require("./returnStoreObjects");
const { mongoClient } = require("../database/mongodbConnection");

// 비지니스 로직 처리?
const storeAddressService = async (latitude, longitude, category, carrier, rate) => {
  let client = mongoClient();

  let storeObj = {};
  let res_arr = [];

  let currentLocation = {
    Latitude: latitude,
    Longitude: longitude,
  };

  let descBrand = returnBrandList(category, carrier, rate);

  try {
    const database = client.db("capstone");

    for (let item of descBrand) {
      const brand = database.collection(item[0].toLowerCase());

      storeObj = await returnStoreObject(item, currentLocation, brand);
      if (storeObj?.Latitude.length || storeObj?.Longitude.length) {
        res_arr.push(storeObj);
      }
    }
    return res_arr;
  } catch (error) {
    console.dir(error);
  } finally {
    await client.close();
  }
};

module.exports = { storeAddressService };
