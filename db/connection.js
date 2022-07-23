import mongoose from 'mongoose'

(async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Database connected to', con.connection.name)
  } catch (error) {
    console.log(error)
  }

  process.on('uncaughtException', () => {
    mongoose.connection.disconnect()
  })
})()
