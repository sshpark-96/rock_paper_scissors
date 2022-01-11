// ROCK PAPER SCISSORS

let rps = ['rock', 'paper', 'scissors'];
let player_score = 0, computer_score = 0;
let player_pick, computer_pick;


let computerPlay = () =>{
    random = Math.floor(Math.random() * rps.length);
    return (rps[random]);
}

let playRound = (p, c) => {
    if ((p === "rock" && c === "paper") || (p === "paper" && c === "scissors") || (p === "scissors" && c === "rock")){
        computer_score++;
        console.log("You lose the round! " + p + " loses to " + c);
    } else if ((c === "rock" && p === "paper") || (c === "paper" && p === "scissors") || (c === "scissors" && p === "rock")){
        player_score++;
        console.log("You win the round! " + p + " beats " + c);
    } else if (p === c){
        console.log("Draw! You both picked " + p);
    }
    console.log("You: " + player_score + " Computer: " + computer_score);
}

let game = () =>{

    while(player_score < 5 && computer_score < 5){
        computer_pick = computerPlay();
        player_pick = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();
        playRound(player_pick, computer_pick);
    }
    if(player_score > computer_score){
        console.log("Player Wins!");
    } else {
        console.log("Computer Wins!");
    }

    //ask player if they want to play again
    //if yes, then set player_score and computer_score to 0 again and game()
}

game();