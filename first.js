let user = 0;
let comp = 0;
let userWinning = 0;
let compwinning = 0;

const choice = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const btn = document.querySelector("#btn");



const compChoice =() => {
    let option = ["Rock","Paper","Scissors"];
    let compIndex = Math.floor(Math.random()*3);  // Here we are genarating radom number 
    return option[compIndex];

    // In this function, we are genarating random number so computer will show every time diffrent option from option arr 

};

const draw =() => {
    console.log("Game is Draw");
    msg.innerText = "Game Draw, Play Again !";
    msg.style.backgroundColor = "#2C514C";

    // Here i write logic for if game will draw 

};

// const reset = (userscore,compscore) =>{
//     if(userScore === 10){

//     }

// }

const showWinner = (userWin,useridx,compidx) => {
    if(userWin)
    {
        console.log("You Win this Game.....");
        msg.innerText = `You Win, Your ${useridx} beats ${compidx}`;
        msg.style.backgroundColor = "green";
        userWinning++;
        userScore.innerText = userWinning;

    }

    else
    {
        console.log("You Lose this game");
        msg.innerText = `You lose, Your ${compidx} beats ${useridx}`;
        msg.style.backgroundColor = "red";
        compwinning++;
        compScore.innerText = compwinning;

    }
    /*
    In this function, we are checking for winner, if user value is true,
    user will win alone with msg and update the score or in case computer will win userValue is false, 
    then display msg and update the score.

    */
    // reset(userScore,compScore);
};

// Define a function named playGame that takes a parameter userchoice
const playGame = (userchoice) => {
    // Assign the value of userchoice to a variable useridx
    let useridx = userchoice;
    // Log the user's choice to the console
    console.log("User choise:",useridx);
    // Call the function compChoice to generate the computer's choice and assign it to compidx
    let compidx = compChoice();
    // Log the computer's choice to the console
    console.log("Computer choise :",compidx);
    // If userchoice and computer choice are the same, call the draw function
    if(useridx === compidx){
        draw();  
    }
    // If userchoice and computer choice are different, determine the winner
    else{
        // Initialize a variable userWin to true
        let userWin = true;
        // Determine the winner based on user's choice being "Rock"
        if(useridx === "Rock"){
            // If computer's choice is "Paper", user does not win, otherwise user wins
            userWin = compidx === "Paper"? false : true ;
        }
        // Determine the winner based on user's choice being "Paper"
        else if(useridx === "Paper"){
            // If computer's choice is "Scissors", user does not win, otherwise user wins
            userWin = compidx === "Scissors"? false : true ;
        }
        // Determine the winner based on user's choice being "Scissors"
        else{
            // If computer's choice is "Rock", user does not win, otherwise user wins
            userWin = compidx ==="Rock" ? false : true ;
        }
        // Show the winner based on the determined result
        showWinner(userWin,useridx,compidx);
    }
};


choice.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        let userChoiceId = choice.getAttribute("id");
        playGame(userChoiceId);
    })
    // Here we add event listner on every img which has diffrent name so we can track which event is click
});

btn.addEventListener("click", () => {
    console.log("resert btn was clicked...");
    userScore.innerText = 0;
    compScore.innerText = 0;

    // Here we again add event on reset button so you can reset game
});