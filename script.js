
// select button 
var add = document.getElementById("add");

// select inout field
var input_text = document.getElementById("input_text");

// select div that we have to display 
var display = document.getElementById("to_display");


add.addEventListener('click' , function()
{
    // create element like paragraph , anchor and section 
    var text = document.createElement('p');

    // add styling to the value that we have inserted 
    text.classList.add('styling');

    // get value in the created element 
    text.innerText = input_text.value;  


    //then push that value in the that division or something that we have created
    display.appendChild(text);

    // clear the input box
    input_text.value = "";

    /*
    text.addEventListener('click' , function()
    {
        text.style.textDecoration = "line-through";
    });
    */

    text.addEventListener('dblclick' , function()
    {
        display.removeChild(text);
    });


});

