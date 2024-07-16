import Router from '@koa/router';
import {healthcheck} from "./api/healthcheck.js";
import {routeToFunction} from "./middlewares.js";
import {enqueue} from "./controllers/message.js";

const router = new Router();

router.get('/healthcheck', routeToFunction(healthcheck));

router.post('/enqueue-message', routeToFunction(enqueue));

export default router;