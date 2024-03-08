let userScr =0;
let computerScr =0;

    const options = document.querySelectorAll(".option");
    const massageContainer= document.querySelector("#mess");

    const userScore = document.querySelector("#user");
    const comScore = document.querySelector("#computer");
  
// computer inputs---
const comChoice = () =>{
    const choices =["stone","paper","scissor"];
    const choiceIndex = Math.floor(Math.random() *3);// access any number between 0 to 3
    return choices[choiceIndex];
}

const drawGame =()=>{
    mess.innerText ="Game draw! Play again";
    mess.style.backgroundColor ="yellow";
    mess.style.color ="black";
}

const finalResult =(userWin, userChoice, comInput) =>{
    console.log(userWin);
    if(userWin){
        userScr++;
        userScore.innerText=userScr;
        mess.innerText = `You win! your ${userChoice} beats ${comInput}`;
        mess.style.backgroundColor ="green";
    }else{
        computerScr++;
        comScore.innerText=computerScr;        
        mess.innerText =`You lost!  ${comInput} beats  your ${userChoice}`;
        mess.style.backgroundColor ="red";
    }
};

const playGame = (userChoice)=>{

   const comInput = comChoice();
        console.log(userChoice);
        console.log(comInput);

    if(userChoice === comInput){ 

        drawGame();

    }else{
        let userWin = true;
        if(userChoice === "stone"){
            
           userWin =  comInput === "paper" ? false : true;

            } else if (userChoice === "paper"){

                 userWin = comInput === "scissor" ? false : true;

            } else {

                userWin = comInput === "stone" ? false : true;
            }
             finalResult(userWin,userChoice,comInput);

             
        }
    };


//user inputs---    
options.forEach((option) => {
    option.addEventListener("click",() =>{
        let userChoice = option.getAttribute("id")
        playGame(userChoice);        
    });
});



