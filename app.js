const prompt = require('prompt-sync')();

let racetype
let weapontype


const username = prompt('What is your name? ');
console.log(`Your name is ${username}.`);




//This is selecting the race. it takes the users input, and checks it agains 3 predetermained entries.
// if the user enters something that does not work, we call the function back at the bottom
console.log("what race do you want to choose?");
pickRace = () => {
    const raceChoice = prompt(`Please select Human, Elf, or Dwarf. `)
    if (raceChoice === `Human`) {
        racetype = `Human`
    }
    else if (raceChoice === `Elf`) {
        racetype = `Elf`
    }
    else if (raceChoice === `Dwarf`) {
        racetype = `Dwarf`
    }
    else {
        console.log(`invalid selection, choose better`)
        pickRace()
    }
}
pickRace()
console.log(`Your chosen race is ${racetype}.`);









//sort and shield has a numerical value of 1, battle axe has a numerical value of 2, bow and arrow has a numerical value of 3
//This function is to take imput from the user, and pick a weapon from 3 predetermained weapon choices. 
console.log(`what weapons do you want to choose?`)
pickWeapon = () => {
    const weaponChoice = prompt(`1=sword amd shield, 2=battle axe,.3=bow and arrow.`) //asking the user what they would like to pick
    if (weaponChoice === `1`) { //comparing the choice the user made to the predetermained selection
        weapontype = `Sword and Shield`//assigning the weapontype
    }
    else if (weaponChoice === `2`) {//comparing the choice the user made to the predetermained selection
        weapontype = `Battle Axe`//assigning the weapontype
    }
    else if (weaponChoice === `3`) {//comparing the choice the user made to the predetermained selection
        weapontype = `Bow and Arrow`//assigning the weapontype
    }
    else {console.log(`invalid choice, choose better`);//if the user did not pick an option that is predetermained, this calls the function again. 
    weaponChoice}
    pickWeapon()//call the function again. 
    
}
pickWeapon()
console.log(`Your choice of weapon is ${weapontype}`);




const character = { 
    name:`${username}`, 
    race:`${racetype}`,
    weapon: `${weapontype}`,
    // weaponChoice: () => {        Tried to put this as part of a method but it did not work.
    //     if (character.weapontype = 1) {
    //         console.log(`sword and shield`);
    //     }
    //     else if (character.weapontype = 2) {
    //         console.log(`battle axe`); 
    //     }
    //     else if (character.weapontype = 3) {
    //         console.log(`bow and arrow`);
    //     }   
    // }, 
    
    
}

// console.log(`Your weapon is ` +  ${character.weapon});
    console.log(character );
    