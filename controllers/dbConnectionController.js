const mongoose = require('mongoose')

let isConnected = false

const dbConnectionMiddleware = async (req, res, next) => {
  try {
    if(isConnected) {
      next()
      return
    }
    await mongoose.connect(process.env.MONGO_URI)
    isConnected = true
    console.log('Connected to MongoDB')
    next()
  } catch (error) {
    console.error('MongoDB connection error:', error)
    next(error)
  }  
}

module.exports = { dbConnectionMiddleware }