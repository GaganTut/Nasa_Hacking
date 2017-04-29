/*jshint esversion: 6*/
/*const longInp = document.querySelector('#longInp');
const latImp = document.querySelector('#latImp');
const dimImp = document.querySelector('#dimImp');
const dateImp = document.querySelector('#dateImp');
const buttonImp = document.querySelector('#buttonImp');
const picDiv = document.querySelector('#forData');

function createRequest(apiLink, eventListener) {
  const dataReq = new XMLHttpRequest();
  dataReq.addEventListener('load', eventListener);
  dataReq.open('GET', apiLink);
  dataReq.send();
}

function codeRequest() {
  let codeData = JSON.parse(this.responseText);
  displayData(codeData);
}

function displayData(data) {
  console.log(data);
  let picImage = document.createElement('img');
  picImage.setAttribute('src', data.url);
  picImage.style.width = '100px';
  picDiv.appendChild(picImage);
}


buttonImp.addEventListener('click', () => {
  createRequest(`https://api.nasa.gov/planetary/earth/imagery?lon=-150.75&lat=20.0&api_key=KWqHmU37tM4zZQvurPM7mRbwfDZthvCCLhc40XyZ`, codeRequest);
})*/

var locations = [
      ['Waimanalo Beach', 21.33, -157.68],
      ['Waikiki Beach', 21.27, -157.82],
      ['Lanikai Beach', 21.39, -157.71]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(21.43, -158.00),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }