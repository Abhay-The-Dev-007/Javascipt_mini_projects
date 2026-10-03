
const minNum = 1;
const maxNum = 100;

const Answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
const guess = document.getElementById("guessing");
const mysubmit  = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
let running = true;

mysubmit.onclick = function(){
    if(!running) return;

    const guess1 = parseInt(guess.value, 10);
    if(isNaN(guess1)){
        subresult.textContent = `Please Enter A Valid Number`;
    }
    else if(guess1 < minNum || guess1 > maxNum){
        subresult.textContent =`Please Enter A Valid Number`;
    }
    else{
        attempts++;
        if(guess1 < Answer){
            subresult.textContent =`Too Low! Try again`;
        }
        else if(guess1 > Answer){
            subresult.textContent =`Too High! Try again`;
        }
        else{
            subresult.textContent =`Correct !! The Answer Was ${Answer}. It took ${attempts} attempts`;
            running = false;
        }
    }
}

