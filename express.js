const { response } = require('express')
const products = require('./data')
const express = require('express')
const app = express()



//app.use(express.static('./public'))

app.get('/', (request, response) => {
    //I write it as array of objects then it is converted to json
    let newProducts = products.map((product) => {
        let {id,name,price} = product
        return {id,name,price}
    })
    response.json(newProducts)
})
/*app.get('/about', (request, response) => {
    response.status(200).send('<h1>About Page</h1>')
})*/
app.all('*', (request,response) => {
    response.status(404).send('<h1>Page Not Found</h1>')
})


app.listen(5000, () => {
    console.log('server is running successfully')
})
