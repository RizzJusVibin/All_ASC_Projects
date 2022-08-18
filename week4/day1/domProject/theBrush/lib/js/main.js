buttonElement.addEventListener('click', onClick)

alert('Click Me')

function onClick(){
    const img = document.querySelector('#rengar')
    img.src = "assets/rengar.png"
    alert('You have been deleted!')
}