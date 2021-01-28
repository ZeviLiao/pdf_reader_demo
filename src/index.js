
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
// Import.
const log = require('log-to-file');




import { insertDB, updateDB, selectDB } from './lib/dbUpdate'
import { httpGet, httpPost } from './lib/httpsvc'

let rowNumber = 0
let accs = []

function expandRows(row) {
    let className = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    className.forEach(cn => {
        let accCount = row[cn]
        for (let i = 0; i < accCount; i++) {
            let newPass = Math.random().toString(36).slice(-8);
            let no = ++rowNumber
            let acc = row.schoolId + cn + (i + '').padStart(3, '0')
            // console.log(++rowNumber, row.schoolId + cn + ((i + 1) + '').padStart(3, '0'), newPass)
            let logText = `${no}\t${acc}\t${newPass}`
            log(logText, 'acc-log.log');
            accs.push({
                "userAcc": acc,
                "password": newPass,
                "mobile": no + '',
                "email": acc + "@startmath.cn"
            })
        }
    })
}


async function test() {
    // console.log(accs.length)
    for(let i = 0; i < accs.length; i += 1) {
        // const res = await addSuffix(texts[i]);
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
        // test()
    });

    

    // test()
    

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