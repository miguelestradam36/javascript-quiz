let questions = [
{question: 'What is the worl\'ds most populated country?',
choice1: 'usa',
choice2: 'china',
choice3: 'russia',
choice4: 'india',
answer: 2,
},
{question: 'What is the worl\'ds most populated country?',
choice1: 'usa',
choice2: 'china',
choice3: 'russia',
choice4: 'india',
answer: 2,
},
{question: 'What is the worl\'ds most populated country?',
choice1: 'usa',
choice2: 'china',
choice3: 'russia',
choice4: 'india',
answer: 2,
},
{question: 'What is the worl\'ds most populated country?',
choice1: 'usa',
choice2: 'china',
choice3: 'russia',
choice4: 'india',
answer: 2,
},
{question: 'What is the worl\'ds most populated country?',
choice1: 'usa',
choice2: 'china',
choice3: 'russia',
choice4: 'india',
answer: 2,
},
{question: 'What is the worl\'ds most populated country?',
choice1: 'usa',
choice2: 'china',
choice3: 'russia',
choice4: 'india',
answer: 2,
},
{question: 'What is the worl\'ds most populated country?',
choice1: 'usa',
choice2: 'china',
choice3: 'russia',
choice4: 'india',
answer: 2,
},
{question: 'What is the worl\'ds most populated country?',
choice1: 'usa',
choice2: 'china',
choice3: 'russia',
choice4: 'india',
answer: 2,
},
]
let currentQuestion = {}
let TrueAnswers = true 
let score = 0
let questionCounter = 0 
let availableQuestions = [] 
const question = document.querySelector('#QuestionText');
const choices = Array.from(document.querySelectorAll('.ChoiceText'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#scorenumber');
const progressBarFull = document.querySelector('#progressBarFull');
const SCORE_POINTS = 10
const MAX_QUESTIONS = 10
GetStareted = () => {
	questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}


getNewQuestion = () => {
	 if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('score.html')
}
questionCounter++
progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
const questionsRandNumber = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionsRandNumber]
question.innerText = currentQuestion.question
choices.forEach(choice => {
    const number = choice.dataset['number']
	 choice.innerText = currentQuestion['choice' + number]
    })
availableQuestions.splice(questionsRandNumber, 1)

  TrueAnswers = true
}
choices.forEach(choice => {
    choice.addEventListener('click', e => {
		if(!TrueAnswers) return
			TrueAnswers = false
		const selectedChoice = e.target
		const selectedAnswer = selectedChoice.dataset['number']
		let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        if(classToApply === 'correct') {
			incrementScore(SCORE_POINTS)
        }
		selectedChoice.parentElement.classList.add(classToApply)
		setTimeout(() => {
			selectedChoice.parentElement.classList.remove(classToApply)
			           getNewQuestion()
        }, 1000)
    })
})

incrementScore = number  => {
	score +=number
 scoreText.innerText = score
}
GetStareted()









































