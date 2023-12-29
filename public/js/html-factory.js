
function generateTaskHtml(index, id, title, completed) {
  return (`
    <div class='input-group rounded mt-3'>
      <div class="input-group-text">
        <input type="checkbox" ${completed && 'checked'}
          onchange="checkboxHandler(this, '${id}')" id="${index}" 
          class="form-check-input border border-primary"> 
      </div>
      <span class="input-group-text col text-wrap text-break text-start">${title}</span>
      <button type="button" onclick="editHandler('${id}')" class="btn btn-outline-success"><i class="bi bi-pencil-square"></i></button>
      <button type="button" onclick="deleteTask('${id}')" class="btn btn-outline-danger"><i class="bi bi-x-lg"></i></button>
    </div>
  `)
}

function generateAddHtml() {
  return (`
    <input type="text" id="newTaskTitle" placeholder="New task..." class="form-control">
    <button onclick="newTaskHandler()" class="btn btn-outline-primary">Add</button>
  `)
}

function generateEditHtml(id) {
  return (`
    <input type="text" id="editTitleInput" placeholder="Edit title..." class="form-control">
    <button onclick="editTitleHandler('${id}')" class="btn btn-outline-success">Edit</button>
    <button onclick="editCancelHandler()" class="btn btn-outline-danger">Cancel</button>
  `)
}

