function clickedA(descriptionA) {
    // get the button
    var myDescription = document.getElementById('descriptionA');
    
    // get the current value of the b
    var displaySetting = myDescription.style.display;
    
    // also get the clock button, so we can change what it says
    var myButton = document.getElementById('buttonA')

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