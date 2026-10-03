

const includeLowercase = document.getElementById("chars1");
const includeUppercase = document.getElementById("chars2");
const includenumbers = document.getElementById("chars3");
const includesymbols = document.getElementById("chars1");
const mysubmit = document.getElementById("mySubmit");
const passwordgenerated = document.getElementById("Passwordgenerated");



function generatePassword(length, includeLowerCase, includeupperCase, includeNumbers, includeSymbols){
    
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars= "0123456789";
    const symbolChars = "!@#$%^&*()_+?-=";
    
    let allowedChars = "";
    let password = "";

    if(includeLowerCase) allowedChars += lowerCaseChars;
    if(includeupperCase) allowedChars += upperCaseChars;
    if(includenumbers) allowedChars += numberChars;
    if(includeSymbols) allowedChars += symbolChars;

    if(length <= 0){
        return `(password length must be at least 1)`;
    }

    if(allowedChars.length === 0){
        return `(at least 1 set of characters must be used)`;
    }

    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

const passwordLengthChars = 12;

mysubmit.onclick = function(){

    const includeLowerCaseChars = includeLowercase.checked;
    const includeUpperCaseChars = includeUppercase.checked;
    const includeNumbersChars = includenumbers.checked;
    const includeSymbolsChars = includesymbols.checked;

    if(includeLowercase || includeUppercase || includenumbers || includesymbols){
        const password = generatePassword(passwordLength, includeLowerCaseChars, includeUpperCaseChars, includeNumbersChars, includeSymbolsChars);
        passwordgenerated.textContent = `your password is: ${password}`;
    }
    else{
        passwordgenerated.textContent = "Please Select at least one character type.";
    }
};
