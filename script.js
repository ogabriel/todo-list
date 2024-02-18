const deleteTodoEvent = (e) => {
    const todoDiv = e.target.parentElement
    deleteTodo(todoDiv)
}

const deleteTodo = (todoDiv) => {
    const todoListItem = todoDiv.getElementsByTagName('li')[0]
    const todo = todoListItem.innerText

    todoDiv.remove()
    removeData(todo)
}

const checkTodoEvent = (e) => {
    const todoDiv = e.target.parentElement
    checkTodo(todoDiv)
}

const checkTodo = (todoDiv) => {
    const todoListItem = todoDiv.getElementsByTagName('li')[0]
    const todo = todoListItem.innerText

    const toggle = todoListItem.classList.toggle('checked')

    if (toggle) {
        saveData(todo, 'checked')
    } else {
        saveData(todo, 'unchecked')
    }
}

const editTodoEvent = (e) => {
    const todoDiv = e.target.parentElement
    editTodo(todoDiv)
}

const editTodo = (todoDiv) => {
    const todoListItem = todoDiv.getElementsByTagName('li')[0]
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
    newTodoEditBtn.addEventListener('click', editTodoEvent)

    const newTodoDeleteBtn = document.createElement('button')
    newTodoDeleteBtn.innerText = 'Delete'
    newTodoDeleteBtn.addEventListener('click', deleteTodoEvent)

    const newTodoCheckBtn = document.createElement('button')
    newTodoCheckBtn.innerText = 'Check'
    newTodoCheckBtn.addEventListener('click', checkTodoEvent)

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
    saveData(todo, 'unchecked')
})

const saveData = (key, value) => {
    localStorage.setItem(key, value)
}

const removeData = (key) => {
    localStorage.removeItem(key)
}

const loadData = () => {
    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index)
        const value = localStorage.getItem(key)
        const newTodo = addTodo(key);

        if (value == 'checked') {
            checkTodo(newTodo)
        }
    }
}

window.addEventListener('load', loadData)
