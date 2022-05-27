const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (error) => {
//     if(error){
//         throw error
//     }
//     console.log('Папка создана')
// })

const filePath = path.join(__dirname, 'test', 'test.txt')

// fs.writeFile(filePath, 'Hi Yuriy!!!', (error) => {
//     if (error) {
//         throw error
//     }
//     console.log('Файл создан')
// })
// fs.appendFile(filePath, "\nBye Yuriy!!!", (error) => {
//     if (error) {
//         throw error
//     }
//     console.log('Файл создан')
// })

fs.readFile(filePath, 'utf-8', (error, content) => {
    if(error){
        throw error
    }
    // const data = Buffer.from(content)
    // console.log('Content: ', data.toString())

    console.log('Content: ', content)
})