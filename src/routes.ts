import { Router } from 'express';
import { sendMessage } from './controllers/MessageController';
import { editUser, getUser, login, register, users } from './controllers/UserController';

const routes = Router();

routes.get('/', users);
routes.get('/user/:id', getUser);
routes.post('/register', register);
routes.post('/login', login);
routes.put('/user/edit/:id', editUser);

// Messages
routes.post('/chat/:sendToId', sendMessage);

export default routes;