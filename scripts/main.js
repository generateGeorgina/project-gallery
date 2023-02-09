// buttonA toggle function
function clickedA() {
    // get the description
    var myDescription = document.getElementById('descriptionA');
    // get the button, so we can change what it says
    var myButton = document.getElementById('buttonA');
    // get the current display value of the button
    var displaySetting = myDescription.style.display;
    // now toggle the description and button text, depending on the current state
    if (displaySetting == 'block') {
        //description is visible - hide it
        myDescription.style.display = 'none';
        // change button text
        myButton.innerHTML = 'Read description';
    } else {
        // description is hidden - show it
        myDescription.style.display = 'block';
        //change button text
        myButton.innerHTML = 'Hide description';
    }
}

// buttonB toggle function
function clickedB() {
    // get the description
    var myDescription = document.getElementById('descriptionB');
    // get the button, so we can change what it says
    var myButton = document.getElementById('buttonB');
    // get the current display value of the button
    var displaySetting = myDescription.style.display;
    // now toggle the description and button text, depending on the current state
    if (displaySetting == 'block') {
        //description is visible - hide it
        myDescription.style.display = 'none';
        // change button text
        myButton.innerHTML = 'Read description';
    } else {
        // description is hidden - show it
        myDescription.style.display = 'block';
        //change button text
        myButton.innerHTML = 'Hide description';
    }
}

// buttonC toggle function
function clickedC() {
    // get the description
    var myDescription = document.getElementById('descriptionC');
    // get the button, so we can change what it says
    var myButton = document.getElementById('buttonC');
    // get the current display value of the button
    var displaySetting = myDescription.style.display;
    // now toggle the description and button text, depending on the current state
    if (displaySetting == 'block') {
        //description is visible - hide it
        myDescription.style.display = 'none';
        // change button text
        myButton.innerHTML = 'Read description';
    } else {
        // description is hidden - show it
        myDescription.style.display = 'block';
        //change button text
        myButton.innerHTML = 'Hide description';
    }
}

// buttonD toggle function
function clickedD() {
    // get the description
    var myDescription = document.getElementById('descriptionD');
    // get the button, so we can change what it says
    var myButton = document.getElementById('buttonD');
    // get the current display value of the button
    var displaySetting = myDescription.style.display;
    // now toggle the description and button text, depending on the current state
    if (displaySetting == 'block') {
        //description is visible - hide it
        myDescription.style.display = 'none';
        // change button text
        myButton.innerHTML = 'Read description';
    } else {
        // description is hidden - show it
        myDescription.style.display = 'block';
        //change button text
        myButton.innerHTML = 'Hide description';
    }
}

// buttonE toggle function
function clickedE() {
    // get the description
    var myDescription = document.getElementById('descriptionE');
    // get the button, so we can change what it says
    var myButton = document.getElementById('buttonE');
    // get the current display value of the button
    var displaySetting = myDescription.style.display;
    // now toggle the description and button text, depending on the current state
    if (displaySetting == 'block') {
        //description is visible - hide it
        myDescription.style.display = 'none';
        // change button text
        myButton.innerHTML = 'Read description';
    } else {
        // description is hidden - show it
        myDescription.style.display = 'block';
        //change button text
        myButton.innerHTML = 'Hide description';
    }
}

//execute event listener "click" on button A
var readDescription = document.getElementById('buttonA').addEventListener("click", clickedA);
//execute event listener "click" on button B
var readDescription = document.getElementById('buttonB').addEventListener("click", clickedB);
//execute event listener "click" on button C
var readDescription = document.getElementById('buttonC').addEventListener("click", clickedC);
//execute event listener "click" on button D
var readDescription = document.getElementById('buttonD').addEventListener("click", clickedD);
//execute event listener "click" on button E
var readDescription = document.getElementById('buttonE').addEventListener("click", clickedE);