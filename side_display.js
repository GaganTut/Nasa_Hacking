
let closeButton = document.querySelector(".closebtn");
let sideNav = document.getElementById(".sidenav");

closebtn.addEventListener("click", function(){
  document.getElementById("mySidenav").style.width = "0";
});

// upon clicking on the markers
sideNav.style.width = "250px";

//append the beach name
beachName =  document.createElement("h2");
beachName.innerHTML = locations[i][0];
sideNav.appendChild(beachname);

//append the links

//weather
var weather = document.createElement('a');
var createAText = document.createTextNode(Weather);
weather.setAttribute('href', "jason file");
weather.appendChild(createAText);
sideNav.appendChild(weather);

//hazards
var hazards = document.createElement('a');
var createAText = document.createTextNode(Hazards);
hazards.setAttribute('href', "jason file");
hazards.appendChild(createAText);
sideNav.appendChild(hazards);

//Ocean
var ocean = document.createElement('a');
var createAText = document.createTextNode(Ocean);
ocean.setAttribute('href', "jason file");
ocean.appendChild(createAText);
sideNav.appendChild("ocean");


