const express = require('express')

const app = express()
const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send("Hello world!")
})

app.listen(PORT, () => {
  console.log("Servidor funcionando en el puerto: ", PORT)
})