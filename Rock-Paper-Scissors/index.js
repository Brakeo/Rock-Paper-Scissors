i = 1;
roundChoice = prompt("how many rounds would you like to play? ");
while (i <= roundChoice){
playerChoice = prompt("rock, paper, or scissors? ")


let player = playerChoice.toLowerCase();
console.log(player);
function computerPlay(){

    let randInt = Math.floor(Math.random()* 3) + 1;
    switch(randInt){
        case 1:
            return "rock";
        case 2: 
            return "paper";
        case 3:
            return "scissors";
    }
}
function round(player, computerPlay){

    if(player == "rock" && computerPlay == "scissors"){
        alert ("You Win! Rock beats Scissors");
    }else if(player == "paper" && computerPlay == "scissors"){
        alert ("You Lose! Scissors cuts Paper");
    }else if(player == "scissors" && computerPlay == "rock"){
        alert ("You Lose! Rock beats Scissors");
    }else if(player == "scissors" && computerPlay == "paper"){
        alert ("You Win! Scissors cuts Paper");
    }else if(player == "rock" && computerPlay == "paper"){
        alert ("You Lose! Paper traps Rock");
    }else if(player == "paper" && computerPlay == "rock"){
        alert ("You Win! Paper traps Rock");
    }else if(player == computerPlay){
        alert ("Draw! " + player + " and " + computerPlay + " are equal!");
    }
}




console.log(player, computerPlay);

round(player, computerPlay());

i++
}


