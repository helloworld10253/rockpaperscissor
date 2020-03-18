let cmpChoice = document.querySelector("#computerchoice");
let winner = document.querySelector(".winner");
let p1Choice = document.querySelector("#playerchoice");
let p1Score = document.querySelector(".score1");
let p2Score = document.querySelector(".score2");
    //funtions

function shake(){
   
    let updown = setInterval(up, 5)
    

    let y = 0;

    function up(){
        if(y<=10){
            y+= 0.5;
            p1Choice.style.top = y + "%";
            cmpChoice.style.top =  y + "%";
        }

        if(y==10){
            clearInterval(updown)
            setInterval(()=>{
                if(y >= 0){
                    y -= 0.5;
                    // console.log(y);
                    p1Choice.style.top =  y + "%";
                    cmpChoice.style.top =  y + "%";
                }
           }, 10)
        }
        
    }
}



function showResult(result){
    let resultText = document.querySelector("#result");
    let resultText2 = document.querySelector("#resultComp");
    let plus1 = document.querySelector("#player1");
    let plus2 = document.querySelector("#player2");

    resultText.className = "";
    resultText2.className = "";

    if(result === "lose"){
        resultText.classList.toggle("lose");
        resultText2.classList.toggle("win");
        plus2.classList.toggle("fade");
        setTimeout( ()=> plus2.classList.toggle("fade"), 800);
        turn(".score2");
        resultText2.innerHTML = "WIN";
        score2 ++;
        checkScore(score1, score2)
    }else if(result ==="win"){
        resultText.classList.toggle("win");
        resultText2.classList.toggle("lose");
        resultText2.innerHTML = "LOSE";
        plus1.classList.toggle("fade");
        setTimeout( ()=> plus1.classList.toggle("fade"), 800);
        turn(".score1");
        score1 ++;
        checkScore(score1, score2)
    }else{
        resultText.classList.toggle("draw");
        resultText2.classList.toggle("draw");
        resultText2.innerHTML = "TIE";
    }

    
    
    function turn(player) {
        let ta = 0;
        setInterval(() => {
            if(ta < 360){
                ta++;
                console.log(ta);
                console.log(player);
                document.querySelector(player).style.transform = "rotateY("+ ta +"deg)"
            }
        }, 1);
    }

    function checkScore(score1, score2){
        
        let winnerText = document.querySelector(".winner h1");
        if(score1 == 5){
            winnerText.innerHTML = "You Win!"
            winner.style.backgroundColor = "#60c510";
            winner.classList.toggle("fade");
        }else if(score2 == 5){
            winnerText.innerHTML = "You Lose!"
            winner.style.backgroundColor = "#940000";
            winner.classList.toggle("fade");
        }
    }

    setTimeout(() => {
        p1Score.innerHTML = score1;
        p2Score.innerHTML = score2;
    }, 1200);
    resultText.innerHTML = result.toUpperCase();

    
    
}

let showChoices = () => {
    let choices = document.querySelector(".choice-container");
    choices.classList.toggle("fade");
}



let pick = document.querySelector(".pick");
let score1 = 0;//player 1 score
let score2 = 0;//player 2 score


pick.addEventListener("click", showChoices);

let btnWinner = document.querySelector(".btnWinner");
btnWinner.addEventListener("click", ()=> {
    winner.classList.toggle("fade");
    score1 = 0;
    score2 = 0;
    p1Score.innerHTML = score1;
    p2Score.innerHTML = score2;
    cmpChoice.setAttribute("src", "rock.png")
    p1Choice.setAttribute("src", "rock-left.png")
});

// pick choices
let choice = document.querySelectorAll(".choice");
let result = "";

Array.from(choice).forEach(n => {
    n.addEventListener("click", choose => {
        let p1 = n.getAttribute("data-choice");
        let count = 2;
        showChoices();
        setInterval(() => {
            if(count != 0){
                shake();
                count--;
            }
        }, 500);
        cmpChoice.setAttribute("src", "rock.png")
        p1Choice.setAttribute("src", "rock-left.png")
        setTimeout(()=> battle(p1) , 1300);
        console.log(p1);

    });
    
})


function battle(p1){

        let power1 = 0;
        let cpupower = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        document.querySelector("#playerchoice").setAttribute("src", "./" + p1 + ".png" )
        if(p1 == "rock-left"){
            power1 = 1;
        }else if(p1 == "scissors-left"){
            power1 = 2;
        }else{
            power1 = 3;
        }

        if(power1 == 1 && cpupower == 1){
            // rock vs rock
            result = "tie";
            
            document.querySelector("#computerchoice").setAttribute("src", "rock.png" )

        }else if(power1 == 1 && cpupower == 2){
            // rock vs scissor
            result = "win";
            document.querySelector("#computerchoice").setAttribute("src", "scissors.png" )
        }else if(power1 == 1 && cpupower == 3){
            // rock vs paper
            document.querySelector("#computerchoice").setAttribute("src", "paper.png" )
            result = "lose";
        }

        if(power1 == 2 && cpupower == 2){
            // rock vs rock
            document.querySelector("#computerchoice").setAttribute("src", "scissors.png" )
            result = "tie";
        }else if(power1 == 2 && cpupower == 1){
            // rock vs scissor
            document.querySelector("#computerchoice").setAttribute("src", "rock.png" )
            result = "lose";
        }else if(power1 == 2 && cpupower == 3){
            // rock vs paper
            document.querySelector("#computerchoice").setAttribute("src", "paper.png" )
            result = "win";
        }

        if(power1 == 3 && cpupower == 3){
            // rock vs rock
            document.querySelector("#computerchoice").setAttribute("src", "paper.png" )
            result = "tie";
        }else if(power1 == 3 && cpupower == 1){
            document.querySelector("#computerchoice").setAttribute("src", "rock.png" )
            // rock vs scissor
            result = "win";
        }else if(power1 == 3 && cpupower == 2){
            // rock vs paper
            document.querySelector("#computerchoice").setAttribute("src", "scissors.png" )
            result = "lose";
        }
        console.log(result);
        showResult(result);
}



