import express, { Request, Response } from 'express';
import * as urlController from '../controllers/urlController';

const router = express.Router();

router.get('/:shortUrl', (req: Request, res: Response) => {
    return urlController.getOriginalUrl(req, res);
});
export default router;
