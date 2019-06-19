const fs = require('fs');
const jsYaml = require('js-yaml');

const yamlData = fs.readFileSync('./data.yml', 'utf-8');
const data = jsYaml.safeLoad(yamlData);

fs.writeFile('output.json', JSON.stringify(data, null, '    '))