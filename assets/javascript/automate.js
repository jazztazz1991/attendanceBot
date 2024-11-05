import clipboardy from 'clipboardy';
import fs from 'fs';

let absent = 0
const roster = [
    { name: 'AboulHosn, Maher', attendance: false },
    { name: 'Alakulppi, Jaakob', attendance: false },
    { name: 'Alfaro, Adam', attendance: false },
    { name: 'Bass, Gregory', attendance: false },
    { name: 'Burrow, Seth', attendance: false },
    { name: 'Bush, Jorge', attendance: false },
    { name: 'Byers, Isaac', attendance: false },
    { name: 'Caldwell, John', attendance: false },
    { name: 'Casadevall, Sebastian', attendance: false },
    { name: 'Chance, Matthew', attendance: false },
    { name: 'D’cruz, Elizabeth', attendance: false },
    { name: 'Diallo, Salimatou', attendance: false },
    { name: 'Esasta, Kane', attendance: false },
    { name: 'Ferrario, Michele', attendance: false },
    { name: 'Fleming, Michael', attendance: false },
    { name: 'Foner, Asuanti', attendance: false },
    { name: 'Foster, Marie-Chantal', attendance: false },
    { name: 'Gayle, Owen', attendance: false },
    { name: 'Gianesi, Andre', attendance: false },
    { name: 'Idris, Sameer', attendance: false },
    { name: 'Imboden, Lukas', attendance: false },
    { name: 'Lal, Ranjeshni', attendance: false },
    { name: 'Lanes, Brandon', attendance: false },
    { name: 'Larsson, Isak', attendance: false },
    { name: 'Magri, Jake', attendance: false },
    { name: 'Mahmoudi, Parsa', attendance: false },
    { name: 'Mata, Victoria', attendance: false },
    { name: 'Middleton, Jacob', attendance: false },
    { name: 'Montgomery, Lauren', attendance: false },
    { name: 'Moody, Katrina', attendance: false },
    { name: 'Mora, Alexander', attendance: false },
    { name: 'Murfield, Brendan', attendance: false },
    { name: 'Murphy, Miiya', attendance: false },
    { name: 'Ray, Justin', attendance: false },
    { name: 'Robinson, Chandler', attendance: false },
    { name: 'Sialana, Keith', attendance: false },
    { name: 'Silber, Justin', attendance: false },
    { name: 'Stephenson, River', attendance: false },
    { name: 'Melody Steppens Valentine', attendance: false },
    { name: 'Arcanjo Vasconcelos, Licia', attendance: false },
    { name: 'Vitan, Brianna', attendance: false },
    { name: 'Woods, Joshua', attendance: false }
];

const arrayOfStudents = [];
console.log("javascript");

console.log("submit ran")
reduceJSON();



//does your stuff to figure out the array of students
const stringFunc = `function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
function pause(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
(async function autoAttendance() {
  //stuff in here to handle DOM, need to pass the array of students, and declare eventFire function in here
  const roster = ${JSON.stringify(roster)};

  // loop over array and find the element in the dom with that student's name, and then run the event fire on these two:
  for (let i = 0; i < roster.length; i++) {
    if (roster[i].attendance === true) {
      const number = i + 3;
      const string1 = "#root > div > form > div > div:nth-child(" + number + ") > div.seven.wide.column > div > div";
      const string2 = "#root > div > form > div > div:nth-child(" + number + ") > div.seven.wide.column > div > div > div.visible.menu.transition > div:nth-child(2)";
      eventFire(document.querySelector(string1), "click");
      await pause(500);
      eventFire(document.querySelector(string2), "click");
    }
    else if (roster[i].attendance === false) {
      const number = i + 3;
      const string1 = "#root > div > form > div > div:nth-child(" + number + ") > div.seven.wide.column > div > div";
      const string2 = "#root > div > form > div > div:nth-child(" + number + ") > div.seven.wide.column > div > div > div.visible.menu.transition > div:nth-child(3)";
      eventFire(document.querySelector(string1), "click");
      await pause(500);
      eventFire(document.querySelector(string2), "click");
    }
  }

})()`

clipboardy.writeSync(stringFunc); // copies to the clipboard


function reduceJSON() {

    const reducedArr = []
    formedArr.forEach((item) => {
        const newObj = item;
        let count = 0;
        for (let i = 0; i < reducedArr.length; i++) {
            let tempArrName = reducedArr[i]["User Name"].split(" ");
            let tempName = newObj["User Name"].split(" ");
            if ((newObj["User Name"].includes(tempArrName[0]) && newObj["User Name"].includes(tempArrName[1])) || (reducedArr[i]["User Name"].includes(tempName[0]) && reducedArr[i]["User Name"].includes(tempName[1]))) {
                count++;
            } else if (tempArrName.length < 2 && tempName.length < 2) {
                if (newObj["User Name"].includes(tempArrName[0]) || reducedArr[i]["User Name"].includes(tempName[0])) {
                    count++;
                }
            }
        }
        if (count < 1) {
            for (let i = 0; i < formedArr.length; i++) {
                let tempArrName = formedArr[i]["User Name"].split(" ");
                for (let j = 0; j < roster.length; j++) {
                    if (roster[j].name.includes(tempArrName[0]) && roster[j].name.includes(tempArrName[1])) {
                        roster[j].attendance = true;
                    } else if (tempArrName.length > 2) {
                        if (roster[j].name.includes(tempArrName[2])) {
                            roster[j].attendance = true;
                        } else if (roster[j].name.includes(tempArrName[3])) {
                            roster[j].attendance = true;
                        }

                    } else if (tempArrName.length < 2) {
                        if (roster[j].name.includes(tempArrName[0])) {
                            roster[j].attendance = true;
                        }
                    }
                }
            }
            reducedArr.push(newObj);
        } else {

        }



    })
    for (let j = 0; j < roster.length; j++) {
        if (roster[j].attendance === false) {
            absent++;
        }
    }
    console.log(roster);
    console.log(absent)
    arrayOfStudents.push(reducedArr);
    return arrayOfStudents;
}



