import mysql, { createConnection, createPool } from 'mysql'
import * as config from '../config/config.js'
export const db=createConnection({
    host: config.MYSQL_HOST,
    port: config.MYSQL_PORT,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    database: config.MYSQL_DATABASE
})