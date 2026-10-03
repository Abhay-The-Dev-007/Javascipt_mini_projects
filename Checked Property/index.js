const mycheckbox = document.getElementById("mycheckbox");

const visabtn = document.getElementById("visabtn");
const masterCardbtn = document.getElementById("masterCardbtn");
const paypalbtn  = document.getElementById("paypalbtn");

const mySubmit  = document.getElementById("mySubmit");

const subResult = document.getElementById("subResult");
const PaymentResult = document.getElementById("PaymentResult");

mySubmit.onclick = function(){
    if(mycheckbox.checked){
        subResult.textContent = `You Are Subscribed`;

        if(visabtn.checked){
            PaymentResult.textContent = `You Are Paying With Visa Card`;
        }
        else if(masterCardbtn.checked){
            PaymentResult.textContent = `You Are Paying With Master Card`;
        }
        else if(paypalbtn.checked){
            PaymentResult.textContent = `You Are Paying With PayPal Card`;
        }
        else{
            PaymentResult.textContent = `You Must Select A Payment Type`;
        }

    }
    else{
        subResult.textContent = `You Are Not Subscribed`;
    }
}

