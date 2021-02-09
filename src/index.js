
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
// Import.
const log = require('log-to-file');

import { insertDB, updateDB, selectDB } from './lib/dbUpdate'
import { httpGet, httpPost } from './lib/httpsvc'

let rowNumber = 1473 // last time phone number
let accs = []

function expandRows(row) {
    let className = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    className.forEach(cn => {
        let accCount = row[cn]
        let start = row[cn.toLowerCase() + 's']
        let counter = start + 1; // max 1, start from 2, 
        for (let i = 0; i < accCount; i++) {
            let newPass = Math.random().toString(36).slice(-8);
            let no = ++rowNumber
            let schKey = row.schoolId
            let acc = schKey + cn + (counter + i + '').padStart(3, '0')
            // console.log(++rowNumber, schKey + cn + ((i + 1) + '').padStart(3, '0'), newPass)
            let logText = `${no}\t${acc}\t${newPass}`
            log(logText, 'acc-log.log');
            accs.push({
                "userAcc": acc,
                "password": newPass,
                "mobile": no + '',
                "email": acc.toLowerCase() + "@startmath.cn"
                // "schoolKey": schKey,
                // "vipLevelId": cn.charCodeAt(0) - 63,
                // "status": 'active'
            })
        }
    })
}


async function createAccBatch() {
    // console.log(accs.length)
    for (let i = 0; i < accs.length; i += 1) {
        var res = await httpPost(accs[i])
        console.log(accs[i]);
    }
}

fs.createReadStream(path.resolve(__dirname, './data/startmath-csv.csv'))
    .pipe(csv())
    .on('data', (row) => {
        for (var prop in row) {
            if (!['schoolName', 'schoolId'].includes(prop))
                row[prop] = +row[prop] ? +row[prop] : 0 // number
        }
        expandRows(row)

    })
    .on('end', () => {
        // console.log('CSV file successfully processed');
        console.log(accs.length)
        // createAccBatch()
    });

// updateDB()
// let data = {
//     name: 'xx1',
// }
// insertDB(data)
// selectDB()

// httpGet()

// let accs = [
//     {
//     "userAcc": "tt2",
//     "password": "tt2",
//     "mobile": "tt2",
//     "email": "tt2@gmail.com"
// },
// {
//     "userAcc": "tt3",
//     "password": "tt3",
//     "mobile": "tt3",
//     "email": "tt3@gmail.com"
// },
// ]


// console.log(id)
// httpGet(1081)




// test()