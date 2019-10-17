import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ Message: 'Hello World' }));

export default routes;
