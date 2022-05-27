const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((request, response) => {
    // VARIANT №1
    // if (request.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (error, data) => {
    //         if (error) {
    //             throw error
    //         }
    //         response.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })
    //         response.end(data)
    //     })
    // } else if (request.url === '/contact'){
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (error, data) => {
    //         if (error) {
    //             throw error
    //         }
    //         response.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })
    //         response.end(data)
    //     })
    // }

    // VARIANT №2
    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url)

    const ext = path.extname(filePath)

    let contentType = 'text/html'

    switch (ext){
        case '.css' :
            contentType = 'text/css'
            break
        case '.js' :
            contentType = 'text/javascript'
            break
        default :
            contentType = 'text/html'
    }

    if(!ext){
        filePath += '.html'
    }


    fs.readFile(filePath, (error, content) => {
        if (error) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'),
                (error, data) => {
                    if (error) {
                        response.writeHead(500)
                        response.end('Error')
                    } else{
                        response.writeHead(200, {
                            'Content-Type': 'text/html'
                        })
                        response.end(data)
                    }
                })
        } else {
            response.writeHead(200, {
                'Content-Type': contentType
            })
            response.end(content)
        }
    })
})

const PORT = process.env.PORT || 3003

server.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`)
})