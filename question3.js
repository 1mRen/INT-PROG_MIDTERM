const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/test', (req, res) => {
    res.json(('Express is working! Marc Lawrence Magadan'))
})

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`)
})