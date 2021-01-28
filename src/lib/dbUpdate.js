import { knex } from './knexDB'

function udpateDB() {
    knex('user')
        .where('user_id', '16')
        .update({
            user_name: 'zhang',
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

function purifyJson(rawData){
    return JSON.parse(JSON.stringify(rawData, null ,2))
}

