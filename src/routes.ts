import { Router } from 'express';
import { editUser, register, users } from './controllers/UserController';

const routes = Router();

routes.get('/', users);
routes.post('/register', register);
routes.put('/user/edit/:id', editUser);

export default routes;