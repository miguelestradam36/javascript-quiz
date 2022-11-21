const mostRecentScore = localStorage.getItem('mostRecentScore')
const finalScore = document.querySelector('#finalScore')
const username = document.querySelector('#username')
const scoreBtn = document.querySelector('#scoreBtn')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
finalScore.innerText = mostRecentScore
console.log(finalScore.innerText)
username.addEventListener('keyup', () => {
    scoreBtn.disabled = !username.value
})
const score = {
        score: mostRecentScore,
        name: username.value
    }
console.log(highScores)
saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }
  highScores.push(score)

    highScores.reverse()
    highScores.splice(4)
    localStorage.setItem('highScores', JSON.stringify(highScores))
    console.log(highScores)
    window.location.assign('achievers.html')

}
