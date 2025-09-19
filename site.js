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