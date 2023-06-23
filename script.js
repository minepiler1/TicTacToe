const turn = document.getElementById("turn-el")
const reset = document.getElementById("reset-el")
const buttons = document.querySelectorAll(".button")
const button = document.querySelector(".button")

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")
const button8 = document.getElementById("button8")
const button9 = document.getElementById("button9")

const blueScore = document.getElementById("blueScore")
const redScore = document.getElementById("redScore")

reset.addEventListener("click", function() {
  button.innerHTML = ""
  turn.innerHTML = "Turn: X"
  buttons.forEach(function(button) {
    button.disabled = false
  })
})

buttons.forEach(function(button) {

  let countBlue = 0
  let countRed = 0

  reset.addEventListener("click", function() {
    button.innerHTML = ""
    turn.innerHTML = "Turn: X"
  })

  button.addEventListener("click", function() {
    if (turn.innerHTML === `Turn: X`) {
      button.innerHTML = `X`
      turn.innerHTML = `Turn: O`
      button.disabled = true
    }
    
    else if (turn.innerHTML === `Turn: O`) {
      button.innerHTML = `O`
      turn.innerHTML = `Turn: X`
      button.disabled = true
    }

    if (button1.innerHTML === "O" && button2.innerHTML === "O" && button3.innerHTML === "O") {
      countBlue += 1
      blueScore.innerHTML =  `Blue score: ${countBlue}`
      buttons.forEach(function(button) {
        button.disabled = true
      })

    } else if (button1.innerHTML === "X" && button2.innerHTML === "X" && button3.innerHTML === "X") {
      countRed += 1
      redScore.innerHTML =  `Red score: ${countRed}`
      buttons.forEach(function(button) {
        button.disabled = true
      })
    }

    if (button4.innerHTML === "O" && button5.innerHTML === "O" && button6.innerHTML === "O") {
      countBlue += 1
      blueScore.innerHTML =  `Blue score: ${countBlue}`
      buttons.forEach(function(button) {
        button.disabled = true
      })

    } else if (button4.innerHTML === "X" && button5.innerHTML === "X" && button6.innerHTML === "X") {
      countRed += 1
      redScore.innerHTML =  `Red score: ${countRed}`
      buttons.forEach(function(button) {
        button.disabled = true
      })
    }

    if (button7.innerHTML === "O" && button8.innerHTML === "O" && button9.innerHTML === "O") {
      countBlue += 1
      blueScore.innerHTML =  `Blue score: ${countBlue}`
      buttons.forEach(function(button) {
        button.disabled = true
      })

    } else if (button9.innerHTML === "X" && button8.innerHTML === "X" && button9.innerHTML === "X") {
      countRed += 1
      redScore.innerHTML =  `Red score: ${countRed}`
      buttons.forEach(function(button) {
        button.disabled = true
      })
    }

    if (button1.innerHTML === "O" && button4.innerHTML === "O" && button7.innerHTML === "O") {
      countBlue += 1
      blueScore.innerHTML =  `Blue score: ${countBlue}`
      buttons.forEach(function(button) {
        button.disabled = true
      })

    } else if (button1.innerHTML === "X" && button4.innerHTML === "X" && button7.innerHTML === "X") {
      countRed += 1
      redScore.innerHTML =  `Red score: ${countRed}`
      buttons.forEach(function(button) {
        button.disabled = true
      })
    }

    if (button2.innerHTML === "O" && button5.innerHTML === "O" && button8.innerHTML === "O") {
      countBlue += 1
      blueScore.innerHTML =  `Blue score: ${countBlue}`
      buttons.forEach(function(button) {
        button.disabled = true
      })

    } else if (button2.innerHTML === "X" && button5.innerHTML === "X" && button8.innerHTML === "X") {
      countRed += 1
      redScore.innerHTML =  `Red score: ${countRed}`
      buttons.forEach(function(button) {
        button.disabled = true
      })
    } 

    if (button3.innerHTML === "O" && button6.innerHTML === "O" && button9.innerHTML === "O") {
      countBlue += 1
      blueScore.innerHTML =  `Blue score: ${countBlue}`
      buttons.forEach(function(button) {
        button.disabled = true
      })

    } else if (button3.innerHTML === "X" && button6.innerHTML === "X" && button9.innerHTML === "X") {
      countRed += 1
      redScore.innerHTML =  `Red score: ${countRed}`
      buttons.forEach(function(button) {
        button.disabled = true
      })
    }

    if (button1.innerHTML === "O" && button5.innerHTML === "O" && button9.innerHTML === "O") {
      countBlue += 1
      blueScore.innerHTML =  `Blue score: ${countBlue}`
      buttons.forEach(function(button) {
        button.disabled = true
      })

    } else if (button1.innerHTML === "X" && button5.innerHTML === "X" && button9.innerHTML === "X") {
      countRed += 1
      redScore.innerHTML =  `Red score: ${countRed}`
      buttons.forEach(function(button) {
        button.disabled = true
      })
    }

    if (button3.innerHTML === "O" && button5.innerHTML === "O" && button7.innerHTML === "O") {
      countBlue += 1
      blueScore.innerHTML =  `Blue score: ${countBlue}`
      buttons.forEach(function(button) {
        button.disabled = true
      })

    } else if (button3.innerHTML === "X" && button5.innerHTML === "X" && button7.innerHTML === "X") {
      countRed += 1
      redScore.innerHTML =  `Red score: ${countRed}`
      buttons.forEach(function(button) {
        button.disabled = true
      })
    }

  })
    
})
