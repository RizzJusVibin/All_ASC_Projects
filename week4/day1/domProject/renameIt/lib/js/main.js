// 2. In the "main.js" file, use the DOM to change the `h1` name of the item to "Frostfang"
// 3. Also, change the image to "Frostfang_item.png" found in the "assets" folder
//    - *Hint: you'll want to change the `src` of the `img` element*

const h1 = document.querySelector('#item_name')

h1.innerText = 'Frostfang'

const img = document.querySelector('#item_img')
img.src = "assets/Frostfang_item.png"