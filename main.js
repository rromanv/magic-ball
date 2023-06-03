<<<<<<< HEAD
const ballContainer = document.querySelector('#ball-container')
const question = document.querySelector('#question')
const shakeButton = document.querySelector('#shake-button')

let answer = null

const messages = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes - definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy, try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
]

const createAnswer = () => {
  const answerElement = document.createElement('p')
  answerElement.classList.add('fade', 'text-center', 'fs-3', 'fw-bold', 'bg-white', 'text-danger', 'px-2', 'py-3', 'rounded', 'w-50', 'position-absolute', 'top-50', 'start-50', 'translate-middle')

  const seed = Math.random() * messages.length - 1
  const randomIndex = seed > 0 ? Math.floor(seed) : Math.ceil(seed)
  
  answerElement.innerText = messages[randomIndex]

  return answerElement
}

const shakeBall = () => {
  ballContainer.classList.add('shake')
  if (answer) answer.remove()

  answer = createAnswer()

  setTimeout(()=>{
    ballContainer.classList.remove('shake')
    ballContainer.append(answer)
  }, 1000)

}

const checkQuestion = () => {
  return question.value.length > 0
}

shakeButton.addEventListener('click', () => {
  if(checkQuestion()) shakeBall()
})

question.addEventListener('keyup', (e) => {
  shakeButton.disabled = !checkQuestion()

  if (e.key === 'Enter' && checkQuestion()) shakeBall()
})
=======
>>>>>>> parent of 36d04b7 (finished)
