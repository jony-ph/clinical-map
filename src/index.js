import express from 'express'
import cors from 'cors'

import '../db/connection.js'
import routerAPI from './routes/routerAPI.js'
import routerIndex from './routes/routerIndex.js'
import routerDocumentation from './routes/routerDocumentation.js'

import notFound from '../middleware/notFound.js'
import handleErrors from '../middleware/handleErrors.js'

const app = express()

// Main
app.use(cors())
app.use('/', routerIndex)
app.use('/api', routerAPI)
app.use('/documentation', routerDocumentation)

// Errors
app.use(notFound)
app.use(handleErrors)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Servidor funcionando en el puerto: ', PORT)
})
