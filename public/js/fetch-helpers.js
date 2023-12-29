
async function getAllTasks() {
  try {
    const response = await fetch('/api/tasks')
    const tasks = await response.json()
    console.log("tasks: ", tasks)
    return tasks
  } catch (error){
    console.error('Error getting tasks:', error)
    return null
  }
}

async function createTask(title) {
  try {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: { "Content-Type": "application/json" }
    })
    
    const newTask = await response.json()
    console.log("newTask: ", newTask)
    refreshTasks()
  } catch (error) {
    console.error('Error creating task:', error)
  }
}

async function updateTask(id, data) {
  try {
    const response = await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ update: data }),
      headers: { "Content-Type": "application/json" }
    })
    
    const updatedTask = await response.json()
    console.log("updatedTask: ", updatedTask)
    refreshTasks()
  } catch (error) {
    console.error('Error updating task:', error)
  }
}

async function deleteTask(id) {
  try {
    const response = await fetch(`/api/tasks/${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    })
    
    const { message } = await response.json()
    console.log("Delete message: ", message)
    refreshTasks()
  } catch (error) {
    console.error('Error deleting task:', error)
  }
}