
const display= document.getElementById("display");

const button= document.querySelectorAll(".btn");

let currentInput="";

button.forEach((button) => {
    button.addEventListener("click", function(){
    const variable=button.textContent;

    if(variable ==="C"){
        currentInput=""
        display.textContent= "0";
        
    } else if (variable==="="){
        try{
            currentInput=eval(currentInput);
            display.textContent= currentInput;
        } catch (error){
            display.textContent="WEWE SOMA MAO";
            currentInput="";
        }
    } else{
       if(currentInput==="" && ["+","-","*","/"].includes(variable)){
        return;
       }
       currentInput+=variable;
       display.textContent=currentInput;

       } 
    });
});

