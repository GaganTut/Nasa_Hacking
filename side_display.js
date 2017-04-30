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

  var weather = document.createElement('ul');
  weather.innerHTML = 'Weather';
  sideNav.appendChild(weather);

  //hazards
  var hazards = document.createElement('ul');
  hazards.innerHTML = 'Hazards'
  sideNav.appendChild(hazards);

  //Ocean
  var ocean = document.createElement('ul');
  ocean.innerHTML = 'Ocean'
  sideNav.appendChild(ocean);
}

