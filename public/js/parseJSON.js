/*jshint esversion: 6*/
const parseJSON = (()=> {

let conditions;
let alerts;

const loadAlerts = (cb) =>{
  $.getJSON('alerts.json', (json)=> {
    alerts = json;
    cb();
  });
};

const beachNames = (cb) =>{
  $.getJSON('conditions.json', (json)=> {
    conditions = json;
    let locations = [];
    for(let k in json) {
      if (json[k].island === 'Oahu') {
        locations.push([json[k].beach, json[k].lat, json[k].lon]);
      }
    }
    cb(locations);
  });
};

const getWeatherInfo = (beachName, cb, element) => {
  let index = conditions.map(function(x){return x.beach;}).indexOf(beachName);
  weather = conditions[index].weather + ' ' + conditions[index].temp + '&#8457;';
  cb(element, weather);
};

const getWeatherPic = (beachName, cb, element) => {
    let index = conditions.map(function(x){return x.beach;}).indexOf(beachName);
    switch (conditions[index].weather) {
      case 'A Few Clouds':
        cb(element, 'public/assets/sunny.jpg');
        break;
      case 'Mostly Cloudy':
        cb(element, 'public/assets/sunny.jpg');
        break;
      case 'Rain Fog/Mist':
        cb(element, 'public/assets/sunny.jpg');
        break;
      case 'Light Rain':
        cb(element, 'public/assets/sunny.jpg');
        break;
      case 'Overcast':
        cb(element, 'public/assets/sunny.jpg');
        break;
      default:
        cb(element, 'public/assets/sunny.jpg');
        break;
    }
};

const getHazInfo = (beachName, cb, element) => {
  $.getJSON('conditions.json', (json) => {
    let index = json.map(function(x){return x.beach;}).indexOf(beachName);
    let info = json[index].description;
    cb(element, info);
  });
};

// overcast, rain, sunny, cloudy & breezy,

  return {
    beachNames,
    getWeatherInfo,
    getWeatherPic,
    getHazInfo

  };

})();
