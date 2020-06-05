let inputDirection = {
    x: 0,
    y: 0
}

let lastInput = {
    x: 0,
    y: 0
}

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            if (lastInput.x !== 0) return
            inputDirection = {
                x: -1,
                y: 0
            }
        } else {
            if (lastInput.x !== 0) return
            inputDirection = {
                x: 1,
                y: 0
            }
        }                       
    } else {
        if ( yDiff > 0 ) {
            if (lastInput.y !== 0) return
            inputDirection = {
                x: 0,
                y: -1
            }
        } else { 
            if (lastInput.y !== 0) return
            inputDirection = {
                x: 0,
                y: 1
            }
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp":
            if (lastInput.y !== 0) break
            inputDirection = {
                x: 0,
                y: -1
            }
            break
        case "ArrowDown":
            if (lastInput.y !== 0) break
            inputDirection = {
                x: 0,
                y: 1
            }
            break
        case "ArrowLeft":
            if (lastInput.x !== 0) break
            inputDirection = {
                x: -1,
                y: 0
            }
            break
        case "ArrowRight":
            if (lastInput.x !== 0) break
            inputDirection = {
                x: 1,
                y: 0
            }
            break
    }
})

export function getInputDirection() {
    lastInput = inputDirection
    return inputDirection
}