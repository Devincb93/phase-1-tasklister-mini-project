document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const taskDescription = document.getElementById('new-task-description')
    const addToList = document.getElementById('tasks')
    const newTask = document.createElement('li')
    newTask.innerText = taskDescription.value
    addToList.appendChild(newTask)
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    newTask.appendChild(btn)
    form.reset()


  })
  function handleDelete(e){
    e.target.parentNode.remove();
  }
});
