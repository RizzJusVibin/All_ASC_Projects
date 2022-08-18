const img = document.querySelector('#first');
// img.style.visibility = 'hidden'

// img.style.display = 'none';

img.remove();

const newImg = document.createElement("img");

const mainContainer = document.querySelector('.main-container');

mainContainer.appendChild(newImg);
newImg.src = 'assets/cry.png';