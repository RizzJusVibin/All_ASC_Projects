let interoParagraph = document.createElement("p");

introParagraph.innerText = 'Sweet!';

introParagraph.style.backgroundColor = '#353535';

const body = document.querySelector("body");

body.appendChild(introParagraph);

const pantherImage = document.querySelector('img');

pantherImage.remove();

let paragraphsArray = document.querySelectorAll("p")

// for (let i = 0; i < paragraphsArray.legnth; i++){
//     paragraphsArray[i].style.backgroundColor = 'yellow';
// }

for( let p of paragraphs){
    p,style.backgroundColor = 'yellow'
}