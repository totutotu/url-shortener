import express, { Request, Response } from 'express';
import * as clicksController from '../controllers/clicksController';

const router = express.Router();

router.get('/:id', (req: Request, res: Response) => {
    return clicksController.getClicks(req, res);
});


router.post('/', (req: Request, res: Response) => {
    return clicksController.addClick(req, res);
});


export default router;
