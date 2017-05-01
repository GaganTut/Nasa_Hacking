/*jshint esversion: 6*/
const createMap = (locations) => {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: new google.maps.LatLng(20.5, -157.0),
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

  const createWarnings = (warnings) => {
    let mapWarnings = document.querySelector('#mapWarnings');
    let listOfWarnings = document.createElement('div');
    listOfWarnings.id = "warningSign";

    var x = document.createElement("table");
    x.id = "myTable";

    th = document.createElement('th');
    th.innerHTML = "List of Warnings";
    x.appendChild(th);

    for (let i = 0; i < warnings.length; i++){
      let thisWarning = warnings[i].split('<br>');
      for (let j = 0; j < thisWarning.length; j++) {
        var y = document.createElement("tr");
        y.id = "myTr";
        let newString = thisWarning[j].replace(/[...&#42;]/g, ' ');
        y.innerHTML = newString;
        x.appendChild(y);
      }
    }

    listOfWarnings.appendChild(x);
    mapWarnings.appendChild(listOfWarnings);
  };


  $(document).ready(function() {
    parseJSON.loadAlerts(createWarnings);
  });

};
$(document).ready(function() {
  parseJSON.beachNames(createMap);
});