
const deleteTodo = (e) => {
    const todo = e.target.parentElement
    todo.remove()
    saveData()
}

const checkTodo = (e) => {
    const todo = e.target.parentElement
    todo.classList.toggle('checked')
}

const editTodo = (e) => {
    const todo = e.target.parentElement
    const todoListItem = todo.querySelector('li')
    const newTodo = prompt('Edit todo', todoListItem.innerText)
    todoListItem.innerText = newTodo
}

const btn = document.querySelector('#todo-input-btn')
btn.addEventListener('click', () => {
    const todo = document.querySelector('#todo-input').value

    if (todo === '') {
        alert('Please enter a todo')
        return
    }

    const todoList = document.querySelector('#todo-list')
    const newTodo = document.createElement('div')
    newTodo.classList.add('todo')

    const newTodoListItem = document.createElement('li')
    newTodoListItem.innerText = todo

    const newTodoEditBtn = document.createElement('button')
    newTodoEditBtn.innerText = 'Edit'
    newTodoEditBtn.addEventListener('click', editTodo)

    const newTodoDeleteBtn = document.createElement('button')
    newTodoDeleteBtn.innerText = 'Delete'
    newTodoDeleteBtn.addEventListener('click', deleteTodo)

    const newTodoCheckBtn = document.createElement('button')
    newTodoCheckBtn.innerText = 'Check'
    newTodoCheckBtn.addEventListener('click', checkTodo)

    newTodo.appendChild(newTodoListItem)
    newTodo.appendChild(newTodoEditBtn)
    newTodo.appendChild(newTodoDeleteBtn)
    newTodo.appendChild(newTodoCheckBtn)

    todoList.appendChild(newTodo)

    saveData()
})

const saveData = () => {
    const todoList = document.querySelector('#todo-list')
    localStorage.setItem('todoList', todoList.innerHTML)
}

const loadData = () => {
    const todoList = document.querySelector('#todo-list')
    todoList.innerHTML = localStorage.getItem('todoList')
}

window.addEventListener('load', loadData)
