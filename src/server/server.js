import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes/index.js'

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(routes)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port:${PORT}`)
})
