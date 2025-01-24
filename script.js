const INITIAL_SCORE = 20
const MAX_NUMBER = 20

initData()

function initData() {
  let score = INITIAL_SCORE
  let highscore = 0
  let numAleat = Math.trunc(Math.random() * MAX_NUMBER) + 1
}

const messageField = document.querySelector('.message')
const scoredFile = document.querySelector('.score')
const highscoreField = document.querySelector('.highscore')
const numberField = document.querySelector('.number')
const gessField = document.querySelector('.guess')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')

checkButton.addEventListener('click', checkNumber)

function checkNumber() {
  // Ver numero introducido
}
