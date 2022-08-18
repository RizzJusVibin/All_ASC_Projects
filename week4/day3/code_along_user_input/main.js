// we're grabbing the button with the id "submitButton"
const button = document.getElementById("submitButton");
​
// we're adding an event handler. When a user clicks on the button... the clickListener function will execute
button.addEventListener("click", clickListener);
​
function clickListener(event) {
  event.preventDefault(); // this prevents the page from refreshing after a user clicks the submit button
​
  //now let's grab the input element
  const inputElement = document.getElementById("username");
​
  // let's get the value attribute and store it in a variable;
​
  // let's display the value in an alert box.
​
  const userInput = inputElement.value;
  // the value attribute is essentially whatever the user types in the text box.
​
  //grab whatever the user typed in, and show me that message in an alert box.
  alert(userInput);
​
  // after the pop up is displayed, lets delete whatever is in the text box!
  userInput = "";
  // set the value to an empty string.
}
​
button.addEventListener("click", function (e) {
  console.log(e);
});