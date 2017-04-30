
const parseJSON = (()=> {

const alerts = $.getJSON('alerts.json', (json)=> {
  return json;
});

const conditions = $.getJSON('conditions.json', (json)=> {
  return json;
});

const beachNames = () =>{
  console.log(JSON.parse(conditions.responseText));
};

const getWeatherInfo = (beachName) =>{

};

// overcast, rain, sunny, cloudy & breezy,

  return {
    beachNames: beachNames,
    getWeatherInfo: getWeatherInfo

  };

})()
