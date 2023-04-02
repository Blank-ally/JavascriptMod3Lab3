/*
NOTE: EVENT LISTENERS
  -Event listeners are a better alternative for an onclick="functionName()" in the HTML
  -An event listener attaches a function to an event. 
  -Multiple event listeners can be used with multiple function.
  -Event listeners can listen for a named function or an anonymous function
  -Some problems will have an event listener--these are not required for this lab or this modules assignment
*/





//====PROBLEM ONE====

//This event listener listens for a "click" event and triggers the function "problemOne()" on click
//Note that the event listener references the function name only (no parantheses after)

//EVENT LISTENER SETUP:
//---Get the button:
        let problemOneSubmit = document.getElementById("problemOneRunBtn");
//---Add an event listener to the button:
        //Event type: click
        //Triggered function: problemOne
        problemOneSubmit.addEventListener("click", problemOne);


//EVENT FUNCTION:
function problemOne() {
    //YOUR CODE FOR PROBLEM ONE GOES HERE
 const result = document.getElementById('problemOneOutput');
 const input = document.getElementById('problemOneInput').valueAsNumber;
 result.textContent = '';
    for(let i = 0; i < input; i++){
        result.textContent += i + ' ';
    }
}






//====PROBLEM TWO====
let ProblemTwoSubmit = document.getElementById('problemTwoRunBtn');

ProblemTwoSubmit.addEventListener('click',problemTwo);






function problemTwo(){
        const input = document.getElementById('problemTwoInput').valueAsNumber;
        const result = document.getElementById('problemTwoOutput');
        result.textContent = '';

        for(let i = 0;i< input; i++ ){
                result.textContent += i + ' ';

        }
}

//====PROBLEM THREE====
let problemThreeInputOne = document.getElementById('problemThreeInputOne');
let problemThreeInputTwo = document.getElementById('problemThreeInputTwo');
problemThreeInputOne.addEventListener('change',problemThree);
problemThreeInputTwo.addEventListener('change',problemThree);

function problemThree(){
        debugger
        const result = document.getElementById('problemThreeOutput');
        result.textContent = '';
        const input1 = document.getElementById('problemThreeInputOne').valueAsNumber;
        const input2 = document.getElementById('problemThreeInputTwo').valueAsNumber;
        for(let i = input1; i > input2; i--){
                result.textContent += i + ' ';
        }
}





