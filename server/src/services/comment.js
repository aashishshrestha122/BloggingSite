import mysql from 'mysql2';

import pool from '../db';

export const postComment = async (data) => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    const query = `INSERT INTO comments
                        (
                            post_id,
                            user_name,
                            body,
                            created_at,
                            updated_at
                        )
                        VALUES
                        (
                            ${mysql.escape(data.post_id)},
                            ${mysql.escape(data.username)},
                            ${mysql.escape(data.body)},
                            ${mysql.escape(dateTime)},
                            ${mysql.escape(dateTime)}
                        );`;

    const [rows] = await pool.promise().query(query);
    return [rows];
}

export const editComment = async (data) => {
    if (data.id) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;

        const query = `UPDATE comments
                        SET
                            body        = ${mysql.escape(data.body)},
                            updated_at  = ${mysql.escape(dateTime)}
                        WHERE 
                            id = ${mysql.escape(data.id)}`;

        const [rows] = await pool.promise().query(query);
        return [rows];
    }
}

export const deleteComment = async (data) => {

    const query = `DELETE FROM posts WHERE id = ${mysql.escape(data.id)}`;

    const [rows] = await pool.promise().query(query);
    return [rows];
}