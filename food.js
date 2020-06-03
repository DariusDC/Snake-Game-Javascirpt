import {onSnake, expandSnake} from "./snake.js" 
import { randomGridPos } from "./grid.js"

let food = getRandomGridPosition()

const expansionRate = 1

export function update() { 
    if (onSnake(food)) {
        expandSnake(expansionRate)
        food = getRandomGridPosition()
    }
}


export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add("food")
    gameBoard.appendChild(foodElement)
}

function getRandomGridPosition() {
    let newFood 
    while (newFood == null || onSnake(newFood)) {
        newFood = randomGridPos()
    }
    return newFood
}

