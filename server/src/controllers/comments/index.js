import HttpStatus from 'http-status-codes';

import * as commentService from '../../services/comment';

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export async function postComment(req, res, next) {
    try {
        const data = await commentService.postComment(req.body);
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
export async function editComment(req, res, next) {
    try {
        const data = await commentService.editComment(req.body);

        return res.status(HttpStatus.OK).json(data);
    } catch (err) {
        next(err);
    }
}

export async function deleteComment(req, res, next) {
    try {
        const data = await commentService.deleteComment(req.body);

        return res.status(HttpStatus.OK).json(data);
    } catch (err) {
        next(err);
    }
}