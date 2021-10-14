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

const colorOfEachSquare = []

for (let index = 0; index < squaresPerColumn * squearesPerRow; index++) {
    const square = document.createElement('div')
    let randomColor = getRandomColor()
    square.setAttribute('draggable', true)
    square.setAttribute('id', index)

    // If the two squares that are above this new square have the same color as randomColor gets
    // pick a new random color
    while (colorOfEachSquare[index - squearesPerRow] === randomColor && colorOfEachSquare[index - squearesPerRow * 2] === randomColor) {
        randomColor = getRandomColor()
    }
    // If the two squares that are at the left of this new square have the same color as randomColor gets
    // pick a new random color
    while (colorOfEachSquare[index - 1] === randomColor && colorOfEachSquare[index - 2] === randomColor) {
        randomColor = getRandomColor()
    }

    colorOfEachSquare.push(randomColor)
    square.style.backgroundColor = randomColor
    $squareContainer.appendChild(square)
}

let draggedSquare
let draggedSquareColor
let overedSquare
let overedSquareColor

$squareContainer.ondrag = (e) => {
    draggedSquare = $squareContainer.childNodes[Number(e.target.id) + 1]

    if(!(draggedSquare.style.backgroundColor === 'transparent')) {
        draggedSquareColor = $squareContainer.childNodes[Number(e.target.id) + 1].style.backgroundColor
    }

    draggedSquare.style.backgroundColor = 'transparent'
}

$squareContainer.ondragover = (e) => {
    overedSquare = $squareContainer.childNodes[Number(e.target.id) + 1]
    overedSquareColor = $squareContainer.childNodes[Number(e.target.id) + 1].style.backgroundColor

    
}

$squareContainer.ondragend = (e) => {
    let validMoves = [
        Number(draggedSquare.id) + squearesPerRow,
        Number(draggedSquare.id) - squearesPerRow,
        Number(draggedSquare.id) + 1,
        Number(draggedSquare.id) - 1
    ]
    
    if (validMoves.includes(Number(overedSquare.id))) {
        draggedSquare.style.backgroundColor = overedSquareColor
        overedSquare.style.backgroundColor = draggedSquareColor
    } else {
        draggedSquare.style.backgroundColor = draggedSquareColor
    }
}