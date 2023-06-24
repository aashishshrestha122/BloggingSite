import mysql from 'mysql2';

import pool from '../db';

export const createPost = async (data) => {
    if (data.title && data.body) {

        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;

        const query = `INSERT INTO posts
                        (
                            title,
                            body,
                            created_at,
                            updated_at
                        )
                        VALUES
                        (
                            ${mysql.escape(data.title)},
                            ${mysql.escape(data.body)},
                            ${mysql.escape(dateTime)},
                            ${mysql.escape(dateTime)}
                        );`;

        const [rows] = await pool.promise().query(query);
        return [rows];
    }
}

export const editPost = async (data) => {
    if (data.id) {

        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;

        const query = `UPDATE posts
                        SET
                            title       = ${mysql.escape(data.title)},
                            body        = ${mysql.escape(data.body)},
                            updated_at  = ${mysql.escape(dateTime)}
                        WHERE 
                            id = ${mysql.escape(data.id)}`;

        const [rows] = await pool.promise().query(query);
        return [rows];
    }
}

export const viewPosts = async () => {

    const query = `SELECT id, title, body FROM posts`;

    const [rows] = await pool.promise().query(query);
    return [rows];
}

export const post = async (data) => {

    const query = `SELECT id, title, body FROM posts WHERE id = ${mysql.escape(data.id)}`;

    const [rows] = await pool.promise().query(query);
    return [rows];
}

export const deletePost = async (data) => {
    
    const query = `DELETE FROM posts WHERE id = ${mysql.escape(data.id)}`;

    const [rows] = await pool.promise().query(query);
    return [rows];
}