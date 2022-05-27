import Router from 'express'
import PostController from "./PostController.js";

const ROUTER = new Router()

ROUTER.post('/post', PostController.create)
ROUTER.get('/posts', PostController.getAll)
ROUTER.get('/post/:id', PostController.getOne)
ROUTER.put('/post', PostController.update)
ROUTER.delete('/post/:id', PostController.delete)

export default ROUTER;