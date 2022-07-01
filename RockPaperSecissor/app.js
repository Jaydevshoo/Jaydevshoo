// get elements

 const computerChoiceDisplay = document.getElementById('computer-choice')
 const userChoiceDisplay = document.getElementById('user-choice')
 const resultDisplay = document.getElementById('result')

 const possibleChoice = document.querySelectorAll('button')
 
 let userChoice ;
 let computerChoice;
 let result;

 possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice
    // console.log(userChoice)
    getcomputerChoice();
    getresult();
 }));

 function getcomputerChoice(){
     const randomNumber = Math.floor(Math.random() * possibleChoice.length)
    //  console.log(randomNumber)
        
     if(randomNumber === 1){
        computerChoice = 'rock'
     }
     if(randomNumber === 2){
        computerChoice = 'paper'
     }
     if(randomNumber === 3){
        computerChoice = 'secissor'
     }
     computerChoiceDisplay.innerHTML = computerChoice
    
 }

 function getresult(){
    if(computerChoice === userChoice){
        result = 'its draw'
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win'
    }
    if(computerChoice === 'rock' && userChoice === 'secissor'){
        result = 'you lost'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lost'
    }
    if(computerChoice === 'paper' && userChoice === 'secissor'){
        result = 'you win'
    }
    if(computerChoice === 'secissor' && userChoice === 'rock'){
        result = 'you win'
    }
    if(computerChoice === 'secissor' && userChoice === 'paper'){
        result = 'you lost'
    }

    resultDisplay.innerHTML = result
 }