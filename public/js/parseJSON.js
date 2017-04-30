/*jshint esversion: 6*/
const parseJSON = (()=> {

const beachNames = (cb) =>{
  $.getJSON('conditions.json', (json)=> {
    let locations = [];
    for(let k in json) {
      locations.push([json[k].beach, json[k].lat, json[k].lon]);
    }
    console.log(json);
    cb(locations);
  });
};

const getWeatherInfo = (beachName, cb) =>{
    $.getJSON('conditions.json', (json)=> {
    let index = json.map(function(x){return x.beach;}).indexOf(beachName);
    let weather = json[index].weather;
    cb(weather);
  });
};

// overcast, rain, sunny, cloudy & breezy,

  return {
    beachNames: beachNames,
    getWeatherInfo: getWeatherInfo

  };

})();
