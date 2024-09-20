import mariadb from 'serverless-mysql'

export const conn = mariadb({
    config:{
        host: 'localhost',
        user:'root',
        password: '123456',
        port: '3306',
        database: 'code_clases'
    }
})