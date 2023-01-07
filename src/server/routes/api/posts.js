import express from 'express'
import fetch from 'node-fetch'
import status from '../../errorhandling/statusCodes.js'
import messages from '../../errorhandling/statusCodes.js'

const router = express.Router()

//GET: localhost:3000/api/posts
router.get('/posts', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        res.status(200).json({
            status: status.httpStatusCodes.OK,
            message: status.httpMessages.OK,
            length: data.length,
            posts: data
        })
    } catch (err) {
        res.status(404).json({
            status: status.NOT_FOUND,
            message: `ERROR: ${messages.httpMessages.NOT_FOUND}`
        })
        console.log(err)
    }
})

//GET: localhost:3000/api/post/id
router.get('/post/:id', async (req, res) => {
    const id = req.params.id //id of response
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json()
        res.status(200).json({
            status: status.httpStatusCodes.OK,
            message: status.httpMessages.OK,
            length: data.length,
            post: data
        })
    } catch (err) {
        res.status(404).json({
            status: status.httpStatusCodes.NOT_FOUND,
            message: `ERROR: ${messages.httpMessages.NOT_FOUND}`
        })
        console.log(err)
    }
})


//POST: localhost:3000/api/post
router.post('/posts', async (req, res) => {
    const post = req.body //body of response
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await response.json()
        res.status(201).json({
            status: status.httpStatusCodes.CREATED,
            message: status.httpMessages.CREATED,
            length: data.length,
            post: {
                "userId": post.userId,
                "id": post.id,
                "body": post.body,
                "title": post.title
            }
        })
    } catch (err) {
        res.status(400).json({
            status: status.httpStatusCodes.BAD_REQUEST,
            message: `ERROR: ${status.httpMessages.BAD_REQUEST}`
        })
        console.log(err)
    }
})

//PUT: localhost:3000/api/posts/id
router.put('/posts/:id', async (req, res) => {
    const post = req.body //body of response
    const id = req.params.id //id of response
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = response.json()
        res.status(201).json({
            status: status.httpStatusCodes.UPDATED,
            message: status.httpMessages.UPDATED,
            length: data.length,
            post: {
                "userId": post.userId,
                "id": post.id,
                "body": post.body,
                "title": post.title
            }
    })
    } catch (err) {
        res.status(400).json({
            status: status.httpStatusCodes.BAD_REQUEST,
            message: `ERROR: ${status.httpMessages.BAD_REQUEST}`
        })
        console.log(err)
    }
})

//DELETE: localhost:3000/api/posts/id
router.delete('/posts/:id', async (req, res) => {
    const id = req.params.id
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = response.json()
        res.status(200).json({
            status: status.httpStatusCodes.DELETED,
            message: status.httpMessages.DELETED,
        })
        console.log(data)
    } catch (err) {
        res.status(404).json({
            status: status.httpStatusCodes.NOT_FOUND,
            message: `ERROR: ${messages.httpMessages.NOT_FOUND}`
        })
        console.log(err);
    }
})


export default router;