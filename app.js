const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}.`);

console.log("what race do you want to choose?");
const race = prompt(`Please select human elf and dwarf. `)
console.log(`Your chosen race is ${race}.`);

console.log(`what weapons do you want to choose?`)
const weapon = prompt(`1=sword amd shield, 2=battle axe,.3=bow and arrow.`)
//sort and shield has a numerical value of 1, battle axe has a numerical value of 2, bow and arrow has a numerical value of 3




const character = { 
    name:`${username}`, 
    race:`${race}`,
    weapontype: `${weapon}`,
    weaponChoice: () => {
        if (character.weapontype = 1) {
            console.log(`sword and shield`);
        }
        else if (character.weapontype = 2) {
            console.log(`battle axe`); 
        }
        else if (character.weapontype = 3) {
            console.log(`bow and arrow`);
        }   
    }, 
    
    
}

console.log(`Your weapon is ` +  character.weaponChoice());
    console.log(character );
    