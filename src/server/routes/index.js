import express from 'express'
import apiRouter from './api/posts.js'

const router = express.Router()


//localhost:3000/api
router.use('/api', apiRouter)

export default router