
function eventFire(el, etype) {
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
  const roster = [{ "name": "Aboulhosn, Maher", "attendance": false }, { "name": "Alakulppi, Jaakob", "attendance": true }, { "name": "Alfaro, Adam", "attendance": false }, { "name": "Bass, Gregory", "attendance": true }, { "name": "Burrow, Seth", "attendance": true }, { "name": "Bush, Jorge", "attendance": true }, { "name": "Byers, Isaac", "attendance": false }, { "name": "Caldwell, John", "attendance": true }, { "name": "Casadevall, Sebastian", "attendance": true }, { "name": "Chance, Matthew", "attendance": true }, { "name": "D’cruz, Elizabeth", "attendance": true }, { "name": "Diallo, Salimatou", "attendance": false }, { "name": "Esasta, Kane", "attendance": true }, { "name": "Ferrario, Michele", "attendance": true }, { "name": "Fleming, Michael", "attendance": true }, { "name": "Foner, Asuanti", "attendance": true }, { "name": "Foster, Marie-Chantal", "attendance": true }, { "name": "Gayle, Owen", "attendance": true }, { "name": "Gianesi, Andre", "attendance": true }, { "name": "Idris, Sameer", "attendance": true }, { "name": "Imboden, Lukas", "attendance": true }, { "name": "Lal, Ranjeshni", "attendance": true }, { "name": "Lanes, Brandon", "attendance": true }, { "name": "Larsson, Isak", "attendance": true }, { "name": "Llanos, Joseph", "attendance": false }, { "name": "Magri, Jake", "attendance": true }, { "name": "Mata, Victoria", "attendance": true }, { "name": "Mahmoudi, Parsa", "attendance": true }, { "name": "Middleton, Jacob", "attendance": false }, { "name": "Montgomery, Lauren", "attendance": false }, { "name": "Moody, Katrina", "attendance": true }, { "name": "Mora, Alexander", "attendance": true }, { "name": "Murfield, Brendan", "attendance": true }, { "name": "Murphy, Miiya", "attendance": true }, { "name": "Ray, Justin", "attendance": false }, { "name": "Robinson, Chandler", "attendance": true }, { "name": "Sialana, Keith", "attendance": true }, { "name": "Silber, Justin", "attendance": true }, { "name": "Stephenson, River", "attendance": true }, { "name": "Melody Steppens", "attendance": false }, { "name": "Arcanjo Vasconcelos, Licia", "attendance": true }, { "name": "Vitan, Brianna", "attendance": true }, { "name": "Woods, Joshua", "attendance": true }];

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

})()