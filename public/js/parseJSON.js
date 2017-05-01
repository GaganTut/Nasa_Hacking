/*jshint esversion: 6*/
const parseJSON = (()=> {

let conditions;
let alerts;

const loadAlerts = (cb) =>{
  $.getJSON('alerts.json', (json)=> {
    alerts = json;
    let arrayAlert = [];
    for(let k in alerts) {
      if(arrayAlert.indexOf(alerts[k].alert) === -1){
        arrayAlert.push(alerts[k].alert);
      }
    }
    cb(arrayAlert);
  });
};

const beachNames = (cb) =>{
  $.getJSON('conditions.json', (json)=> {
    conditions = json;
    let locations = [];
    for(let k in json) {
      //if (json[k].island === 'Oahu') {
        locations.push([json[k].beach, json[k].lat, json[k].lon]);
      //}
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
        cb(element, 'public/assets/overcast.png');
        break;
      case 'Rain Fog/Mist':
        cb(element, 'public/assets/rainy.png');
        break;
      case 'Light Rain':
        cb(element, 'public/assets/rainy.png');
        break;
      case 'Overcast':
        cb(element, 'public/assets/overcast.png');
        break;
      default:
        cb(element, 'public/assets/sunny.jpg');
        break;
    }
};

const getHazInfo = (beachName, cb, element) => {
  let index = conditions.map(function(x){return x.beach;}).indexOf(beachName);
  let info = conditions[index].description;
  cb(element, info);
};

// overcast, rain, sunny, cloudy & breezy,

  return {
    loadAlerts,
    beachNames,
    getWeatherInfo,
    getWeatherPic,
    getHazInfo

  };

})();
