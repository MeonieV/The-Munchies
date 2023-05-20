/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// Author: Meonie Vrey C22132


// search function that shows content based on user input
function search() {
  var input = document.getElementById('userInput'); //variable that stores the user input
  var filter = input.value.toUpperCase(); //variable that allows upper & lower case from user input
  var ul = document.getElementById("recipeList"); //variable that lists the buttons of the recipes
  var li = ul.getElementsByTagName('li'); //variable holds the value of the buttons individually
  
  var txtValue;
  var i;
  var txt;

  // loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    txt = li[i].getElementsByTagName("button")[0];
    txtValue = txt.textContent || txt.innerText; 
    if (txtValue.toUpperCase().indexOf(filter) > -1) { 
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


// selects the buttons and meal sections
const mealList = document.querySelector('.mealLists');
const meal = document.querySelectorAll('.meals');

// add an event listener to the meal list
mealList.addEventListener('click', handleClick, false);

// function runs when a meal button is clicked
function handleClick(e) {
 
  // check to see if its a button
  if (e.target.matches('button')) {

    // removes/hides the content in the div related to the meal list
    meal.forEach(meals => meals.classList.remove('show'));

    // targets the `id` from the button's list
    const { id } = e.target.dataset;

    // variable that will match the meal with the same id as the button clicked
    const select = `.meals[id="${id}"]`;

    // selects the div and shows the content
    document.querySelector(select).classList.add('show');
    //hides any recipe that were open when new buttons are clicked
    hideRecipe();
  }
}

//function that resets the user input and returns to the begining
function back(){
   // removes/hides the content in the div related to the meal list
   meal.forEach(meals => meals.classList.remove('show'));
   
   //clears the user input
   document.getElementById('userInput').value = '';
   search();
   
   //hides any recipe that were still open
   hideRecipe();
}

//function that shows the recipe
function showRecipe() {
   //select the recipe class
  const x = document.getElementsByClassName('recipe');
  
  //loops throught the different recipe elements to select the relevant one and reveal it
  for (const stream of x){
      stream.style.display="block";
  }
}

//function that hides the recipe
function hideRecipe() {
  //select the recipe class
  const x = document.getElementsByClassName('recipe');
  
  //loops throught the different recipe elements to select the relevant one and hide it
  for (const stream of x){
      stream.style.display="none";
  }
}
