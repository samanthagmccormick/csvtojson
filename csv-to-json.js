var fs = require('fs');

var fileContent = fs.readFileSync('input.csv', 'utf-8');

console.log(fileContent);

splitFileContent = fileContent.split('/n').join('\n');

// for (var i = 0; i < splitFileContent.length; i++) {
// 	splitFileContent[i].split(',');
// }

// splitFileContent = splitFileContent.join(' ');
console.log(splitFileContent);

// fs.writeFileSync('output.js', fileContent);