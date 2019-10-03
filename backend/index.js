const express = require('express')

const app = express()

app.get('/hi', (request, response) => {
    response.json({
        message: "Whats up?"
    })
})

app.listen(3000)