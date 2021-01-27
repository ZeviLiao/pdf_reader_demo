
const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync(path.resolve(__dirname, './pdf/samplepptx2.pdf'));

pdf(dataBuffer).then(function (data) {

    // // number of pages
    // console.log(data.numpages);
    // // number of rendered pages
    // console.log(data.numrender);
    // // PDF info
    // console.log(data.info);
    // // PDF metadata
    // console.log(data.metadata); 
    // // PDF.js version
    // // check https://mozilla.github.io/pdf.js/getting_started/
    // console.log(data.version);
    // // PDF text
    // console.log(data.text); 
    var lines = data.text.split('\n');
    for (var i = 0; i < lines.length; i++) {
        //code here using lines[i] which will give you each line
        // console.log(lines[i]);
        if (i === 0) console.log(lines[i])
        if (lines[i] === ''){
            if (i + 1 < lines.length) {
                console.log(lines[i + 1])
            }
        }
    }

});