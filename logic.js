const $squareContainer = document.querySelector('.square__container')
const squaresPerColumn = 8
const squearesPerRow = 8

const candyColorPalette = [
    'red',
    'blue',
    'yellow',
    'green',
    'purple',
    'orange',
]

getRandomColor = () => {
    let index = Math.floor(Math.random() * candyColorPalette.length)
    return candyColorPalette[index]
}

for(let i = 0; i < squaresPerColumn * squearesPerRow; i++){
    const square = document.createElement('div')
    let randomColor = getRandomColor()
    square.style.backgroundColor = randomColor
    $squareContainer.appendChild(square)
}