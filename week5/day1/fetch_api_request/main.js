const url = 'https://randomuser.me/api?gender=female';
let data;

fetch(url) //returning data from api call
.then(function(response){//fetched data is now a response
    console.log(response);
    return response.json();//format into json
})
.then(function(myJson){//json is passed
    data = myJson;
    console.log(myJson);//log json
    const email = myJson.results[0].email;
    const p = document.createElement('p');
    p.innerHTML = email;
    document.body.appendChild(p);

    const img = myJson.results[0].picture.large;
    const imgElement = document.createElement('img');
    imgElement.src = img;
    document.body.appendChild(imgElement);
})

console.log(data);