const btn = document.querySelector('#todo-btn')

const deleteTodo = (e) => {
    const todo = e.target.parentElement
    todo.remove()
}

const checkTodo = (e) => {
    const todo = e.target.parentElement
    todo.classList.toggle('checked')
}

btn.addEventListener('click', () => {
    const todo = document.querySelector('#todo-input').value

    if (todo === '') {
        alert('Please enter a todo')
        return
    }

    const todoList = document.querySelector('#todo-list')
    const newTodo = document.createElement('div')

    const newTodoListItem = document.createElement('li')
    newTodoListItem.innerText = todo

    const newTodoDeleteBtn = document.createElement('button')
    newTodoDeleteBtn.innerText = 'Delete'
    newTodoDeleteBtn.addEventListener('click', deleteTodo)

    const newTodoCheckBtn = document.createElement('button')
    newTodoCheckBtn.innerText = 'Check'
    newTodoCheckBtn.addEventListener('click', checkTodo)

    newTodo.appendChild(newTodoListItem)
    newTodo.appendChild(newTodoDeleteBtn)
    newTodo.appendChild(newTodoCheckBtn)

    todoList.appendChild(newTodo)
})
