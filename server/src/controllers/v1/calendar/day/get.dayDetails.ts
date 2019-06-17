import { Response, Request} from 'express';
import { default as data} from './../../../../data/calendar.json';

export default async (req: Request, res: Response) => {
    let dayDetails = data;

    try {
        dayDetails.date = Math.floor(<any>new Date() / 1000);

        res.json(dayDetails);

    } catch (error) {

        res.json(error);
    }
}