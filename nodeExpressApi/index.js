import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import fileUpload from 'express-fileupload'

const PORT = 5000;
const DB_URL = `mongodb+srv://zhizhnevskiy:bestdevmongo@cluster0.fuyit.mongodb.net/?retryWrites=true&w=majority`

const app = express()

// for read json
app.use(express.json())
// for save file
app.use(fileUpload({}))
// for show picture from folder 'static'
app.use(express.static('static'))
// for routing
app.use('/api', router)

// for show message on home page
app.get('/', async (request, response) => {
    // console.log(request.body)
    response.json('Home Page for browser')
})

// for start working server
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
