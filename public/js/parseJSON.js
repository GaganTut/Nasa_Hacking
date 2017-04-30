/*jshint esversion: 6*/
const parseJSON = (()=> {

const beachNames = (cb) =>{
  $.getJSON('conditions.json', (json)=> {
    let locations = [];
    for(let k in json) {
      locations.push([json[k].beach, json[k].lat, json[k].lon]);
    }
    cb(locations);
  });
};

const getWeatherInfo = (beachName, cb, element) => {
  $.getJSON('conditions.json', (json) => {
    let index = json.map(function(x){return x.beach;}).indexOf(beachName);
    weather = json[index].weather;
    cb(element, weather);
  });
};

// overcast, rain, sunny, cloudy & breezy,

  return {
    beachNames: beachNames,
    getWeatherInfo: getWeatherInfo

  };

})();
