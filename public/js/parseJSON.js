
const parseJSON = (()=> {



const beachNames = (cb) =>{
  console.log('herreee');
  console.log($);
  $.getJSON('conditions.json', (json)=> {
    console.log(json);
    cb();
  });
};

const getWeatherInfo = (beachName) =>{

};

// overcast, rain, sunny, cloudy & breezy,

  return {
    beachNames: beachNames,
    getWeatherInfo: getWeatherInfo

  };

})()
