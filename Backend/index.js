const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const userRouter = require('./routes/user-router')
const postRouter = require('./routes/post-router')

const app = express()
const PORT = 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
