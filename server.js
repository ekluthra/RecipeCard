'use strict';
const express = require('express')
const app = express();

const path = require('path')

app.use(express.static(path.join(__dirname, '/pub')))
app.get('/', () => {
})

// Error codes
app.get('/problem', (res) => {
	res.status(500).send('There was a problem on the server')
})

// Sending some JSON
app.get('/someJSON', () => {
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
}) 
