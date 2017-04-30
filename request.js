const http = require('http');
const fs = require('fs');
const conditions = 'http://www.hawaiibeachsafety.com/rest/conditions.json';
const alerts = 'http://www.hawaiibeachsafety.com/rest/alerts.json';


function makeRequest(url, name, cb) {
  http.get(url, (res) => {
    const { statusCode } = res;

    let error;
    if (statusCode !== 200) {
      error = new Error(`Request Failed.\n` +
                        `Status Code: ${statusCode}`);
    }
    if (error) {
      console.error(error.message);
      // consume response data to free up memory
      res.resume();
      return;
    }

    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        fs.writeFile(name + '.json', rawData, (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
          cb();
        });
      } catch (e) {
        console.error(e.message);
      }
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
      cb(e);
    });
  });
}

module.exports = {
  makeRequest,
  conditions,
  alerts
};