// ROCK PAPER SCISSORS

let rps = ['rock', 'paper', 'scissors'];
let player_score = 0, computer_score = 0;
let player_pick, computer_pick;
let message_content;

const message = document.querySelector('p.message');
const player_img = document.querySelector('div.p_img');
const computer_img = document.querySelector('div.c_img');
const buttons = document.querySelectorAll('button');


let computerPlay = () =>{
    random = Math.floor(Math.random() * rps.length);
    if(random == 0){
        computer_img.style.cssText = "background-image: url('/img/r_r.png');";
    } else if(random == 1){
        computer_img.style.cssText = "background-image: url('/img/r_p.png');";
    } else if(random == 2){
        computer_img.style.cssText = "background-image: url('/img/r_s.png');";
    }
    return (rps[random]);
}

let playRound = (p, c) => {
    if ((p === "rock" && c === "paper") || (p === "paper" && c === "scissors") || (p === "scissors" && c === "rock")){
        computer_score++;
        console.log("You lose the round! " + p + " loses to " + c);
        message_content = "You lose the round! " + p + " loses to " + c;
        message.textContent = message_content;
    } else if ((c === "rock" && p === "paper") || (c === "paper" && p === "scissors") || (c === "scissors" && p === "rock")){
        player_score++;
        console.log("You win the round! " + p + " beats " + c);
        message_content = "You win the round! " + p + " beats " + c;
        message.textContent = message_content;
    } else if (p === c){
        console.log("Draw! You both picked " + p);
        message_content = "Draw! You both picked " + p;
        message.textContent = message_content;
    }
    console.log("You: " + player_score + " Computer: " + computer_score);
}

let game = (user_id) =>{

    
    computer_pick = computerPlay();
    console.log(user_id);
    playRound(user_id, computer_pick);
    if((player_score == 5) || (computer_score == 5)){
        if(player_score = 5){
            console.log("Player Wins!");
        } else {
            console.log("Computer Wins!");
        }
    }
    

    //ask player if they want to play again
    //if yes, then set player_score and computer_score to 0 again and game()
}

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        if(button.id == 1){
            player_pick = "rock"
        } else if (button.id == 2){
            player_pick = "paper"
        } else if (button.id ==  3){
            player_pick = "scissors"
        }
        game(player_pick);
    });
});
