
let httpRequest;

function makeRequest() {
  httpRequest = new XMLHttpRequest();

  if(!httpRequest) {
    alert('Cannot create XMLHttpRequest');
    return false;
  }

  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', 'http://www.hawaiibeachsafety.com/rest/conditions.json');
  httpRequest.send();
}

function alertContents() {
  try {
    if(httpRequest.readyState === XMLHttpRequest.DONE) {
      if(httpRequest.status === 200) {
        console.log(httpRequest.responseText);
      } else {
        alert('There was a problem with the request');
      }
    }
  } catch(e) {
    alert('Caught Exception: ' + e.description);
  }
}

makeRequest();