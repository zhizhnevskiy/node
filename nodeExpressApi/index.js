import express from 'express'
import mongoose from 'mongoose'
import Post from "./Post.js";

const PORT = 5000;
const DB_URL = `mongodb+srv://zhizhnevskiy:bestdevmongo@cluster0.fuyit.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())

app.get('/', async (request, response) => {
    // console.log(request.body)
    response.json('test with method GET')
})

app.post('/', async (request, response) => {
    // console.log(request.body)
    try{
        const{author, title, content, picture} = request.body
        const POST = await Post.create({author, title, content, picture})
        response.json(POST)
    }catch (error){
        response.status(500).json(error)
    }
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => {
            console.log('Server Working on PORT ' + PORT)
        })
    } catch (error) {
        console.log(error)
    }
}

startApp()
