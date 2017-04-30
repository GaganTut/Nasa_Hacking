const showSideBar = (locations, i, map) => {
  let sideNav = document.querySelector("#sidebar");
  let mapDiv = document.querySelector('#map');

  sideNav.innerHTML = "";
  // upon clicking on the markers
  sideNav.style.width = "40%";
  mapDiv.style.width = '60%';
  map.setZoom(10);
  map.setCenter(new google.maps.LatLng(21.47, -157.58));

  // append a closing button with an evnet listener

  closebtn = document.createElement("a");
  closebtn.href = 'javascript:void(0)';
  closebtn.innerHTML = '&times';
  sideNav.appendChild(closebtn);


  closebtn.addEventListener("click", function(){
      sideNav.style.width = "0";
      mapDiv.style.width = '100%';
      map.setZoom(11);
      map.setCenter(new google.maps.LatLng(21.47, -157.91));
  });

  //append the beach name
  beachName =  document.createElement("h1");
  beachName.innerHTML = locations[i][0];
  sideNav.appendChild(beachName);

  //append the links

  //weather

  let weather = document.createElement('div');
  weather.innerHTML = 'Weather';
  let weatherPic = document.createElement('img');
  // weatherPic.setAttribute('src', makeDiv.getImage('Soemthing'));
  let weatherInfo = document.createElement('p');
  weatherInfo.innerHTML = parseJSON.getWeatherInfo('Waikiki Beach');
  weather.appendChild(weatherPic);
  weather.appendChild(weatherInfo);
  sideNav.appendChild(weather);

  //hazards
  let hazards = document.createElement('div');
  hazards.innerHTML = 'Hazards';
  /*let hazardPic = document.createElement('img');
  hazardPic.setAttribute('src', makeDiv.getHazPic('Soemthing'))
  let weatherInfo = document.createElement('p')
  weatherInfo.innerHTML = parseJSON.getWeatherInfo('Something');
  weather.appendChild(weatherPic);
  weather.appendChild(weatherInfo);*/
  sideNav.appendChild(hazards);

  //Ocean
  let ocean = document.createElement('div');
  ocean.innerHTML = 'Ocean'
  sideNav.appendChild(ocean);
}

