

let rps = ['rock', 'paper', 'scissors'];

let computerPlay = () =>{
    random = Math.floor(Math.random() * rps.length);
    return (rps[random]);
}

let playRound = (player, computer) => {
    if(player === computer){
        return ("Draw! You both picked " + player);
    } else if(player === "rock" && computer === "paper"){
        return ("You lose! " + computer + " beats " + player);
    } else if(player === "paper" && computer === "scissors"){
        return ("You lose! " + computer + " beats " + player);
    } else if(player === "scissors" && computer === "rock"){
        return ("You lose! " + computer + " beats " + player);
    } else if(computer === "rock" && player === "paper"){
        return ("You win! " + player + " beats " + computer);
    } else if(computer === "paper" && player === "scissors"){
        return ("You win! " + player + " beats " + computer);
    } else if(computer === "scissors" && player === "rock"){
        return ("You win! " + player + " beats " + computer);
    }
}

let game = () =>{
    let score = 0;
    for(let i = 0; i < 5; i++){
        let user_input = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();
        console.log(playRound(user_input, computerPlay()));
    }
    
}

