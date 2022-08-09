// dist = 1000 ==  1KM    1dist = 100M
// 2000 dist = 2KM   || 2 dist  = 2M  ||  200 dist = 500M
// 195.2 == 195km 200m

// 위도 경도의 거리를 계산하는 함수
// 0.5 == 500M
// 1 == 1KM
function distanceCalculate(lat1, lon1, lat2, lon2) {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  }

  let radLat1 = (Math.PI * lat1) / 180;
  let radLat2 = (Math.PI * lat2) / 180;
  let theta = lon1 - lon2;
  let radTheta = (Math.PI * theta) / 180;
  let dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
  if (dist > 1) dist = 1;

  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515 * 1.609344 * 1000;
  if (dist < 100) dist = Math.round(dist / 10) * 10;
  else dist = Math.round(dist / 100) * 100;

  // console.log(dist);
  return dist / 1000;
}

module.exports = { distanceCalculate };

// 조건에 맞는 값 묶기

// function makeLengthInfo(coordinate, myloc) {
//   if (
//     coordinate.Latitude == myloc.Latitude &&
//     coordinate.Longitude == myloc.Longitude
//   ) {
//     return 0;
//   }
//   let radLat1 = (Math.PI * coordinate.Latitude) / 180;
//   let radLat2 = (Math.PI * myloc.Latitude) / 180;
//   let theta = coordinate.Longitude - myloc.Longitude;
//   let radTheta = (Math.PI * theta) / 180;
//   let dist =
//     Math.sin(radLat1) * Math.sin(radLat2) +
//     Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);

//   if (dist > 1) {
//     dist = 1;
//   }

//   dist = Math.acos(dist);
//   dist = (dist * 180) / Math.PI;
//   dist = dist * 60 * 1.1515 * 1.609344 * 1000;
//   if (dist < 100) dist = Math.round(dist / 10) * 10;
//   else dist = Math.round(dist / 100) * 100;

//   return dist;
// }
