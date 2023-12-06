/*
    * Database Connection File for Game School Website to MariaDB Database. 
    * All hosted on Gib's home server. Database can be managed at 
    * https://adminer.gibbyb.com.  
    * Author: Gabriel Brown & Bowen Garth
*/

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();
const mysql_host = process.env.MYSQL_HOST;
const mysql_user = process.env.MYSQL_USER;
const mysql_password = process.env.MYSQL_PASSWORD;
const mysql_database = process.env.MYSQL_DATABASE;

// Create a pool of connections to the database
const pool = mysql.createPool({
    host: mysql_host,
    user: mysql_user,
    password: mysql_password,
    database: mysql_database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
