/*jshint esversion: 6*/
const parseJSON = (()=> {

const beachNames = (cb) =>{
  $.getJSON('conditions.json', (json)=> {
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
  $.getJSON('conditions.json', (json) => {
    let index = json.map(function(x){return x.beach;}).indexOf(beachName);
    weather = json[index].weather + ' ' + json[index].temp + '&#8457;';
    cb(element, weather);
  });
};

const getWeatherPic = (beachName, cb, element) => {
  $.getJSON('conditions.json', (json) => {
    let index = json.map(function(x){return x.beach;}).indexOf(beachName);
    switch (json[index].weather) {
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
    }
  });
};

// overcast, rain, sunny, cloudy & breezy,

  return {
    beachNames,
    getWeatherInfo,
    getWeatherPic

  };

})();
