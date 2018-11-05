const converter = require('widdershins');
const fs = require('fs');
const fetch = require('node-fetch');
const apiDefBaseUrl = 'api-eu-west-1-cell-1.domotz.com';
const apiDefDocUrl = 'your-domotz-api-endpoint';

let options = {};
options.user_templates = './domotz_templates';
options.templateCallback = function (templateName, stage, data) {
  return data
};
options.theme = 'darkula';
options.search = true;
options.codeSamples = true;
options.templateCallback = function (templateName, stage, data) {
  return data
};
options.sample = true; // set false by --raw
options.language_tabs = [{ "shell": "Curl" },{ "javascript": "JavaScript" }, { "javascript--nodejs": "Node.JS" }, { "python": "Python" }, { "ruby": "Ruby" }, { "go": "Go" }];


fetch(`https://${apiDefBaseUrl}/public-api/v1/meta/open-api-definition`, {method: 'GET',})
  .then(function (res) {
    res.json().then(function (s) {
      let data = JSON.parse(JSON.stringify(s).replace('https://' + apiDefBaseUrl, apiDefDocUrl));
      converter.convert(data, options, function (err, str) {
        fs.writeFileSync("source/index.html.md", str);
      });
    });
  });
