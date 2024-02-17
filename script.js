const getListItem = (div) => {
    return div.getElementsByTagName('li')[0]
}

const deleteTodo = (e) => {
    const todoDiv = e.target.parentElement
    const todoListItem = getListItem(todoDiv)
    const todo = todoListItem.innerText

    todoDiv.remove()
    removeData(todo)
}

const checkTodo = (e) => {
    const todoDiv = e.target.parentElement
    const todoListItem = getListItem(todoDiv)
    const todo = todoListItem.innerText

    todoListItem.classList.toggle('checked')
    saveData(todo, 'checked')
}

const editTodo = (e) => {
    const todoDiv = e.target.parentElement
    const todoListItem = getListItem(todoDiv)
    const todo = todoListItem.innerText

    const newTodo = prompt('Edit task', todo)

    if (newTodo != todo) {
        todoListItem.innerText = newTodo
        removeData(todo)

        if (todoListItem.classList.contains('checked')) {
            saveData(newTodo, 'checked')
        } else {
            saveData(newTodo, 'unchecked')
        }
    }

}

const addTodo = (todo) => {
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

    return newTodo
}

const validateTodo = (todo) => {
    if (todo === '') {
        alert('Please enter a task name')
        return false
    }

    const currentTodo = localStorage.getItem(todo)

    if (currentTodo == null) {
        alert('All tasks must be unique')
        return false
    }
}

const btn = document.querySelector('#todo-input-btn')

btn.addEventListener('click', () => {
    const todo = document.querySelector('#todo-input').value

    if (!validateTodo()) {
        return
    }

    addTodo(todo)
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
