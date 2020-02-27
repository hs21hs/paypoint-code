let player1PointButton = document.getElementById("player1PointButton")
let player2PointButton = document.getElementById("player2PointButton")
let scoreInUI = document.getElementById("score")
let chooseServerForm = document.getElementById("chooseServerForm")
let serverInUI = document.getElementById("serving")

const scoreArray = [0,15,30,40]
let player1Score = 0
let player2Score = 0
let servingPlayer = "player1"
let finalScore = null
let deuce = false

const addPoint = (player) => {
    if(finalScore === "game player 1" || finalScore === "game player 2" ){
        alert("game over")
    }else{
        if(player === "player1"){player1Score += 1}
        if(player === "player2"){player2Score +=1}
        updateScore()
    }
}

const updateScore = () => {
    if (deuce === false){deuceChecker()}

    if (deuce === true){
        if(player1Score === player2Score){setFinalScore(40,40)}
        if(player1Score - player2Score === 1){setFinalScore("A",40)}
        if(player2Score - player1Score === 1){setFinalScore(40,"A")}
        if(player1Score - player2Score === 2){finalScore = "game player 1"}
        if(player2Score - player1Score === 2){finalScore = "game player 2"}
    }else{
        if(player1Score === 4){finalScore = "game player 1"}
        else if(player2Score === 4){finalScore = "game player 2"}
        else {setFinalScore(scoreArray[player1Score],scoreArray[player2Score])}
    }
    scoreInUI.innerText = finalScore
}

const deuceChecker = () => {
    if (player1Score === 3 && player2Score ===3){deuce = true}
}

const setFinalScore = (p1Score, p2Score) => {
    if(servingPlayer === "player1"){finalScore = [p1Score, p2Score]}
    if(servingPlayer === "player2"){finalScore = [p2Score, p1Score]}
}

const chooseServer = (e) => {
    e.preventDefault()
    if (player1Score === 0 && player2Score === 0){servingPlayer = e.target.elements.serverSelect.value}
    else{ alert("cannot change server mid game")}
    updateServerInUI()
}

const updateServerInUI = () => {
    serverInUI.innerText = servingPlayer + " is serving"
}

updateScore()
updateServerInUI()

player1PointButton.addEventListener('click', () => {addPoint("player1")})
player2PointButton.addEventListener('click', () => {addPoint("player2")})
chooseServerForm.addEventListener('submit', (e) =>{chooseServer(e)})


    
