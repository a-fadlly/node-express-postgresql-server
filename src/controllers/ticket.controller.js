import HTTPStatus from 'http-status';
import { ResponseBuilder } from '../helpers';
import models from '../models';
const { Ticket, Priority, Status, Type } = models;

export default class TicketController {

    async get(req, res) {
        try {
            const tickets = await Ticket.findAll({
                include: [
                    {
                        model: Priority,
                        attributes: ['name'],
                    },
                    {
                        model: Status,
                        attributes: ['name'],
                    },
                    {
                        model: Type,
                        attributes: ['name'],
                    },
                ],
                attributes: {
                    exclude: ['priority_id', 'status_id', 'type_id']
                }
            });

            return res.status(HTTPStatus.OK).json(
                new ResponseBuilder()
                    .setData(tickets)
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