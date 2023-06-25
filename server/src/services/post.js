import mysql from 'mysql2';

import pool from '../db';

export const createPost = async (data) => {
    if (data.title && data.body) {
        console.log(data);
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;

        const query = `INSERT INTO posts
                        (
                            userid,
                            title,
                            body,
                            created_at,
                            updated_at
                        )
                        VALUES
                        (
                            ${mysql.escape(data.userid)},
                            ${mysql.escape(data.title)},
                            ${mysql.escape(data.body)},
                            ${mysql.escape(dateTime)},
                            ${mysql.escape(dateTime)}
                        );`;

        const [rows] = await pool.promise().query(query);
        const result = {
            id: rows.insertId,
            userid: data.userid,
            title: data.title,
            body: data.body,
            created_at: dateTime
        }
        return result;
    }
}

export const editPost = async (data) => {
    if (data.postId) {

        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;

        const query = `UPDATE posts
                        SET
                            userid      = ${mysql.escape(data.userId)},
                            title       = ${mysql.escape(data.title)},
                            body        = ${mysql.escape(data.body)},
                            updated_at  = ${mysql.escape(dateTime)}
                        WHERE 
                            id = ${mysql.escape(data.postId)}`;

        const [rows] = await pool.promise().query(query);
        const result = {
            ...rows,
            postId: data.postId
        }
        return result;
    }
}

export const viewPosts = async (data) => {

    const posts = `SELECT p.id, p.userid, u.username, p.title, p.body FROM posts p LEFT JOIN users u on u.id = p.userid ORDER BY p.created_at DESC LIMIT ${mysql.escape(data.paginationData.limit)} OFFSET ${mysql.escape(data.paginationData.offset)}; `;
    const [postResults] = await pool.promise().query(posts);
    const postIds = postResults.map(result => result.id);

    const comment = `SELECT c.id, c.post_id, u.username, c.user_name, c.body FROM comments c LEFT JOIN users u on u.id = c.user_name WHERE c.post_id IN(${postIds.join(',')})`;
    const [commentResults] = await pool.promise().query(comment);

    const result = postResults.map(post => {
        return {
            ...post,
            comments: commentResults.filter(comment => comment.post_id === post.id)
        }
    })

    console.log('result', result)
    return result;
}

export const post = async (data) => {

    const query = `SELECT id, title, body FROM posts WHERE id = ${mysql.escape(data.id)} `;

    const [rows] = await pool.promise().query(query);
    return [rows];
}

export const deletePost = async (data) => {

    const query = `DELETE FROM posts WHERE id = ${mysql.escape(data.postId)} `;

    const [rows] = await pool.promise().query(query);
    return rows;
}