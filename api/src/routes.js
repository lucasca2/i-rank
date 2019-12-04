import { Router } from 'express';

// Routes
import Routes from './app/routes';

const routes = new Router();

routes.use(`/users`, Routes.User);
// routes.use('/api', (req, res) => res.json({ teste: true }));

export default routes;
