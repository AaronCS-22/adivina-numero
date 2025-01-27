const INITIAL_SCORE = 20
const MAX_NUMBER = 20

let score
let highscore = localStorage.getItem('highscore') || 0
let numAleat

const messageField = document.querySelector('.message')
const scoredFile = document.querySelector('.score')
const highscoreField = document.querySelector('.highscore')
const numberField = document.querySelector('.number')
const guessField = document.querySelector('.guess')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')

init_content()

function init_content() {
  score = INITIAL_SCORE
  numAleat = Math.trunc(Math.random() * MAX_NUMBER) + 1
  checkButton.disabled = false
  messageField.textContent = 'Start guessing...'
  numberField.textContent = '?'
  scoredFile.textContent = score
  guessField.value = ''
  highscoreField.textContent = highscore
  document.body.style.backgroundColor = '#222'
}

guessField.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    checkNumber()
  }
})

againButton.addEventListener('click', restart)
checkButton.addEventListener('click', checkNumber)

function checkNumber() {
  const numActual = guessField.value

  if (!isNaN(numActual) && numActual <= MAX_NUMBER && numActual >= 1) {
    if (numActual == numAleat) {
      ganador()
    } else {
      fallo(numActual)
    }
  } else {
    messageField.textContent = 'Please enter a number between 1 and 20'
  }
}

function ganador() {
  if (score > highscore) {
    highscore = score
    localStorage.setItem('highscore', highscore)
    highscoreField.textContent = highscore
  }
  messageField.textContent = 'You win!'
  checkButton.disabled = true
  numberField.textContent = numAleat
  backgroundColor('green')
}

function fallo(numActual) {
  messageField.textContent = numActual > numAleat ? 'Too high' : 'Too low'
  score--
  scoredFile.textContent = score
  if (score <= 0) {
    messageField.textContent = 'You lose'
    checkButton.disabled = true
    numberField.textContent = numAleat
  }
  backgroundColor('#aa0000')
}

function restart() {
  init_content()
}

async function backgroundColor(color) {
  document.body.style.backgroundColor = color
  document.body.style.transition = 'background-color 0.33s ease-in-out'
  await new Promise((resolve) => setTimeout(resolve, 500))
  document.body.style.backgroundColor = '#222'
}
