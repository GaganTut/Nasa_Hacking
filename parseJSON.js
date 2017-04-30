const parseJSON = (()=> {

  const getWeatherInfo = (beachName) =>{

    console.log(data[0].beachList.map(function(x){return x.name;}));
    const indexBeach = data[0].beachList.map(function(x){return x.name;}).indexOf(beachName);
    console.log(indexBeach);
  };

// overcast, rain, sunny, cloudy & breezy,

  return {
    getWeatherInfo: getWeatherInfo

  };

})()