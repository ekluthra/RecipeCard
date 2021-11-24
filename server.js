'use strict';
const express = require('express')
const app = express();

const path = require('path')

app.use(express.static(path.join(__dirname, '/pub')))

app.get('/', (req, res) => {
    // sending a string
    //res.send('This should be the root route!')

    //sending some HTML
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
}) 
