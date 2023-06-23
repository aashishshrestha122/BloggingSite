import mysql from 'mysql2';

import config from './config';

const pool = mysql.createPool({
  ...config.db.connection,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
});

console.info(`Successfully connected to db ${config.db.connection.database}`)

export default pool;
