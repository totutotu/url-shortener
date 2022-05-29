import { Request, Response } from 'express';
import * as urlsService from '../services/urlsService';


const createUrl = async ( req: Request, res: Response) => {
    if(!req.body.originalUrl) return res.status(400).send({ error: 'Req missing originalUrl!' });

    try {
        const createdUrl = await urlsService.create(req.body.originalUrl);

        return res.status(201).send(createdUrl);
    } catch (e) {
        return res.status(500).send(e);
    }
};

const deleteUrl = async ( req: Request, res: Response) => {
    if(!req.params.id || !Number(req.params.id)) return res.status(400).send({ error: 'Missing or nonnumerical parameter!' });
    try {
        await urlsService.remove(Number(req.params.id));
        return res.sendStatus(204);
    } catch (e) {
        return res.status(500).send(e);
    }
};

const getUrls = async ( req: Request, res: Response) => {
    try {
        const urls = await urlsService.get();
        return res.status(200).send({ urls });
    } catch (e) {
        return res.status(500).send({ error: e });
    }
};

const getUrl = async ( req: Request, res: Response) => {
    if(!req.params.id || !Number(req.params.id)) return res.status(400).send({ error: 'Missing or nonnumerical parameter!' });
    try {
        const url = await urlsService.get(Number(req.params.id));
        console.log(url);
        return res.status(200).send({ url });
    } catch (e) {
        return res.status(500).send(e);
    }
};

const getOriginalUrl = async ( req: Request, res: Response) => {
    if(!req.params.shortUrl) return res.status(400).send({ error: 'Missing required param!' });
    try {
        const originalUrl = await urlsService.getOriginalUrl(req.params.shortUrl);
        if (!originalUrl) return res.status(404).send({ error: `Original url for ${req.params.shortUrl} not found` })
        return res.status(200).send({ original_url: originalUrl });
    } catch (e) {
        return res.status(500).send({ error: e });
    }
};

// const updateTask = async ( req: Request, res: Response) => {
//     if(!req.body.description ||
//         typeof req.body.completed === 'undefined' ||
//         !req.body.id
//     ) return res.status(400).send({ error: 'Missing required fields!' });
//     try {
//         await urlsService.update(req.body.id, req.body.description, req.body.completed);
//         return res.sendStatus(204);
//     } catch (e) {
//         return res.status(500).send(e);
//     }
// };



export {
    createUrl,
    getUrls,
    getUrl,
    getOriginalUrl,
    // updateTask,
    deleteUrl,
};
