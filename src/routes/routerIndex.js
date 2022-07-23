import express from 'express'
import path from 'path'

const router = express.Router()

router.get('/', (req, res) => {
  const __dirname = path.resolve(path.dirname(''))
  res.sendFile(path.join(__dirname, 'src/views/home.html'))
})

export default router
