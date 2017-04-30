const showSideBar = (locations, i) => {
  let sideNav = document.querySelector("#sidebar");

  sideNav.innerHTML = "";

  // upon clicking on the markers
  sideNav.style.width = "250px";

  // append a closing button with an evnet listener

  closebtn = document.createElement("a");
  closebtn.href = 'javascript:void(0)';
  closebtn.innerHTML = '&times';
  sideNav.appendChild(closebtn);


  closebtn.addEventListener("click", function(){
      sideNav.style.width = "0";
  });

  //append the beach name
  beachName =  document.createElement("h2");
  beachName.innerHTML = locations[i][0];
  sideNav.appendChild(beachName);

  //append the links

  //weather
  var weather = document.createElement('h3');
  weather.innerHTML = 'Weather';
  sideNav.appendChild(weather);

  //hazards
  var hazards = document.createElement('h3');
  hazards.innerHTML = 'Hazards'
  sideNav.appendChild(hazards);

  //Ocean
  var ocean = document.createElement('h3');
  ocean.innerHTML = 'Ocean'
  sideNav.appendChild(ocean);
}

