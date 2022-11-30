let questions = [
{question: 'What is JavaScript?',
choice1: 'JavaScript is a scripting language used to make the website interactive',
choice2: 'JavaScript is an assembly language used to make the website interactive',
choice3: 'JavaScript is a compiled language used to make the website interactive',
choice4: 'None of the mentioned',
answer: 1,
},
{question: 'Which of the following is correct about JavaScript?',
choice1: 'JavaScript is an Object-Based language',
choice2: 'JavaScript is Assembly-language',
choice3: 'JavaScript is an Object-Oriented language',
choice4: 'JavaScript is a High-level language',
answer: 1,
},
{question: 'Among the given statements, which statement defines closures in JavaScript?',
choice1: 'JavaScript is a function that is enclosed with references to its inner function scope',
choice2: 'JavaScript is a function that is enclosed with references to its lexical environment',
choice3: 'JavaScript is a function that is enclosed with the object to its inner function scope',
choice4: 'None of the mentioned',
answer: 2,
},
{question: 'Arrays in JavaScript are defined by which of the following statements?',
choice1: 'It is an ordered list of values',
choice2: 'It is an ordered list of objects',
choice3: 'It is an ordered list of string',
choice4: 'It is an ordered list of functions',
answer: 1,
},
{question: 'Which of the following is not javascript data types??',
choice1: 'Null type',
choice2: 'Undefined type',
choice3: 'Number type',
choice4: 'All of the mentioned',
answer: 4,
},
{question: 'Where is Client-side JavaScript code is embedded within HTML documents?',
choice1: 'A URL that uses the special javascript:code',
choice2: 'A URL that uses the special javascript:protocol',
choice3: 'A URL that uses the special javascript:encoding',
choice4: 'A URL that uses the special javascript:stack',
answer: 2,
},
{question: 'Which of the following object is the main entry point to all client-side JavaScript features and APIs?',
choice1: 'Position',
choice2: 'Window',
choice3: 'Standard',
choice4: 'Location',
answer: 2,
},
{question: 'Which of the following can be used to call a JavaScript Code Snippet?',
choice1: 'Function/Method',
choice2: 'Preprocessor',
choice3: 'Triggering Event',
choice4: 'RMI',
answer: 1,
},
{question: 'Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?',
choice1: 'will work perfectly well on a Windows Machine',
choice2: 'will be displayed as JavaScript text on the browser',
choice3: 'will throw errors and exceptions',
choice4: 'must be restricted to a Unix Machine only',
answer: 1,
},
{question: 'What is the basic difference between JavaScript and Java?',
choice1: 'Functions are considered as fields',
choice2: 'Functions are values, and there is no hard distinction between methods and fields',
choice3: 'Variables are specific',
choice4: 'There is no difference',
answer: 2,
},
{question: 'Why JavaScript Engine is needed?',
choice1: 'Both Compiling & Interpreting the JavaScript',
choice2: 'Parsing the javascript',
choice3: 'Interpreting the JavaScript',
choice4: 'Compiling the JavaScript',
answer: 3,
},
{question: 'Which of the following methods/operation does javascript use instead of == and != ?',
choice1: 'JavaScript uses equalto()',
choice2: 'JavaScript uses equals() and notequals() instead',
choice3: 'JavaScript uses bitwise checking',
choice4: 'JavaScript uses === and !== instead',
answer: 4,
},
{question: 'Why event handlers is needed in JS?',
choice1: 'Allows JavaScript code to alter the behaviour of windows',
choice2: 'Adds innerHTML page to the code',
choice3: 'Change the server location',
choice4: 'Performs handling of exceptions and occurrences',
answer: 1,
},
{question: 'Which of the following is not a framework?',
choice1: 'JavaScript .NET',
choice2: 'JavaScript',
choice3: 'Cocoa JS',
choice4: 'jQuery',
answer: 2,
},
{question: 'Which of the following is the property that is triggered in response to JS errors?',
choice1: 'onclick',
choice2: 'onerror',
choice3: 'onmessage',
choice4: 'onexception',
answer: 2,
},
{question: 'Which of the following is not an error in JavaScript?',
choice1: 'Missing of Bracket',
choice2: 'Division by zero',
choice3: 'Syntax error',
choice4: 'Missing of semicolons',
answer: 2,
},
{question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
choice1: 'Throws an error',
choice2: 'Ignores the statements',
choice3: 'Gives a warning',
choice4: 'None of the above',
answer: 2,
},
{question: 'Which of the following methods can be used to display data in some form using Javascript?',
choice1: 'document.write()',
choice2: 'document.log()',
choice3: 'document.alert()',
choice4: 'All of the above',
answer: 4,
},
{question: 'How can a datatype be declared to be a constant type?',
choice1: 'let',
choice2: 'var',
choice3: 'constant',
choice4: 'const',
answer: 4,
},
{question: 'Which of the following scoping type does JavaScript use?',
choice1: 'Sequential',
choice2: 'Segmental',
choice3: 'Lexical',
choice4: 'Literal',
answer: 3,
}
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
const SCORE_POINTS = 5
const MAX_QUESTIONS = 20
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









































