import { Router } from 'express';
import { editUser, getUser, register, users } from './controllers/UserController';

const routes = Router();

routes.get('/', users);
routes.get('/user/:id', getUser);
routes.post('/register', register);
routes.put('/user/edit/:id', editUser);

export default routes;