import express, { Request, Response } from 'express';
import * as urlController from '../controllers/urlController';

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
    return urlController.createUrl(req, res);
});

router.get('/', (req: Request, res: Response) => {
    return urlController.getUrls(req, res);
});

router.get('/:id', (req: Request, res: Response) => {
    return urlController.getUrl(req, res);
});

router.get('/:id', (req: Request, res: Response) => {
    return urlController.getUrls(req, res);
});

router.delete('/:id', (req: Request, res: Response) => {
    return urlController.deleteUrl(req, res);
});

export default router;
