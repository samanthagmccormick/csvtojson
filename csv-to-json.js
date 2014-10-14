var fs = require('fs');
var _ = require('underscore');

var inputFile = process.argv[2];
var outputFile = process.argv[3];

var keys;
var data = [];
var newObject = [];

// Read in your file
var fileContent = fs.readFileSync('input.csv', 'utf-8');
console.log('fileContent: ', fileContent);

// Split the file content by endline
fileContent = fileContent.split('\n');
console.log('filecontent split: ', fileContent);

// KEYS
// Split the first line of fileContent by ',' and store in variable keys
keys = fileContent[0].split(',');

// DATA
// Split the rest of the fileContent lines by ',', and store in variable data
for(var i = 1; i < fileContent.length; i++) {
	data.push(fileContent[i].split(','));
}

console.log('keys: ', keys);
console.log('data: ', data);

// Loop through data and create new object (newObject) using your KEYS array
for (var i = 0; i < data.length; i++) {
	newObject.push(_.object(keys, data[i]));
}

// Convert the newObject to a string
var retrieved = JSON.stringify(newObject);
console.log(retrieved);

// Write your new JSON content to the outputFile (process.argv[3])
fs.writeFileSync(outputFile, retrieved);