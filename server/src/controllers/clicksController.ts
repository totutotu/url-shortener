import { Request, Response } from 'express';
import * as clicksService from '../services/clicksService';

const getClicks = async ( req: Request, res: Response) => {
    if(!req.params.id || !Number(req.params.id)) return res.status(400).send({ error: 'Req missing id or id not a number!' });
    try {
        const clicks = await clicksService.get(req.params.id);
        return res.status(200).send({ clicks });
    } catch (e) {
        return res.status(500).send({ error: e });
    }
};

const addClick = async ( req: Request, res: Response) => {
    if(!req.body.id || !Number(req.body.id)) return res.status(400).send({ error: 'Req missing id or id not a number!' });

    try {
        await clicksService.create(Number(req.body.id));

        return res.send(204);
    } catch (e) {
        return res.status(500).send(e);
    }
};

export {
    getClicks,
    addClick,
}