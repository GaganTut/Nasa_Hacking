/*jshint esversion: 6*/
const express = require('express');
const path = require('path');
const app = express();
const requestObj = require('./request.js');
const http = require('http');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/alerts.json', (req, res) => {
  /*let alertsJSON = requestObj.makeRequest(requestObj.alerts, 'alerts', (error2) => {*/
    res.sendFile(path.resolve(__dirname, 'alerts.json'));
  //});
});

app.get('/conditions.json', (req, res) => {
  let conditionsJSON = requestObj.makeRequest(requestObj.conditions, 'conditions', (error1) => {
    if (error1) res.send(500, 'This is Error');
    res.sendFile(path.resolve(__dirname, 'conditions.json'));
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(8080, () => {
  console.log('Listening on port 8080.');
});