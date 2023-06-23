import mysql from 'mysql2';

import pool from '../db';

export const getUserDetail = async (id) => {
    const query = `SELECT * FROM users where user_id=${mysql.escape(id)}`;

    const [rows] = await pool.promise().query(query);

    return [rows];
}