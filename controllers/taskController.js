const Task = require('../models/taskModel')

const taskController = {
  getAllTasks: async (req, res) => {
    try {
      const tasks = await Task.find()
      res.json(tasks)
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  },
  createTask: async (req, res) => {
    try {
      const { title } = req.body;
      const newTask = new Task({ title })
      await newTask.save();
      res.json(newTask)
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  },
  updateTask: async (req, res) => {
    try {
      const { update } = req.body;
      const taskId = req.params.id
      const updatedTask = await Task.findByIdAndUpdate(taskId, update, { new: true })
      res.json(updatedTask)
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  },
  deleteTask: async (req, res) => {
    try {
      const taskId = req.params.id
      await Task.findByIdAndDelete(taskId)
      res.json({ message: 'Task deleted successfully' })
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}

module.exports = taskController