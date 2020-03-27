import HTTPStatus from 'http-status';
import { ResponseBuilder } from '../helpers';
import models from '../models';
const { User } = models;

export default class UserController {

    async get(req, res) {
        try {
            const users = await User.findAll();
            return res.status(HTTPStatus.OK).json(
                new ResponseBuilder()
                    .setData(users)
                    .build()
            );
        } catch (error) {
            res.status(HTTPStatus.BAD_REQUEST).json(
                new ResponseBuilder()
                    .setMessage(error)
                    .setSuccess(false)
                    .build()
            );
        }
    }

    async find(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findOne({
                where: { id, },
            });
            return res.status(HTTPStatus.OK).json(
                new ResponseBuilder()
                    .setData(user)
                    .build()
            );
        } catch (error) {
            res.status(HTTPStatus.BAD_REQUEST).json(
                new ResponseBuilder()
                    .setMessage(error)
                    .setSuccess(false)
                    .build()
            );
        }
    }

    async post(req, res) {
        try {
            const { username } = req.body;
            const user = await User.create({
                username,
            });
            return res.status(HTTPStatus.CREATED).json(
                new ResponseBuilder()
                    .setData(user)
                    .build()
            );
        } catch (error) {
            res.status(HTTPStatus.BAD_REQUEST).json(
                new ResponseBuilder()
                    .setMessage(error)
                    .setSuccess(false)
                    .build()
            );
        }
    }

    async delete(req, res) {
        try {
            const { username } = req.query;
            await User.destroy({
                where: { username, },
            });
            return res.status(HTTPStatus.OK).json(
                new ResponseBuilder()
                    .setData({})
                    .build()
            );
        } catch (error) {
            res.status(HTTPStatus.BAD_REQUEST).json(
                new ResponseBuilder()
                    .setMessage(error)
                    .setSuccess(false)
                    .build()
            );
        }
    }
}