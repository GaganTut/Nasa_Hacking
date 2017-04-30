/*jshint esversion: 6*/
const createMap = (locations) => {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: new google.maps.LatLng(21.47, -157.91),
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
        showSideBar(locations, i, map);
      };
    })(marker, i));

    google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
         google.maps.event.addListener(marker, 'mouseout', function(event) {
             infowindow.close();
        });
      };
    })(marker, i));
  }
};
$(document).ready(function() {
  parseJSON.beachNames(createMap);
});