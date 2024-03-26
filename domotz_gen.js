const converter = require('widdershins');
const fs = require('fs');
const fetch = require('node-fetch');
const childProcess = require('child_process');
// const apiDefBaseUrl = 'https://api-testing-eu-central-1-cell-1.domotz.nl';
const apiDefBaseUrl = 'https://api-staging-eu-central-1-cell-1.domotz.co';
// const apiDefBaseUrl = 'https://api.domotz.de';
//const apiDefBaseUrl = 'http://172.17.0.1:8888';
// const apiDefBaseUrl = 'http://192.168.77.5:8888';

var stringify = require('json-stable-stringify');
const tmpFile = '/tmp/domotz_api.json';

const command = `curl ${apiDefBaseUrl}/public-api/v1/meta/open-api-definition > ${tmpFile} && swagger-cli validate ${tmpFile}`;
console.log(`Executing command ${command}`);

let validationError = false;

try {
  childProcess.execSync(command);
} catch (e) {
  validationError = true;
}
let apiDefDocUrl = '{baseURL}'

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
options.language_tabs = [
  {"shell": "Curl"},
  {"javascript": "JavaScript"},
  {"javascript--nodejs": "Node.JS"},
  {"python": "Python"},
  {"ruby": "Ruby"},
  {"go": "Go"}
];

fetch(`${apiDefBaseUrl}/public-api/v1/meta/open-api-definition`, {method: 'GET',})
  .then(function (res) {
    res.json().then(function (s) {
      let data = JSON.parse(stringify(s).replace(apiDefBaseUrl, apiDefDocUrl));
      converter.convert(data, options, function (err, str) {
        fs.writeFileSync("source/index.html.md", str);
        if (validationError) {
          console.log("\n!!! Warning, open API 3 validation failed, see above for more information\n");
        } else {
          console.log("\nOpen API 3 validation successful\n");
        }
      });
    });
  }).catch(function (err) {
  console.log("error getting open api definition " + err.toString());
});

