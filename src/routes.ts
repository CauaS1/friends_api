import { Router } from 'express';
import { register, users } from './controllers/UserController';

const routes = Router();

routes.get('/', users);
routes.post('/register', register);


export default routes;