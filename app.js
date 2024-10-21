const prompt = require('prompt-sync')();

let racetype
let weapontype
let playeLife = 10
let computerLife = 10

//This is selecting the race. it takes the users input, and checks it agains 3 predetermained entries.
// if the user enters something that does not work, we call the function back at the bottom
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

//This function is to take imput from the user, and pick a weapon from 3 predetermained weapon choices. 
//sort and shield has a numerical value of 1, battle axe has a numerical value of 2, bow and arrow has a numerical value of 3
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


const username = prompt('What is your name? ');
console.log(`Your name is ${username}.`);

console.log("what race do you want to choose?");
pickRace()//calling the pick race function from the top of the page
console.log(`Your chosen race is ${racetype}.`);

console.log(`what weapons do you want to choose?`)
pickWeapon()//calling the pick weapon function from the top of the page. 
console.log(`Your choice of weapon is ${weapontype}`);



//character sheet
const character = { 
    name:`${username}`, 
    race:`${racetype}`,
    weapon: `${weapontype}`,
    backpack: [flint]
    
    
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
    



// Start of game framework

//declare values

//attack and heal functions

//player turn
playerturn = () => {
    console.log(`player life is ${playeLife} and computer life is ${computerLife}`)

    const playerTurnChoice = prompt(`tbd`)//todo
        if (playerTurnChoice === `attack`) {
            //attack function lose health from computer
            if (weaponChoice === `1`) {
                computerLife -= 1 //sword and shield extra defense for the shield 1 attack 2 defence
            }
            else if (weaponChoice === `2`) {
                computerLife -= 3 // batte axe all attack 3 attack
            }
            else if (weaponChoice === `3`) {
                computerLife -= 2 //bow gets extra defense due to mobility 2 attack 1 defence
            }
        }
        else if (playerTurnChoice === `heal`) {
            //player heal function add health to player 
        }
        else {
            console.log(`invalid choice please choose better!`)
            playerturn()
        }      

    console.log(`player life is ${playeLife} and computer life is ${computerLife}`)
}
computerturn = () => {
    //todo with the random math.

    //computer gets to pick attack or heal
}





//computer turn