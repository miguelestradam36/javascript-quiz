/*
Constant variables
---
*/
const scoresList = document.querySelector('#scoresList') // Get HTML tag
const highScores = JSON.parse(localStorage.getItem("highScores")) || [] // JSON data
/*
Insert data into HTML
*/
scoresList.innerHTML = highScores.map(score => {
   return `<li class="scoreAchievers">${score.name} - ${score.score}</li>`
}).join("")
