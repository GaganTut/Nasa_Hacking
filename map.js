var locations = [
      ['Waimanalo Beach', 21.33, -157.68],
      ['Waikiki Beach', 21.27, -157.82],
      ['Lanikai Beach', 21.39, -157.71],
      ['Sharks Cove', 21.65, -158.06]
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