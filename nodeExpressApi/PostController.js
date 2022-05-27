import Post from "./post.js";
import PostService from "./PostService.js";

class PostController {

    async create(request, response) {
        try {
            const post = await PostService.create(request.body, request.files.picture)
            return response.json(post)
        } catch (error) {
            response.status(500).json(error)
        }
    }

    async getAll(request, response) {
        try {
            const posts = await PostService.getAll()
            return response.json(posts)
        } catch (error) {
            response.status(500).json(error)
        }
    }

    async getOne(request, response) {
        try {
            const post = await PostService.getOne(request.params.id)
            return response.json(post)
        } catch (error) {
            response.status(500).json(error.message)
        }
    }

    async update(request, response) {
        try {
            const updatedPost = await PostService.update(request.body)
            return response.json(updatedPost)
        } catch (error) {
            response.status(500).json(error.message)
        }
    }

    async delete(request, response) {
        try {
            const deletedPost = await PostService.delete(request.params.id)
            return response.json(deletedPost)
        } catch (error) {
            response.status(500).json(error.message)
        }
    }
}

export default new PostController()