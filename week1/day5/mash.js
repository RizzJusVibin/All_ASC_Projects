function mash(){
        return("You will live in a " + getHome() + " and travel to " + getTravelCount() + " countries and have a " + getPet() + " and marry " + getSpouse() + " and go to " + getCollege())
}

let hmash = mash()
console.log(hmash)

function randNumGenerator(int){
    let randec = Math.random()
    let ranin = randec * int;
    let theint = Math.floor(ranin);
    return(theint)
}

function getHome(){
    if (process.argv[2] != null){
        let homes = ['Mansion', 'Castle', 'Shack', 'House', process.argv[2]]
        let homeGenerator = randNumGenerator(5)
        let homei = homes[homeGenerator]
        return(homei)
    }
    else{
        let homes = ['Mansion', 'Castle', 'Shack', 'House']
        let homeGenerator = randNumGenerator(4)
        let home = homes[homeGenerator]
    return(home)
    }
}

function getTravelCount() {
    let rannumh = randNumGenerator(101)
    return(rannumh)
}

function getPet(){
    if (process.argv[3] != null){
        let randomPets = ['Dog', 'Cat', 'Turtle', 'Roach', 'Mew', process.argv[3], process.argv[3], process.argv[3], process.argv[3], process.argv[3]]
        let petgen = randNumGenerator(11)
        let pet = randomPets[petgen]
        return(pet)
    }
    else{
        let randomPets = ['Dog', 'Cat', 'Turtle', 'Roach', 'Mew']
        let petgen = randNumGenerator(5)
        let pet = randomPets[petgen]
        return(pet)
    }
}

function getSpouse(){
    if (process.argv[4] != null){
        let randomSpouse = ['Ariana Grande', 'Obama', 'Trump', 'James Charles', process.argv[4]]
        let spousegen = randNumGenerator(5)
        let spouce = randomSpouse[spousegen]
        return(spouce)
    }
    else{
        let randomSpouse = ['Ariana Grande', 'Obama', 'Trump', 'James Charles']
        let spousegen = randNumGenerator(4)
        let spouse = randomSpouse[spousegen]
        return(spouse)
    }
}

function getCollege(){
    if (process.argv[5] != null){
        let randomCollege = ['Northwestern', 'UIC', 'Uni of Chicago', process.argv[5]]
        let collegegen = randNumGenerator(4)
        let college = randomCollege[collegegen]
        return(college)
    }
    else{
        let randomCollege = ['Northwestern', 'UIC', 'Uni of Chicago']
        let collegegen = randNumGenerator(3)
        let college = randomCollege[collegegen]
        return(college)
    }
}