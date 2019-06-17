import { Router } from 'express-async-router';
import getDayDetails from './calendar/day/get.dayDetails';
import postEvent from './calendar/event/post.event';

export default (router: Router) => {

    router.get('/calendar/day', getDayDetails);
    router.post('/calendar/day/event', postEvent);

    return router
}
