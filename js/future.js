// Mouse over problem 1 
let onMouseOver = document.getElementById('onMouseOver');
onMouseOver.addEventListener('mouseover', MouseOver)

function MouseOver(){
alert('Mouse Over Event.')
}



$(document).ready(function(){
    debugger
    $('#onMouseOverJQuery').mouseover(function(){alert('Mouse Over Event using JQuery')});
});