const express = require('express')
const path = require('path')
require('dotenv').config()
const { dbConnectionMiddleware } = require('./controllers/dbConnectionController.js')
const taskController = require('./controllers/taskController.js')

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(dbConnectionMiddleware)

// Routes
app.route('/api/tasks')
  .get(taskController.getAllTasks)
  .post(taskController.createTask)
app.route('/api/tasks/:id')
  .put(taskController.updateTask)
  .delete(taskController.deleteTask)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'))
})

app.use((req, res, next) => {
  res.status(404).send("<h1 style='text-align: center'>404</h1>")
})

app.use((err, req, res, next) => {
  res.status(500).send("<h1 style='text-align: center'>500</h1>")
  console.error('error: ', err)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
