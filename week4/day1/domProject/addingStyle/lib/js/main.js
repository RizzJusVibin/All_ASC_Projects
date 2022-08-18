// 2. In the "main.js" file, use the DOM to change the `.right_side` background color to #d3c26f
// 3. To the names, add a yellow text-shadow with horizontal shadow of -6px, vertical shadow of 5px, and a blur-radius of 2px

const rightSideDiv = document.querySelector(".right_side");

rightSideDiv.style.backgroundColor = '#d3c26f';

const arrayOfNames = document.querySelectorAll('.name');

arrayOfNames[0].style.textShadow = '-6px 5px 2px yellow'
arrayOfNames[1].style.textShadow = '-6px 5px 2px yellow'