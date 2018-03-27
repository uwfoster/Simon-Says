// [X]On page load, set click "listeners" on each quadrant to listen for a clickdocument.addEventListener('click', quadrant);
document.addEventListener('click', quadrant);

// [X]Create a function that selects a random color from the available colors and applies a class of `active` to that quadrant
function activeColor(){
  var randomColor = Math.floor( Math.random() *3) + 1;
  randomColor == active;
}

// [X] will need to have an array of available colors (should match the `id`s on your divs)
var color_array = ["red", "blue", "yellow", "green"];

// [X]you can use getElementById(color_variable) with a variable
var simons_color = document.getElementById(color_variable);

  // [X]save the color_variable so we can compare that against what was clicked on
  if(quadrant == simons_color){
    console.log("You win");
  } else {

  //[]When a quadrant is clicked, see if it matches the color that was just clicked on
      for (var i = 0; i < quadrants.length; i++){
           var quadrant = quadrants[i];

           // This most likely will not work because instructions previously
           // stated to create listeners and my logical thinking is not correct
           // I also did not declare the variable "quadrants".
           // var quadrants = document.getElementByClassName('quadrant');
           quadrant.addEventListener('click', simon);

           // [X]if it does, call the function to set a few color as active
           // This function call should probably be somewhere else in the script
           activeColor();

           // [X]if it doesn't they lose and you can show them an alert
           console.log("You lose");
      }
    }

/*
- [X]On page load, set click "listeners" on each quadrant to listen for a click
- [X]Create a function that selects a random color from the available colors and applies a class of `active` to that quadrant
  - [] will need to have an array of available colors (should match the `id`s on your divs)
  - []you can use getElementById(color_variable) with a variable
  - []save the color_variable so we can compare that against what was clicked on
- []When a quadrant is clicked, see if it matches the color that was just clicked on
  - []if it does, call the function to set a few color as active
  - []if it doesn't they lose and you can show them an alert
*/
