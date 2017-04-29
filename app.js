/*jshint esversion: 6*/
const longInp = document.querySelector('#longInp');
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
})