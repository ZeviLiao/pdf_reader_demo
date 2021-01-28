
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

import {insertDB, updateDB, selectDB} from './lib/dbUpdate'

let rowNumber = 0

function expandRows(row) {
    let className = ['A','B','C','D','E','F','G']
    className.forEach(cn => {
        let accCount = row[cn]
        for (let i = 0; i < accCount; i++) {
            let newPass = Math.random().toString(36).slice(-8);
            console.log(++rowNumber, row.schoolId + cn + ((i+1)+'').padStart(3,'0'),newPass )
        }
    })
}

// fs.createReadStream(path.resolve(__dirname, './data/startmath-csv.csv'))
//     .pipe(csv())
//     .on('data', (row) => {
//         for (var prop in row) {
//             if (!['schoolName', 'schoolId'].includes(prop))
//                 row[prop] = +row[prop] ? +row[prop] : 0 // number
//         }
//         expandRows(row)
//     })
//     .on('end', () => {
//         console.log('CSV file successfully processed');
//     });

// updateDB()
let data = {
    name: 'xx1',
}
insertDB(data)
selectDB()
