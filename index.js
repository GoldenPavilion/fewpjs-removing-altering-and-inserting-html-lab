// Write your code here!

const main = document.querySelector("main#main")
main.remove()

let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.id = 'victory'
newHeader.innerHTML = 'Cory is the champion!'