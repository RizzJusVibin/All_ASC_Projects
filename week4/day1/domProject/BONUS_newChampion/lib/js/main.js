let pykeContainer = document.createElement("div");
let pykeHeading = document.createElement("h2");
pykeHeading.innerHTML = 'Pyke, the bloodharbor ripprt';
pykeContainer.appendChild(pykeHeading);

let container = document.querySelector(".main_container");
container.appendChild(pykeContainer);

pykeContainer.classList.add("champ_container", "pyke")
pykeContainer.style.color='#92fdfe'
pykeContainer.style.backgroundImage = "url('../../assets/pyke.jpg")