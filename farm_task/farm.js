const fs = require('fs');
//read data from JSON file
const animalsJSON = fs.readFileSync('farm_task/animals.json','utf-8');
const animalsdata = JSON.parse(animalsJSON);

//getSumAnimalsLegs has 1 argument
//dataObject - object which contains data from read json file
//return integer value of animals legs count
function getSumAnimalsLegs(dataObject){
    const {pigs, chicken , cows} = dataObject;

    const legsSum = (pigs*4)+(chicken*2)+(cows*4);
    return legsSum;
};

const sumLegsOnFarm = getSumAnimalsLegs(animalsdata);
console.log(sumLegsOnFarm); //132 for current data set