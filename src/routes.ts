import { Router } from 'express';
import { getPhotos, postPhoto } from './controllers/PostController';
import { editUser, getUser, login, register, users } from './controllers/UserController';

const routes = Router();

routes.get('/', users);
routes.get('/user/:id', getUser);
routes.post('/register', register);
routes.post('/login', login);
routes.put('/user/edit/:id', editUser);

// Posts
routes.post('/post', postPhoto);
routes.get('/posts', getPhotos)


export default routes;