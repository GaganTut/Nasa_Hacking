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

const getWeatherInfo = (beachName) =>{

};

// overcast, rain, sunny, cloudy & breezy,

  return {
    beachNames: beachNames,
    getWeatherInfo: getWeatherInfo

  };

})();
