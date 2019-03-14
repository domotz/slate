const converter = require('widdershins');
const fs = require('fs');
const fetch = require('node-fetch');
const apiDefBaseUrl = 'api-staging-eu-central-1-cell-1.domotz.co';
const apiDefDocUrl = 'your-domotz-api-endpoint';
var stringify = require('json-stable-stringify');


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

fetch(`http://${apiDefBaseUrl}/public-api/v1/meta/open-api-definition`, {method: 'GET',})
  .then(function (res) {
    res.json().then(function (s) {
      let data = JSON.parse(stringify(s).replace('https://' + apiDefBaseUrl, apiDefDocUrl));
      converter.convert(data, options, function (err, str) {
        fs.writeFileSync("source/index.html.md", str);
      });
    });
  }).catch(function (err) {
  console.log("error getting open api definition " + err.toString());
});
