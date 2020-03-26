import HTTPStatus from 'http-status';
import { ResponseBuilder } from '../helpers';
import models from '../models';
const { User } = models;

export default class UserController {

    async get(req, res) {
        const users = await User.findAll();
        return res.status(HTTPStatus.OK).json(new ResponseBuilder().setData(users).build());
    }

    async find(req, res) {
        const user = await User.findByPk(
            req.params.userId,
        );
        return res.status(HTTPStatus.OK).json(new ResponseBuilder().setData(user).build());
    }

    async post(req, res) {
        const { username } = req.body;
        const user = await User.create({
            username,
        });
        return res.status(HTTPStatus.CREATED).json(new ResponseBuilder().setData(user).build());
    }

    async delete(req, res) {
        const { username } = req.query;
        const user = await User.destroy({
            where: { username },
        });
        return res.status(HTTPStatus.OK).json(new ResponseBuilder().setData(user).build());
    }
}