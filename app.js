let rps = ['rock', 'paper', 'scissors'];
let p_score = 0, c_score = 0;
let p_pick;
let c_pick;
let msg_txt_1, msg_txt_2;

const message = document.querySelector('p.message');
const sub_message = document.querySelector('p.sub_message')
const p_img = document.querySelector('div.p_img');
const c_img = document.querySelector('div.c_img');
const buttons = document.querySelectorAll('button');
const message_2 = document.querySelector('span.center_words');
const selection = document.querySelector('div.selection');
const player_score = document.querySelector('p.p_score');
const computer_score = document.querySelector('p.c_score');

// Pcode
// Start a game
// Take in player's choice from user
// Generate computer's choice
// Decide who wins
// Give point + message about who wins
// Repeat until
// If either of their scores are == 5, then declare who wins
// Ask if they would like to play again



// Take in player's choice from user
let playerChoice = ()=>{
    buttons.forEach((button) =>{
        button.addEventListener('click', ()=>{
            if(button.id == 1){
                p_img.style.backgroundImage = "url('./img/l_r.png')";
                p_pick = "rock";
            } else if (button.id == 2){
                p_img.style.backgroundImage = "url('./img/l_p.png')";
                p_pick = "paper";
            } else if (button.id ==  3){
                p_img.style.backgroundImage = "url('./img/l_s.png')";
                p_pick = "scissors";
            }
            game(p_pick);
        });
    });
}

// Generate computer's choice
let computerChoice = ()=>{
    random = Math.floor(Math.random() * rps.length);
    if(random == 0){
        c_img.style.backgroundImage = "url('./img/r_r.png')";
    } else if(random == 1){
        c_img.style.backgroundImage = "url('./img/r_p.png')";
    } else if(random == 2){
        c_img.style.backgroundImage = "url('./img/r_s.png')";
    }
    return (rps[random]);
}

// Play round
let playRound = (p, c)=>{
    if ((p === "rock" && c === "paper") || (p === "paper" && c === "scissors") || (p === "scissors" && c === "rock")){
        c_score++;
        msg_txt_1 = "You lose the round!";
        msg_txt_2 = p + " loses to " + c;
        message.textContent = msg_txt_1;
        sub_message.textContent = msg_txt_2;
    } else if ((c === "rock" && p === "paper") || (c === "paper" && p === "scissors") || (c === "scissors" && p === "rock")){
        p_score++;
        msg_txt_1 = "You win the round!";
        msg_txt_2 = p + " beats " + c;
        message.textContent = msg_txt_1;
        sub_message.textContent = msg_txt_2;
    } else if (p === c){
        msg_txt_1 = "Draw!";
        msg_txt_2 = "You both picked " + p;
        message.textContent = msg_txt_1;
        sub_message.textContent = msg_txt_2;
    }
    player_score.textContent = p_score;
    computer_score.textContent = c_score;
}

//  If Game is over, ask them to play again.
let playAgain = () => {
    let new_message = document.createElement('button');
    new_message.textContent = "Play again?";
    message_2.appendChild(new_message);
    selection.style.display = "none";

    new_message.addEventListener('click', ()=>{
        selection.style.display = "flex";
        p_score = 0;
        c_score = 0;
        message_2.removeChild(new_message);
        player_score.textContent = p_score;
        computer_score.textContent = c_score;
        p_img.style.backgroundImage = "url('./img/l_r.png')";
        c_img.style.backgroundImage = "url('./img/r_r.png')";
        message.textContent = "Choose: Rock, Paper, or Scissors";
        sub_message.textContent = "";
        
    });   
}

// Start a game
let game = (player_pick)=>{
    let computer_pick = computerChoice();
    playRound(player_pick, computer_pick);
    // Repeat until
    // If either of their scores are == 5, then declare who 
    if((p_score == 5) || (c_score == 5)){
        if(p_score === 5){
            message.textContent = "Player Wins!";
        } else {
            message.textContent = "Computer Wins!";
        }
        playAgain();
    }
}

playerChoice();