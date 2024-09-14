/* Initial state and set-up format with array and objects to be used for the overall game and score keeping */
let selectionMade = false;
const rps = ["rock", "paper", "scissors"];
const results = { 
    win: 0, 
    tie: 0, 
    loss: 0 
};

for(let option in results) {
    document.getElementById(option).textContent = results[option];
}

document.getElementById('play-again').onclick = function(e) {
    resetBoard();
}

/* These are the items for the player to choose from and the functionality provided by y'all */
document.getElementById('rock').onclick = function(e){
    if (!selectionMade) playGame('rock');
}
document.getElementById('paper').onclick = function(e){
    if (!selectionMade) playGame('paper');
}
document.getElementById('scissors').onclick = function(e){
    if (!selectionMade) playGame('scissors');
}

/* The game play function operates off the combined information from other functions combined. */
function playGame(userChoice){
    const computerChoice = computerChooses();
    const outcome = compare(userChoice, computerChoice);
    updateResults(outcome);
    updateWebpage(userChoice, computerChoice, outcome); // DO NOT EDIT THIS LINE
}

/* Here I have given the "computer makes a choice" function a "Math.random" function to create this. */
function computerChooses(){
   let turn = Math.floor(Math.random() * 3);
     return pick = rps[turn]; //using the Math.random function to pick from array to return choice
}

/* This is my comparison function in order to show if you have won, loss, or tied. I used a multi-dimensional array in the fucntion to figure it out. The original piece of paper that i drew this up on was a mess*/
function compare(a, b){
    let c = rps.indexOf(a);
    let d = rps.indexOf(b);
    const choices = [
        ["tie", "loss", "win"],
        ["win", "tie", "loss"],
        ["loss", "win", "tie"]
    ];
    return choices[c][d];
};

/*This function controls the scoring operation of the game. I chose to use all 3 ways of incrementation, just to see if I remembered how to do them properly. I chose the letter "g" cause i am a BOSS muhahahahaha*/
function updateResults(g){
    switch (g) {
        case "win":
            return results.win += 1; 
        case "loss":
            return results.loss++;
        default:
            return ++results.tie;
    }
};
    
// Updates the Webpage results and choices with DOM manipulation
function updateWebpage(userChoice, computerChoice, outcome){

    selectionMade = true;

    // update the user choice
    document.getElementById('user-selection').textContent = `You chose ${userChoice}!`;
    document.getElementById(userChoice).style.cursor = "default";
    for (let option of rps) {
        if(option != userChoice) {
            document.getElementById(option).style.display = "none";
        }
    }

    // update the computer choice
    document.getElementById('computer-selection').textContent = `Computer chose ${computerChoice}!`;
    document.getElementById(`computer-${computerChoice}`).style.display = "inline-block";

    // update the resultts
    document.getElementById('game-outcome').textContent = (outcome === "loss") ? "You lost!" : `You ${outcome}!`
    document.getElementById(outcome).textContent = results[outcome];
}//end update web function

// Resets the Board with DOM manipulation
function resetBoard() {
    
    selectionMade = false;

    // reset the text on the board
    document.getElementById('user-selection').textContent = "Make your selection:";
    document.getElementById('computer-selection').textContent = "Computer chooses:";

    // reset the images on the board
    for (let option of rps) {
        document.getElementById(option).style.display = "inline-block";
        document.getElementById(option).style.cursor = "pointer";
        document.getElementById(`computer-${option}`).style.display = "none";
    }

    // reset the outcome message
    document.getElementById('game-outcome').textContent = "";
}
/* A lot of my commenting may have been unnecessary, but with all the extra stuff of y'alls I deleted I figured I could add a little more explaination in for the next guys who come along and read it. Gotta get used to the industry standard. */