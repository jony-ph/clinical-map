export default (error, req, res, next) => {
  console.log(error)
  console.log(error.name)

  if (error.name === 'CastError') {
    res.status(400).send({ error: 'The record does not exist ' })
  } else {
    res.status(500).end()
  }
}
