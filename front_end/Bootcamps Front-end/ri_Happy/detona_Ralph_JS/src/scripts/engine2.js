const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        lives: document.querySelector("#lives-you"),
        ampulheta: document.querySelector(".hourglass"),
        timeLeft: document.querySelector("#time-left"),
        scoreYou: document.querySelector("#score-you"),
        //        scoreRalph: document.querySelector("#score-ralph")
    },
    values: {
        gameVelocity: 1000,
        hitPosition: 0,
        //        resultRalph: 0,
        result: 0,
        curretTime: 30,
        resultScore: 0,
        life: 3,
    },
    actions: {
        timerId: setInterval(randomSquare, 5000),
        countDownTimerId: setInterval(countDown, 1000),
        timer: setInterval(randomAmbu, 0),
    }
}

function countDown() {
    state.view.timeLeft.textContent = state.values.curretTime;
    state.view.scoreYou.textContent = state.values.resultScore;
    let tempo = state.values.curretTime--;
    //    let score = state.values.resultScore;
    if (tempo <= 0) {
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.randomAmbuT);
        clearInterval(state.actions.timerId);
        let vidas = state.view.lives.textContent--;
        alert(`Game Over! O tempo de parar nosso amigo terminou ${vidas}`);
    }


    /*
    if (score >= 15) {
        score++
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.randomAmbuT);
        clearInterval(state.actions.timerId);
        alert("Parabéns Jovem você consegueiu parar o Detona Ralph!!" + state.values.result);
    }*/
}


function playSound(audioName) {
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.2;
    audio.play();
}

/* -----------------------------  Interação RALPH  ----------------------------------- */

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                let score = state.values.resultScore++;
                state.view.scoreYou.textContent = state.values.resultScore;
                state.values.hitPosition = randomSquare.id;
                if (score >= 4) {
                    alert("Parabéns Jovem você consegueiu parar o Detona Ralph!!");
                    clearInterval(state.actions.countDownTimerId);
                    clearInterval(state.actions.randomAmbuT);
                    clearInterval(state.actions.timerId);
                }
            }
            playSound("hit");
        })
    });
}

/* -----------------------------  Interação Ampulheta  ----------------------------------- */

function randomSquareA() {
    state.view.squares.forEach((squareA) => {
        squareA.classList.remove("ampulheta");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomAmbu = state.view.squares[randomNumber];
    randomAmbu.classList.add("ampulheta");
    state.values.scoreRalph = randomAmbu.id;
}


function addListenerAmpulheta() {
    state.view.squares.forEach((squareA) => {
        squareA.addEventListener("mousedown", () => {
            if (squareA.id === state.values.curretTime) {
                state.values.curretTime=+2;
                state.view.timeLeft.textContent = state.values.curretTime;
                state.values.curretTime = randomSquare.id;
            }
            playSound("hit");
        })
    });
}


function initialize() {
    addListenerHitBox();
    addListenerAmpulheta();
}

initialize();