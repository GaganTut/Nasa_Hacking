//Warnings

const createWarnings = (warnings) => {
  let listOfWarnings = document.createElement('div');
  let map = document.querySelector('#map');
  listOfWarnings.innerHTML = warnings.join(" ");
  listOfWarnings.id = "warningSign";

  map.appendChild(listOfWarnings);
};

$(document).ready(function() {
  parseJSON.loadAlerts(createWarnings);
});