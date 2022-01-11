// ROCK PAPER SCISSORS

let rps = ['rock', 'paper', 'scissors'];
let player_pick, computer_pick;
let player_score = 0, computer_score = 0;


let computerPlay = () =>{
    random = Math.floor(Math.random() * rps.length);
    return (rps[random]);
}

let playRound = () => {
    computer_pick = computerPlay();
    player_pick = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();

    if ((player_pick === "rock" && computer_pick === "paper") || (player_pick === "paper" && computer_pick === "scissors") || (player_pick === "scissors" && computer_pick === "rock")){
        computer_score++;
        console.log("You lose the round! " + computer_pick + " beats " + player_pick);
    } else if ((computer_pick === "rock" && player_pick === "paper") || (computer_pick === "paper" && player_pick === "scissors") || (computer_pick === "scissors" && player_pick === "rock")){
        player_score++;
        console.log("You win the round! " + player_pick + " beats " + computer_pick);
    } else if (player_pick === computer_pick){
        console.log("Draw! You both picked " + player_pick);
    }
    console.log("You: " + player_score + " Computer: " + computer_score);
}

let game = () =>{
    

    while(player_score < 5 && computer_score < 5){
        playRound();
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