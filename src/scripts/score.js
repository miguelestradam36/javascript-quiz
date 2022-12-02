/*
Constant Variables
---
HTML tags and data
*/
const mostRecentScore = localStorage.getItem('mostRecentScore') // HTML tag
const finalScore = document.querySelector('#finalScore')
const username = document.querySelector('#username')
const scoreBtn = document.querySelector('#scoreBtn')
const highScores = JSON.parse(localStorage.getItem('highScores')) || [] // JSON data

finalScore.innerText = mostRecentScore // Set HTML tag inner text
console.log(finalScore.innerText) // Log data into javascript console
username.addEventListener('keyup', () => {
    scoreBtn.disabled = !username.value // disable keys
})
/*
Constant variable
---
|Construct Object for list
*/
const score = {
        score: mostRecentScore,
        name: username.value
    }
/*
Construct List of score object
*/
console.log(highScores)
saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }
  highScores.push(score)

    highScores.reverse()
    highScores.splice(20)
    localStorage.setItem('highScores', JSON.stringify(highScores))
    console.log(highScores)
    window.location.assign('achievers.html')

}
