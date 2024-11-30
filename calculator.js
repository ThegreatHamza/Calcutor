//this part is for declaring the variables in the DOM

button=document.querySelectorAll("button");
screen=document.querySelector(".screen");
deci=document.querySelector(".deci");

// this part is for displaying the inputs


for (let index = 0; index < 1; index++) {
   
    
     button.forEach(button => {
      button.addEventListener("click",function(e){
 
        let a=button.textContent
       

        if(a===("=")) {
            Calculate()    
        }

        else{screen.textContent+=a}

       if(a==='Undo'){screen.textContent=""}
       else if (a === "." && 
            screen.textContent.split(/[+\-*/]/)[0].includes(".") ) {
            deci.disabled = true;  
            }
        else if (a==="+"||a==="-"||a==="*"||a==="/") {
            deci.disabled = false;
          }  
        else if (a === "." && 
            screen.textContent.split(/[+\-*/]/)[1].includes(".") ) {
                deci.disabled = true;   
        }

}


)})}

//This part is for setting up the functions for the calculator

function add(c,b) {
    return c+b
}

function subtract(c,b) {
    return c-b
}

function multiply(c,b) {
    return c*b
}

function divide(c,b) {
    return c/b
}



// This part is for calculating the results and displaying them on the screen



function Calculate() {
let b,c

    if(screen.textContent.includes("+")) {

         c=parseFloat((screen.textContent).split("+")[0])
         b=parseFloat((screen.textContent).split("+")[1])
     screen.textContent=add(c,b)  }

    else if(screen.textContent.includes("-")) {
        c=parseFloat((screen.textContent).split("-")[0])
        b=parseFloat((screen.textContent).split("-")[1])
        screen.textContent=subtract(c,b)  }  
        
    else if(screen.textContent.includes("*")) {
        c=parseFloat((screen.textContent).split("*")[0])
        b=parseFloat((screen.textContent).split("*")[1])
            screen.textContent=multiply(c,b)  }

    else if(screen.textContent.includes("/")) {
        c=parseFloat((screen.textContent).split("/")[0])
        b=parseFloat((screen.textContent).split("/")[1])
                screen.textContent=divide(c,b)  }

    

    else{screen.textContent='Sorry It is too diffucult for me !'}

}


