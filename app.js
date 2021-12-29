const express = require('express')

const app = express()
app.get('/hello', (req, res) => {
    res.status(200).send('hello from outside')
})

var server = app.listen(8080, function() {
    console.log('running on port 8080')
}) 


module.exports = server;