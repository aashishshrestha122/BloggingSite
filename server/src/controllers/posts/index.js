import HttpStatus from 'http-status-codes';

import * as postService from '../../services/post';

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export async function createPost(req, res, next) {
    try {
        const data = await postService.createPost(req.body);
        return res.status(HttpStatus.OK).json(data);
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export async function editPost(req, res, next) {
    try {
        const data = await postService.editPost(req.body);

        return res.status(HttpStatus.OK).json(data);
    } catch (err) {
        next(err);
    }
}

export async function viewPosts(req, res, next) {
    try {
        const data = await postService.viewPosts(req.body);

        return res.status(HttpStatus.OK).json(data);
    } catch (err) {
        next(err);
    }
}

export async function post(req, res, next) {
    try {
        const data = await postService.post(req.body);

        return res.status(HttpStatus.OK).json(data);
    } catch (err) {
        next(err);
    }
}

export async function deletePost(req, res, next) {
    try {
        const data = await postService.deletePost(req.body);

        return res.status(HttpStatus.OK).json(data);
    } catch (err) {
        next(err);
    }
}