// Constants for the page
const mainPage = document.querySelector('.mainPage')
const todoPage = document.querySelector('.todoPage')

// Page check
console.log('Main Page: ' + (mainPage != null).toString(),'\nTodo Page: ' + (todoPage != null).toString())

// If on main page
if (mainPage) {
    console.log('Hello Ryan :D')

    const hours = new Date().getHours() // get the current hour

    const isMorning = hours >= 4 && hours < 12 // is it morning?
    const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
    const isEvening = hours >= 17 || hours < 4 // is it evening?

    const welcome = document.querySelector('#welcome p')

    if (isMorning) welcome.textContent = 'Welcome, Good Morning!'
    else if (isAfternoon) welcome.textContent = 'Welcome, Good Afternoon!'
    else if (isEvening) welcome.textContent = 'Welcome, Good Evening!'

    const key = "It's a secret to everybody."

    localStorage.setItem(key, "It's dangerous to go alone, take this! (I haven't really played a Zelda game but I know the quote!)")

    const urls = [
        'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ].map(url => { (new Image()).src = url; return url })

    const images = document.querySelectorAll('#carousel img')

    let currentImage = 0
    const showImages = () => {
        const offset = currentImage % urls.length
        images.forEach((image, index) => {
            const imageIndex = (index + offset + urls.length) % urls.length
            image.src = urls[imageIndex]
        })
    }

    showImages()

    const prevButton = document.querySelector('#prev')
    const nextButton = document.querySelector('#next')

    prevButton.addEventListener('click', () => {
        currentImage--
        showImages()
    })

    nextButton.addEventListener('click', () => {
        currentImage++
        showImages()
    })

    setInterval(() => {
        currentImage++
        showImages()
    }, 5000)
}

// If on Todo page
if (todoPage) {
    const todoList = document.querySelector('.todo-list')
    const todoInput = document.querySelector('#new-todo')
    const addToDoButton = document.querySelector('#todoButton')
    const todos = JSON.parse(localStorage.getItem('todo-list')) || []

    // RenderTodos method that adds the user input to the array/local 
    // storage (Couldn't figure out a way to make this more concise)
    const renderTools = () => {
        if(todoInput.value != '') todos.push({text: todoInput.value, completed: false}) // Checks for blank input
        todos.forEach((todo) => { 
                const li = document.createElement('li')
                li.textContent = todo.text
                todoList.append(li)
        })
        localStorage.setItem('todo-list', JSON.stringify(todos))
    }

    // Calls the renderTools method on load
    renderTools()

    // Clears the list and then calls the function when the user clicks the button
    addToDoButton.addEventListener('click', () => {
        todoList.innerHTML = ''
        renderTools()
    })

    
}