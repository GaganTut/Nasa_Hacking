const beachList = data[0].beachList;
const locations = [];

for (let k in beachList) {
  let locationArr = [beachList[k].name, beachList[k].coords.lat, beachList[k].coords.long]
  locations.push(locationArr);
}


var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 11,
  center: new google.maps.LatLng(21.47, -157.97),
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
      showSideBar(locations, i);
    };
  })(marker, i));
}