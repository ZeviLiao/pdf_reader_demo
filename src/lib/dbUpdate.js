import { knex } from './knexDB'


export function insertDB(data) {
    knex('user')
        .insert(data).then(result => {
            console.log(result)
        })
}


export function updateDB() {
    knex('user')
        .where('id', 1)
        .update({
            name: 'xx',
        }).then(result => {
            console.log(result)
        })
}


export function selectDB() {
    knex('user')
        .then((projectNames) => {
            console.log(purifyJson(projectNames))
        }).catch((err) => {
            console.error(err)
        })
}

function purifyJson(rawData) {
    return JSON.parse(JSON.stringify(rawData, null, 2))
}

