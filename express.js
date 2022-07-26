const { response } = require('express')
const express = require('express')
const app = express()

app.use(express.static('./public'))

/*app.get('/', (request, response) => {
    response.status(200).send('<h1>Home Page</h1>')
})
app.get('/about', (request, response) => {
    response.status(200).send('<h1>About Page</h1>')
})*/
app.all('*', (request,response) => {
    response.status(404).send('<h1>Page Not Found</h1>')
})


app.listen(5000, () => {
    console.log('server is running successfully')
})
