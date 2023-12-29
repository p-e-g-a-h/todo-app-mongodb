
$(document).ready(() => {
  refreshTasks()
})

async function refreshTasks() {
  const tasks = await getAllTasks()
  if(tasks.length) {
    $('#allTasksContainer').html(
      tasks.reduce((result, {_id, title, completed}, index) => {
        return result.concat(
          generateTaskHtml(index, _id, title, completed)
        )
      }, "")
    )
  } else {
    $('#allTasksContainer').html('<p class="text-center">There is no tasks</p>')
  }
}

function newTaskHandler() {
  const title = $('#newTaskTitle').val().trim()
  if(title) {
    createTask(title)
    $('#newTaskTitle').val('')
  }
}

function checkboxHandler(checkbox, id) {
  updateTask(id, { completed: checkbox.checked })
}

function editHandler(id) {
  $('#add-edit-container').html(generateEditHtml(id))
}

function editTitleHandler(id) {
  const title = $('#editTitleInput').val().trim()
  if(title) {
    updateTask(id, { title: title })
    $('#add-edit-container').html(generateAddHtml())
  }
}

function editCancelHandler() {
  $('#add-edit-container').html(generateAddHtml())
}

