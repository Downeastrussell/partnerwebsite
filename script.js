var joshObject = {
    firstName: "Josh",
    lastName: "Havey",
    favoriteFoods: ["Steak", "Chicken"],
    firstJob: "Toy R' US",
    dreamJob: "Astronaut",
    greatestFear: "Spiders",
    homeTown: "Madison WV USA",
    secretTalents: ["Skiing", "hacky sack"],
    wouldSkyDive: true,
    petInfo: {
        type: "Cat",
        name: "Luna"
    }
}



var htmlString = `
    
    <h1 class="name">${joshObject.firstName} ${joshObject.lastName}</h1>
    <p class="job">${joshObject.firstJob}</p>
    <p class="dream">${joshObject.dreamJob}</p>
    <p class="fear">${joshObject.greatestFear}</p>
    <p class="hometown">${joshObject.homeTown}</p>
    <p class="talents">Josh has two talents, the first is ${joshObject.secretTalents[0]}, and the second is ${joshObject.secretTalents[1]}</p>
    <p class="skydive">${joshObject.wouldSkyDive}</p>
    <p class="petinfo">Josh has a ${joshObject.petInfo.type} and her name is ${joshObject.petInfo.name}</p>
    `                  
    document.querySelector("#personal-website").innerHTML = htmlString







