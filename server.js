const express = require('express');
const path = require('path');
const app = express();
const requestObj = require('./request.js');
const http = require('http');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/alerts.json', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'alerts.json'));
});

app.get('/conditions.json', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'conditions.json'));
});

app.get('/', (req, res) => {
  let conditionsJSON = requestObj.makeRequest(requestObj.conditions, 'conditions');

  let alertsJSON = requestObj.makeRequest(requestObj.alerts, 'alerts');

  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(8080, () => {
  console.log('Listening on port 8080.');
});