
const max=100;
const min=1;
const originalvalue=Math.floor(Math.random()*(max - min + min));

let Guessvalue;
let attempts=0;
let running = true;

let result=document.getElementById("result");



function Findnumber(){
  if(running){
      Guessvalue=document.getElementById("GuessNum").value;
      Guessvalue=Number(Guessvalue);
      
      if(isNaN(Guessvalue)){
        result.textContent=`Please enter a Valid number`;
      }
      else if(Guessvalue < min || Guessvalue > max){
        result.textContent=`Please enter a Valid number`;
      }

      else{
            attempts++;
            if(Guessvalue < originalvalue){
                result.textContent=`TOO LOW! TRY AGAIN!`;
                
            }
            else if(Guessvalue > originalvalue){
                result.textContent=`TOO HIGH! TRY AGAIN!`;
                
            }
            else{
                result.textContent=`CORRECT! The answer was ${originalvalue}.It took you ${attempts} attempts`;
                running=false;
            }
          }}

}