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
    { name: 'Llanos, Joseph', attendance: false },
    { name: 'Magri, Jake', attendance: false },
    { name: 'Mata, Victoria', attendance: false },
    { name: 'Mahmoudi, Parsa', attendance: false },
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

    const formedArr = [
        {
            "User Name": "Dan Mueller",
            "User Email": "dmueller@2u.com",
            "Join time": "10/22/2024 09:45:05",
            "Leave time": "10/22/2024 13:38:15",
            "Duration(Minutes)": 234,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Arcanjo Vasconcelos, Licia",
            "User Email": "",
            "Join time": "10/22/2024 09:45:07",
            "Leave time": "10/22/2024 09:47:50",
            "Duration(Minutes)": 3,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Cody (TA)",
            "User Email": "cchase@instructors.2u.com",
            "Join time": "10/22/2024 09:45:14",
            "Leave time": "10/22/2024 09:54:25",
            "Duration(Minutes)": 10,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Katie Redford - TA",
            "User Email": "kredford@instructors.2u.com",
            "Join time": "10/22/2024 09:45:38",
            "Leave time": "10/22/2024 09:56:07",
            "Duration(Minutes)": 11,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Elenius, Mary",
            "User Email": "melenius@instructors.2u.com",
            "Join time": "10/22/2024 09:46:58",
            "Leave time": "10/22/2024 09:48:29",
            "Duration(Minutes)": 2,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Sasha Peters - TA",
            "User Email": "apeters1@instructors.2u.com",
            "Join time": "10/22/2024 09:46:59",
            "Leave time": "10/22/2024 09:58:59",
            "Duration(Minutes)": 12,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Lanes, Brandon",
            "User Email": "",
            "Join time": "10/22/2024 09:47:04",
            "Leave time": "10/22/2024 09:47:51",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Arcanjo Vasconcelos, Licia",
            "User Email": "",
            "Join time": "10/22/2024 09:47:50",
            "Leave time": "10/22/2024 11:16:21",
            "Duration(Minutes)": 89,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Lanes, Brandon",
            "User Email": "",
            "Join time": "10/22/2024 09:47:51",
            "Leave time": "10/22/2024 09:48:28",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Lanes, Brandon",
            "User Email": "",
            "Join time": "10/22/2024 09:48:29",
            "Leave time": "10/22/2024 10:10:12",
            "Duration(Minutes)": 22,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Elenius, Mary",
            "User Email": "melenius@instructors.2u.com",
            "Join time": "10/22/2024 09:48:30",
            "Leave time": "10/22/2024 10:15:58",
            "Duration(Minutes)": 28,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 09:53:21",
            "Leave time": "10/22/2024 09:54:26",
            "Duration(Minutes)": 2,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Cody (TA)",
            "User Email": "cchase@instructors.2u.com",
            "Join time": "10/22/2024 09:54:25",
            "Leave time": "10/22/2024 09:56:03",
            "Duration(Minutes)": 2,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 09:54:27",
            "Leave time": "10/22/2024 10:31:14",
            "Duration(Minutes)": 37,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Silber, Justin",
            "User Email": "",
            "Join time": "10/22/2024 09:55:03",
            "Leave time": "10/22/2024 09:57:25",
            "Duration(Minutes)": 3,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Maher AboulHosn (He/Him)",
            "User Email": "",
            "Join time": "10/22/2024 09:55:52",
            "Leave time": "10/22/2024 15:03:31",
            "Duration(Minutes)": 308,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Jorge Bush",
            "User Email": "",
            "Join time": "10/22/2024 09:55:56",
            "Leave time": "10/22/2024 10:00:45",
            "Duration(Minutes)": 5,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Cody (TA)",
            "User Email": "cchase@instructors.2u.com",
            "Join time": "10/22/2024 09:56:04",
            "Leave time": "10/22/2024 09:56:22",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Idris, Sameer",
            "User Email": "",
            "Join time": "10/22/2024 09:56:04",
            "Leave time": "10/22/2024 09:59:01",
            "Duration(Minutes)": 3,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Katie Redford - TA",
            "User Email": "kredford@instructors.2u.com",
            "Join time": "10/22/2024 09:56:08",
            "Leave time": "10/22/2024 09:56:15",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Katie Redford - TA",
            "User Email": "kredford@instructors.2u.com",
            "Join time": "10/22/2024 09:56:15",
            "Leave time": "10/22/2024 09:56:29",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Cody (TA)",
            "User Email": "cchase@instructors.2u.com",
            "Join time": "10/22/2024 09:56:23",
            "Leave time": "10/22/2024 10:31:18",
            "Duration(Minutes)": 35,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Katie Redford - TA",
            "User Email": "kredford@instructors.2u.com",
            "Join time": "10/22/2024 09:56:29",
            "Leave time": "10/22/2024 10:31:15",
            "Duration(Minutes)": 35,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Silber, Justin",
            "User Email": "",
            "Join time": "10/22/2024 09:57:25",
            "Leave time": "10/22/2024 10:31:16",
            "Duration(Minutes)": 34,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Sasha Peters - TA",
            "User Email": "apeters1@instructors.2u.com",
            "Join time": "10/22/2024 09:58:59",
            "Leave time": "10/22/2024 10:31:14",
            "Duration(Minutes)": 33,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Idris, Sameer",
            "User Email": "",
            "Join time": "10/22/2024 09:59:02",
            "Leave time": "10/22/2024 10:31:16",
            "Duration(Minutes)": 33,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Mahmoudi, Parsa",
            "User Email": "",
            "Join time": "10/22/2024 10:02:06",
            "Leave time": "10/22/2024 10:12:19",
            "Duration(Minutes)": 11,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Jorge Bush",
            "User Email": "",
            "Join time": "10/22/2024 10:02:15",
            "Leave time": "10/22/2024 10:04:20",
            "Duration(Minutes)": 3,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Keith Sialana",
            "User Email": "",
            "Join time": "10/22/2024 10:03:11",
            "Leave time": "10/22/2024 15:11:21",
            "Duration(Minutes)": 309,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Jorge Bush",
            "User Email": "",
            "Join time": "10/22/2024 10:04:36",
            "Leave time": "10/22/2024 11:17:22",
            "Duration(Minutes)": 73,
            "Attentiveness Score": ""
        },
        {
            "User Name": "McMoody, Parsa",
            "User Email": "",
            "Join time": "10/22/2024 10:12:19",
            "Leave time": "10/22/2024 10:17:20",
            "Duration(Minutes)": 6,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Murfield, Brendan",
            "User Email": "",
            "Join time": "10/22/2024 10:12:54",
            "Leave time": "10/22/2024 11:16:28",
            "Duration(Minutes)": 64,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Stephenson, River",
            "User Email": "",
            "Join time": "10/22/2024 10:15:19",
            "Leave time": "10/22/2024 11:16:29",
            "Duration(Minutes)": 62,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Elenius, Mary",
            "User Email": "melenius@instructors.2u.com",
            "Join time": "10/22/2024 10:15:59",
            "Leave time": "10/22/2024 10:30:23",
            "Duration(Minutes)": 15,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Esasta, Kane",
            "User Email": "",
            "Join time": "10/22/2024 10:17:02",
            "Leave time": "10/22/2024 11:16:24",
            "Duration(Minutes)": 60,
            "Attentiveness Score": ""
        },
        {
            "User Name": "McMoody, Parsa",
            "User Email": "",
            "Join time": "10/22/2024 10:17:21",
            "Leave time": "10/22/2024 11:17:07",
            "Duration(Minutes)": 60,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Rani Lal",
            "User Email": "",
            "Join time": "10/22/2024 10:21:22",
            "Leave time": "10/22/2024 11:03:54",
            "Duration(Minutes)": 43,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Foster, Marie-Chantal",
            "User Email": "",
            "Join time": "10/22/2024 10:23:29",
            "Leave time": "10/22/2024 11:17:30",
            "Duration(Minutes)": 55,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Ferrario, Michele",
            "User Email": "",
            "Join time": "10/22/2024 10:23:33",
            "Leave time": "10/22/2024 11:55:36",
            "Duration(Minutes)": 93,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Isaac \"\"Ike\"\" Byers",
            "User Email": "",
            "Join time": "10/22/2024 10:24:54",
            "Leave time": "10/22/2024 15:03:29",
            "Duration(Minutes)": 279,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Burrow, Seth",
            "User Email": "",
            "Join time": "10/22/2024 10:25:41",
            "Leave time": "10/22/2024 11:16:49",
            "Duration(Minutes)": 52,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Vitan, Brianna",
            "User Email": "",
            "Join time": "10/22/2024 10:26:01",
            "Leave time": "10/22/2024 11:16:21",
            "Duration(Minutes)": 51,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Mora, Alexander",
            "User Email": "",
            "Join time": "10/22/2024 10:27:06",
            "Leave time": "10/22/2024 11:16:29",
            "Duration(Minutes)": 50,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Robinson, Chandler",
            "User Email": "",
            "Join time": "10/22/2024 10:27:46",
            "Leave time": "10/22/2024 15:33:51",
            "Duration(Minutes)": 307,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Imboden, Lukas",
            "User Email": "",
            "Join time": "10/22/2024 10:27:50",
            "Leave time": "10/22/2024 15:04:19",
            "Duration(Minutes)": 277,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Gayle, Owen",
            "User Email": "",
            "Join time": "10/22/2024 10:27:51",
            "Leave time": "10/22/2024 11:16:34",
            "Duration(Minutes)": 49,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Matt Chance",
            "User Email": "",
            "Join time": "10/22/2024 10:28:03",
            "Leave time": "10/22/2024 11:16:27",
            "Duration(Minutes)": 49,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Lanes, Brandon",
            "User Email": "",
            "Join time": "10/22/2024 10:29:04",
            "Leave time": "10/22/2024 15:03:19",
            "Duration(Minutes)": 275,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Jaakob A",
            "User Email": "",
            "Join time": "10/22/2024 10:29:30",
            "Leave time": "10/22/2024 11:16:35",
            "Duration(Minutes)": 48,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Melody Valentine",
            "User Email": "",
            "Join time": "10/22/2024 10:29:39",
            "Leave time": "10/22/2024 11:16:29",
            "Duration(Minutes)": 47,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Mata, Victoria",
            "User Email": "",
            "Join time": "10/22/2024 10:29:54",
            "Leave time": "10/22/2024 15:03:24",
            "Duration(Minutes)": 274,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Elenius, Mary",
            "User Email": "melenius@instructors.2u.com",
            "Join time": "10/22/2024 10:30:23",
            "Leave time": "10/22/2024 11:16:31",
            "Duration(Minutes)": 47,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Murphy, Miiya",
            "User Email": "",
            "Join time": "10/22/2024 10:30:54",
            "Leave time": "10/22/2024 15:03:24",
            "Duration(Minutes)": 273,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 10:31:15",
            "Leave time": "10/22/2024 11:16:58",
            "Duration(Minutes)": 46,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Sasha Peters - TA",
            "User Email": "apeters1@instructors.2u.com",
            "Join time": "10/22/2024 10:31:15",
            "Leave time": "10/22/2024 12:58:58",
            "Duration(Minutes)": 148,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Katie Redford - TA",
            "User Email": "kredford@instructors.2u.com",
            "Join time": "10/22/2024 10:31:16",
            "Leave time": "10/22/2024 11:49:46",
            "Duration(Minutes)": 79,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Idris, Sameer",
            "User Email": "",
            "Join time": "10/22/2024 10:31:16",
            "Leave time": "10/22/2024 14:40:08",
            "Duration(Minutes)": 249,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Silber, Justin",
            "User Email": "",
            "Join time": "10/22/2024 10:31:17",
            "Leave time": "10/22/2024 11:16:36",
            "Duration(Minutes)": 46,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Cody (TA)",
            "User Email": "cchase@instructors.2u.com",
            "Join time": "10/22/2024 10:31:19",
            "Leave time": "10/22/2024 15:05:14",
            "Duration(Minutes)": 274,
            "Attentiveness Score": ""
        },
        {
            "User Name": "D’cruz, Elizabeth",
            "User Email": "",
            "Join time": "10/22/2024 10:31:19",
            "Leave time": "10/22/2024 13:33:58",
            "Duration(Minutes)": 183,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Moody, Katrina",
            "User Email": "",
            "Join time": "10/22/2024 10:31:52",
            "Leave time": "10/22/2024 11:16:40",
            "Duration(Minutes)": 45,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Jake M",
            "User Email": "",
            "Join time": "10/22/2024 10:32:22",
            "Leave time": "10/22/2024 15:03:36",
            "Duration(Minutes)": 272,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Andre Gianesi",
            "User Email": "",
            "Join time": "10/22/2024 10:33:02",
            "Leave time": "10/22/2024 15:04:01",
            "Duration(Minutes)": 271,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Isak Larsson",
            "User Email": "",
            "Join time": "10/22/2024 10:33:12",
            "Leave time": "10/22/2024 11:16:39",
            "Duration(Minutes)": 44,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Bass, Gregory",
            "User Email": "",
            "Join time": "10/22/2024 10:33:15",
            "Leave time": "10/22/2024 14:47:13",
            "Duration(Minutes)": 254,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Fleming, Michael",
            "User Email": "",
            "Join time": "10/22/2024 10:33:28",
            "Leave time": "10/22/2024 15:25:22",
            "Duration(Minutes)": 292,
            "Attentiveness Score": ""
        },
        {
            "User Name": "joshua woods",
            "User Email": "",
            "Join time": "10/22/2024 10:37:19",
            "Leave time": "10/22/2024 11:16:06",
            "Duration(Minutes)": 39,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Foner, Asuanti",
            "User Email": "",
            "Join time": "10/22/2024 10:38:09",
            "Leave time": "10/22/2024 11:16:40",
            "Duration(Minutes)": 39,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Casadevall, Sebastian",
            "User Email": "",
            "Join time": "10/22/2024 10:39:39",
            "Leave time": "10/22/2024 11:16:33",
            "Duration(Minutes)": 37,
            "Attentiveness Score": ""
        },
        {
            "User Name": "joshua woods",
            "User Email": "",
            "Join time": "10/22/2024 11:16:17",
            "Leave time": "10/22/2024 11:17:33",
            "Duration(Minutes)": 2,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Licia",
            "User Email": "",
            "Join time": "10/22/2024 11:16:22",
            "Leave time": "10/22/2024 12:16:39",
            "Duration(Minutes)": 61,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Vitan, Brianna",
            "User Email": "",
            "Join time": "10/22/2024 11:16:22",
            "Leave time": "10/22/2024 11:52:51",
            "Duration(Minutes)": 37,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Esasta, Kane",
            "User Email": "",
            "Join time": "10/22/2024 11:16:25",
            "Leave time": "10/22/2024 11:45:11",
            "Duration(Minutes)": 29,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Matt Chance",
            "User Email": "",
            "Join time": "10/22/2024 11:16:28",
            "Leave time": "10/22/2024 12:01:08",
            "Duration(Minutes)": 45,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Murfield, Brendan",
            "User Email": "",
            "Join time": "10/22/2024 11:16:28",
            "Leave time": "10/22/2024 11:46:51",
            "Duration(Minutes)": 31,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Melody Valentine",
            "User Email": "",
            "Join time": "10/22/2024 11:16:29",
            "Leave time": "10/22/2024 11:48:05",
            "Duration(Minutes)": 32,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Mora, Alexander",
            "User Email": "",
            "Join time": "10/22/2024 11:16:29",
            "Leave time": "10/22/2024 12:17:07",
            "Duration(Minutes)": 61,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Stephenson, River",
            "User Email": "",
            "Join time": "10/22/2024 11:16:30",
            "Leave time": "10/22/2024 11:18:42",
            "Duration(Minutes)": 3,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Elenius, Mary",
            "User Email": "melenius@instructors.2u.com",
            "Join time": "10/22/2024 11:16:32",
            "Leave time": "10/22/2024 11:51:05",
            "Duration(Minutes)": 35,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Casadevall, Sebastian",
            "User Email": "",
            "Join time": "10/22/2024 11:16:33",
            "Leave time": "10/22/2024 12:16:37",
            "Duration(Minutes)": 61,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Gayle, Owen",
            "User Email": "",
            "Join time": "10/22/2024 11:16:35",
            "Leave time": "10/22/2024 12:02:05",
            "Duration(Minutes)": 46,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Jaakob A",
            "User Email": "",
            "Join time": "10/22/2024 11:16:36",
            "Leave time": "10/22/2024 12:16:43",
            "Duration(Minutes)": 61,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Silber, Justin",
            "User Email": "",
            "Join time": "10/22/2024 11:16:37",
            "Leave time": "10/22/2024 11:44:40",
            "Duration(Minutes)": 29,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Moody, Katrina",
            "User Email": "",
            "Join time": "10/22/2024 11:16:40",
            "Leave time": "10/22/2024 11:48:45",
            "Duration(Minutes)": 33,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Foner, Asuanti",
            "User Email": "",
            "Join time": "10/22/2024 11:16:40",
            "Leave time": "10/22/2024 12:16:40",
            "Duration(Minutes)": 60,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Isak Larsson",
            "User Email": "",
            "Join time": "10/22/2024 11:16:40",
            "Leave time": "10/22/2024 12:16:38",
            "Duration(Minutes)": 60,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Burrow, Seth",
            "User Email": "",
            "Join time": "10/22/2024 11:16:50",
            "Leave time": "10/22/2024 12:16:40",
            "Duration(Minutes)": 60,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 11:16:59",
            "Leave time": "10/22/2024 11:32:46",
            "Duration(Minutes)": 16,
            "Attentiveness Score": ""
        },
        {
            "User Name": "McMoody, Parsa",
            "User Email": "",
            "Join time": "10/22/2024 11:17:07",
            "Leave time": "10/22/2024 11:31:35",
            "Duration(Minutes)": 15,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Jorge Bush",
            "User Email": "",
            "Join time": "10/22/2024 11:17:22",
            "Leave time": "10/22/2024 12:16:39",
            "Duration(Minutes)": 60,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Foster, Marie-Chantal",
            "User Email": "",
            "Join time": "10/22/2024 11:17:31",
            "Leave time": "10/22/2024 11:32:54",
            "Duration(Minutes)": 16,
            "Attentiveness Score": ""
        },
        {
            "User Name": "joshua woods",
            "User Email": "",
            "Join time": "10/22/2024 11:17:34",
            "Leave time": "10/22/2024 11:27:48",
            "Duration(Minutes)": 11,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Stephenson, River",
            "User Email": "",
            "Join time": "10/22/2024 11:18:43",
            "Leave time": "10/22/2024 11:48:20",
            "Duration(Minutes)": 30,
            "Attentiveness Score": ""
        },
        {
            "User Name": "joshua woods",
            "User Email": "",
            "Join time": "10/22/2024 11:28:19",
            "Leave time": "10/22/2024 11:29:22",
            "Duration(Minutes)": 2,
            "Attentiveness Score": ""
        },
        {
            "User Name": "joshua woods",
            "User Email": "",
            "Join time": "10/22/2024 11:29:43",
            "Leave time": "10/22/2024 12:21:46",
            "Duration(Minutes)": 53,
            "Attentiveness Score": ""
        },
        {
            "User Name": "McMoody, Parsa",
            "User Email": "",
            "Join time": "10/22/2024 11:31:36",
            "Leave time": "10/22/2024 12:03:09",
            "Duration(Minutes)": 32,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 11:32:46",
            "Leave time": "10/22/2024 11:33:08",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Foster, Marie-Chantal",
            "User Email": "",
            "Join time": "10/22/2024 11:32:55",
            "Leave time": "10/22/2024 13:45:37",
            "Duration(Minutes)": 133,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 11:33:09",
            "Leave time": "10/22/2024 11:42:44",
            "Duration(Minutes)": 10,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 11:42:44",
            "Leave time": "10/22/2024 11:45:22",
            "Duration(Minutes)": 3,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Silber, Justin",
            "User Email": "",
            "Join time": "10/22/2024 11:44:40",
            "Leave time": "10/22/2024 11:47:02",
            "Duration(Minutes)": 3,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Esasta, Kane",
            "User Email": "",
            "Join time": "10/22/2024 11:45:11",
            "Leave time": "10/22/2024 11:45:52",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 11:45:23",
            "Leave time": "10/22/2024 12:16:40",
            "Duration(Minutes)": 32,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Esasta, Kane",
            "User Email": "",
            "Join time": "10/22/2024 11:45:53",
            "Leave time": "10/22/2024 11:47:39",
            "Duration(Minutes)": 2,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Murfield, Brendan",
            "User Email": "",
            "Join time": "10/22/2024 11:46:52",
            "Leave time": "10/22/2024 12:14:23",
            "Duration(Minutes)": 28,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Silber, Justin",
            "User Email": "",
            "Join time": "10/22/2024 11:47:02",
            "Leave time": "10/22/2024 11:50:15",
            "Duration(Minutes)": 4,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Esasta, Kane",
            "User Email": "",
            "Join time": "10/22/2024 11:47:39",
            "Leave time": "10/22/2024 13:37:45",
            "Duration(Minutes)": 111,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Melody Valentine",
            "User Email": "",
            "Join time": "10/22/2024 11:48:06",
            "Leave time": "10/22/2024 13:46:00",
            "Duration(Minutes)": 118,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Stephenson, River",
            "User Email": "",
            "Join time": "10/22/2024 11:48:20",
            "Leave time": "10/22/2024 11:49:50",
            "Duration(Minutes)": 2,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Moody, Katrina",
            "User Email": "",
            "Join time": "10/22/2024 11:48:45",
            "Leave time": "10/22/2024 13:46:47",
            "Duration(Minutes)": 119,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Katie Redford - TA",
            "User Email": "kredford@instructors.2u.com",
            "Join time": "10/22/2024 11:49:46",
            "Leave time": "10/22/2024 12:16:39",
            "Duration(Minutes)": 27,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Stephenson, River",
            "User Email": "",
            "Join time": "10/22/2024 11:49:50",
            "Leave time": "10/22/2024 13:47:06",
            "Duration(Minutes)": 118,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Silber, Justin",
            "User Email": "",
            "Join time": "10/22/2024 11:50:16",
            "Leave time": "10/22/2024 15:33:48",
            "Duration(Minutes)": 224,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Elenius, Mary",
            "User Email": "melenius@instructors.2u.com",
            "Join time": "10/22/2024 11:51:05",
            "Leave time": "10/22/2024 13:38:39",
            "Duration(Minutes)": 108,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Vitan, Brianna",
            "User Email": "",
            "Join time": "10/22/2024 11:52:52",
            "Leave time": "10/22/2024 13:42:31",
            "Duration(Minutes)": 110,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Ferrario, Michele",
            "User Email": "",
            "Join time": "10/22/2024 11:55:37",
            "Leave time": "10/22/2024 12:16:42",
            "Duration(Minutes)": 22,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Matt Chance",
            "User Email": "",
            "Join time": "10/22/2024 12:01:09",
            "Leave time": "10/22/2024 13:41:18",
            "Duration(Minutes)": 101,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Gayle, Owen",
            "User Email": "",
            "Join time": "10/22/2024 12:02:05",
            "Leave time": "10/22/2024 15:03:33",
            "Duration(Minutes)": 182,
            "Attentiveness Score": ""
        },
        {
            "User Name": "McMoody, Parsa",
            "User Email": "",
            "Join time": "10/22/2024 12:03:10",
            "Leave time": "10/22/2024 12:03:30",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "McMoody, Parsa",
            "User Email": "",
            "Join time": "10/22/2024 12:03:31",
            "Leave time": "10/22/2024 12:10:54",
            "Duration(Minutes)": 8,
            "Attentiveness Score": ""
        },
        {
            "User Name": "McMoody, Parsa",
            "User Email": "",
            "Join time": "10/22/2024 12:10:54",
            "Leave time": "10/22/2024 12:13:21",
            "Duration(Minutes)": 3,
            "Attentiveness Score": ""
        },
        {
            "User Name": "McMoody, Parsa",
            "User Email": "",
            "Join time": "10/22/2024 12:13:21",
            "Leave time": "10/22/2024 12:15:08",
            "Duration(Minutes)": 2,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Murfield, Brendan",
            "User Email": "",
            "Join time": "10/22/2024 12:14:24",
            "Leave time": "10/22/2024 12:16:40",
            "Duration(Minutes)": 3,
            "Attentiveness Score": ""
        },
        {
            "User Name": "McMoody, Parsa",
            "User Email": "",
            "Join time": "10/22/2024 12:15:08",
            "Leave time": "10/22/2024 12:16:35",
            "Duration(Minutes)": 2,
            "Attentiveness Score": ""
        },
        {
            "User Name": "McMoody, Parsa",
            "User Email": "",
            "Join time": "10/22/2024 12:16:36",
            "Leave time": "10/22/2024 13:37:47",
            "Duration(Minutes)": 82,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Casadevall, Sebastian",
            "User Email": "",
            "Join time": "10/22/2024 12:16:37",
            "Leave time": "10/22/2024 15:03:27",
            "Duration(Minutes)": 167,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Isak Larsson",
            "User Email": "",
            "Join time": "10/22/2024 12:16:39",
            "Leave time": "10/22/2024 15:05:21",
            "Duration(Minutes)": 169,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Licia",
            "User Email": "",
            "Join time": "10/22/2024 12:16:39",
            "Leave time": "10/22/2024 15:03:46",
            "Duration(Minutes)": 168,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Jorge Bush",
            "User Email": "",
            "Join time": "10/22/2024 12:16:40",
            "Leave time": "10/22/2024 13:16:52",
            "Duration(Minutes)": 61,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Katie Redford - TA",
            "User Email": "kredford@instructors.2u.com",
            "Join time": "10/22/2024 12:16:40",
            "Leave time": "10/22/2024 13:46:38",
            "Duration(Minutes)": 90,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Murfield, Brendan",
            "User Email": "",
            "Join time": "10/22/2024 12:16:40",
            "Leave time": "10/22/2024 13:38:55",
            "Duration(Minutes)": 83,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Burrow, Seth",
            "User Email": "",
            "Join time": "10/22/2024 12:16:41",
            "Leave time": "10/22/2024 13:37:49",
            "Duration(Minutes)": 82,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 12:16:41",
            "Leave time": "10/22/2024 13:38:23",
            "Duration(Minutes)": 82,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Foner, Asuanti",
            "User Email": "",
            "Join time": "10/22/2024 12:16:41",
            "Leave time": "10/22/2024 15:05:31",
            "Duration(Minutes)": 169,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Ferrario, Michele",
            "User Email": "",
            "Join time": "10/22/2024 12:16:42",
            "Leave time": "10/22/2024 13:37:59",
            "Duration(Minutes)": 82,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Jaakob A",
            "User Email": "",
            "Join time": "10/22/2024 12:16:43",
            "Leave time": "10/22/2024 13:39:42",
            "Duration(Minutes)": 83,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Mora, Alexander",
            "User Email": "",
            "Join time": "10/22/2024 12:17:08",
            "Leave time": "10/22/2024 15:03:21",
            "Duration(Minutes)": 167,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Joshua Woods",
            "User Email": "",
            "Join time": "10/22/2024 12:21:54",
            "Leave time": "10/22/2024 15:03:27",
            "Duration(Minutes)": 162,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Esasta, Kane",
            "User Email": "",
            "Join time": "10/22/2024 13:37:46",
            "Leave time": "10/22/2024 13:38:10",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "McMoody, Parsa",
            "User Email": "",
            "Join time": "10/22/2024 13:37:47",
            "Leave time": "10/22/2024 13:38:11",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Burrow, Seth",
            "User Email": "",
            "Join time": "10/22/2024 13:37:49",
            "Leave time": "10/22/2024 13:48:23",
            "Duration(Minutes)": 11,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Ferrario, Michele",
            "User Email": "",
            "Join time": "10/22/2024 13:38:00",
            "Leave time": "10/22/2024 13:38:41",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Esasta, Kane",
            "User Email": "",
            "Join time": "10/22/2024 13:38:10",
            "Leave time": "10/22/2024 13:47:38",
            "Duration(Minutes)": 10,
            "Attentiveness Score": ""
        },
        {
            "User Name": "McMoody, Parsa",
            "User Email": "",
            "Join time": "10/22/2024 13:38:12",
            "Leave time": "10/22/2024 13:41:11",
            "Duration(Minutes)": 3,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Dan Mueller",
            "User Email": "dmueller@2u.com",
            "Join time": "10/22/2024 13:38:15",
            "Leave time": "10/22/2024 13:39:44",
            "Duration(Minutes)": 2,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 13:38:23",
            "Leave time": "10/22/2024 13:41:46",
            "Duration(Minutes)": 4,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Elenius, Mary",
            "User Email": "melenius@instructors.2u.com",
            "Join time": "10/22/2024 13:38:39",
            "Leave time": "10/22/2024 13:48:23",
            "Duration(Minutes)": 10,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Ferrario, Michele",
            "User Email": "",
            "Join time": "10/22/2024 13:38:41",
            "Leave time": "10/22/2024 15:04:42",
            "Duration(Minutes)": 87,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Murfield, Brendan",
            "User Email": "",
            "Join time": "10/22/2024 13:38:55",
            "Leave time": "10/22/2024 13:39:28",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Dan Mueller",
            "User Email": "dmueller@2u.com",
            "Join time": "10/22/2024 13:39:13",
            "Leave time": "10/22/2024 13:39:58",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Murfield, Brendan",
            "User Email": "",
            "Join time": "10/22/2024 13:39:29",
            "Leave time": "10/22/2024 13:40:13",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Jaakob A",
            "User Email": "",
            "Join time": "10/22/2024 13:39:43",
            "Leave time": "10/22/2024 13:40:53",
            "Duration(Minutes)": 2,
            "Attentiveness Score": ""
        },
        {
            "User Name": "D’cruz, Elizabeth",
            "User Email": "",
            "Join time": "10/22/2024 13:39:47",
            "Leave time": "10/22/2024 15:03:25",
            "Duration(Minutes)": 84,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Dan Mueller",
            "User Email": "dmueller@2u.com",
            "Join time": "10/22/2024 13:39:58",
            "Leave time": "10/22/2024 13:48:02",
            "Duration(Minutes)": 9,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Murfield, Brendan",
            "User Email": "",
            "Join time": "10/22/2024 13:40:14",
            "Leave time": "10/22/2024 13:40:40",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Murfield, Brendan",
            "User Email": "",
            "Join time": "10/22/2024 13:40:41",
            "Leave time": "10/22/2024 15:03:36",
            "Duration(Minutes)": 83,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Jaakob A",
            "User Email": "",
            "Join time": "10/22/2024 13:40:53",
            "Leave time": "10/22/2024 15:33:46",
            "Duration(Minutes)": 113,
            "Attentiveness Score": ""
        },
        {
            "User Name": "McMoody, Parsa",
            "User Email": "",
            "Join time": "10/22/2024 13:41:11",
            "Leave time": "10/22/2024 13:41:26",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Matt Chance",
            "User Email": "",
            "Join time": "10/22/2024 13:41:18",
            "Leave time": "10/22/2024 13:48:22",
            "Duration(Minutes)": 8,
            "Attentiveness Score": ""
        },
        {
            "User Name": "McMoody, Parsa",
            "User Email": "",
            "Join time": "10/22/2024 13:41:26",
            "Leave time": "10/22/2024 13:48:01",
            "Duration(Minutes)": 7,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 13:41:47",
            "Leave time": "10/22/2024 13:42:10",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 13:42:10",
            "Leave time": "10/22/2024 13:42:41",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Vitan, Brianna",
            "User Email": "",
            "Join time": "10/22/2024 13:42:31",
            "Leave time": "10/22/2024 13:48:23",
            "Duration(Minutes)": 6,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 13:42:42",
            "Leave time": "10/22/2024 13:43:41",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 13:43:41",
            "Leave time": "10/22/2024 13:43:50",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 13:43:50",
            "Leave time": "10/22/2024 13:43:54",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 13:44:24",
            "Leave time": "10/22/2024 15:05:11",
            "Duration(Minutes)": 81,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Foster, Marie-Chantal",
            "User Email": "",
            "Join time": "10/22/2024 13:45:38",
            "Leave time": "10/22/2024 13:46:16",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Melody Valentine",
            "User Email": "",
            "Join time": "10/22/2024 13:46:00",
            "Leave time": "10/22/2024 13:48:21",
            "Duration(Minutes)": 3,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Foster, Marie-Chantal",
            "User Email": "",
            "Join time": "10/22/2024 13:46:17",
            "Leave time": "10/22/2024 15:05:21",
            "Duration(Minutes)": 80,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Katie Redford - TA",
            "User Email": "kredford@instructors.2u.com",
            "Join time": "10/22/2024 13:46:38",
            "Leave time": "10/22/2024 13:46:54",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Moody, Katrina",
            "User Email": "",
            "Join time": "10/22/2024 13:46:48",
            "Leave time": "10/22/2024 13:48:37",
            "Duration(Minutes)": 2,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Katie Redford - TA",
            "User Email": "kredford@instructors.2u.com",
            "Join time": "10/22/2024 13:46:55",
            "Leave time": "10/22/2024 15:08:04",
            "Duration(Minutes)": 82,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Stephenson, River",
            "User Email": "",
            "Join time": "10/22/2024 13:47:07",
            "Leave time": "10/22/2024 13:47:34",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Jorge Bush",
            "User Email": "",
            "Join time": "10/22/2024 13:47:07",
            "Leave time": "10/22/2024 15:03:28",
            "Duration(Minutes)": 77,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Stephenson, River",
            "User Email": "",
            "Join time": "10/22/2024 13:47:34",
            "Leave time": "10/22/2024 15:03:06",
            "Duration(Minutes)": 76,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Esasta, Kane",
            "User Email": "",
            "Join time": "10/22/2024 13:47:38",
            "Leave time": "10/22/2024 13:48:01",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Esasta, Kane",
            "User Email": "",
            "Join time": "10/22/2024 13:48:01",
            "Leave time": "10/22/2024 15:33:43",
            "Duration(Minutes)": 106,
            "Attentiveness Score": ""
        },
        {
            "User Name": "McMoody, Parsa",
            "User Email": "",
            "Join time": "10/22/2024 13:48:02",
            "Leave time": "10/22/2024 15:03:45",
            "Duration(Minutes)": 76,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Dan Mueller",
            "User Email": "dmueller@2u.com",
            "Join time": "10/22/2024 13:48:03",
            "Leave time": "10/22/2024 15:33:56",
            "Duration(Minutes)": 106,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Melody Valentine",
            "User Email": "",
            "Join time": "10/22/2024 13:48:21",
            "Leave time": "10/22/2024 15:03:17",
            "Duration(Minutes)": 75,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Matt Chance",
            "User Email": "",
            "Join time": "10/22/2024 13:48:23",
            "Leave time": "10/22/2024 15:22:53",
            "Duration(Minutes)": 95,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Elenius, Mary",
            "User Email": "melenius@instructors.2u.com",
            "Join time": "10/22/2024 13:48:23",
            "Leave time": "10/22/2024 14:39:49",
            "Duration(Minutes)": 52,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Vitan, Brianna",
            "User Email": "",
            "Join time": "10/22/2024 13:48:23",
            "Leave time": "10/22/2024 15:08:48",
            "Duration(Minutes)": 81,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Burrow, Seth",
            "User Email": "",
            "Join time": "10/22/2024 13:48:24",
            "Leave time": "10/22/2024 15:03:31",
            "Duration(Minutes)": 76,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Moody, Katrina",
            "User Email": "",
            "Join time": "10/22/2024 13:48:37",
            "Leave time": "10/22/2024 15:10:27",
            "Duration(Minutes)": 82,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Lal, Ranjeshni",
            "User Email": "",
            "Join time": "10/22/2024 14:06:25",
            "Leave time": "10/22/2024 15:03:34",
            "Duration(Minutes)": 58,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Elenius, Mary",
            "User Email": "melenius@instructors.2u.com",
            "Join time": "10/22/2024 14:39:57",
            "Leave time": "10/22/2024 15:05:39",
            "Duration(Minutes)": 26,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 15:05:11",
            "Leave time": "10/22/2024 15:19:09",
            "Duration(Minutes)": 14,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Cody (TA)",
            "User Email": "cchase@instructors.2u.com",
            "Join time": "10/22/2024 15:05:14",
            "Leave time": "10/22/2024 15:30:12",
            "Duration(Minutes)": 25,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Foster, Marie-Chantal",
            "User Email": "",
            "Join time": "10/22/2024 15:05:21",
            "Leave time": "10/22/2024 15:41:02",
            "Duration(Minutes)": 36,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Isak Larsson",
            "User Email": "",
            "Join time": "10/22/2024 15:05:21",
            "Leave time": "10/22/2024 15:05:39",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Foner, Asuanti",
            "User Email": "",
            "Join time": "10/22/2024 15:05:31",
            "Leave time": "10/22/2024 15:30:17",
            "Duration(Minutes)": 25,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Elenius, Mary",
            "User Email": "melenius@instructors.2u.com",
            "Join time": "10/22/2024 15:05:39",
            "Leave time": "10/22/2024 15:38:59",
            "Duration(Minutes)": 34,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Isak Larsson",
            "User Email": "",
            "Join time": "10/22/2024 15:05:40",
            "Leave time": "10/22/2024 15:06:27",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Isak Larsson",
            "User Email": "",
            "Join time": "10/22/2024 15:06:27",
            "Leave time": "10/22/2024 15:32:58",
            "Duration(Minutes)": 27,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Katie Redford - TA",
            "User Email": "kredford@instructors.2u.com",
            "Join time": "10/22/2024 15:08:04",
            "Leave time": "10/22/2024 15:33:05",
            "Duration(Minutes)": 26,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Jorge Bush",
            "User Email": "",
            "Join time": "10/22/2024 15:17:31",
            "Leave time": "10/22/2024 15:18:30",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Caldwell, John",
            "User Email": "",
            "Join time": "10/22/2024 15:19:10",
            "Leave time": "10/22/2024 15:33:42",
            "Duration(Minutes)": 15,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Foner, Asuanti",
            "User Email": "",
            "Join time": "10/22/2024 15:30:17",
            "Leave time": "10/22/2024 15:33:40",
            "Duration(Minutes)": 4,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Katie Redford - TA",
            "User Email": "kredford@instructors.2u.com",
            "Join time": "10/22/2024 15:33:06",
            "Leave time": "10/22/2024 15:33:59",
            "Duration(Minutes)": 1,
            "Attentiveness Score": ""
        },
        {
            "User Name": "Dan Mueller",
            "User Email": "dmueller@2u.com",
            "Join time": "10/22/2024 15:33:56",
            "Leave time": "10/22/2024 15:39:02",
            "Duration(Minutes)": 6,
            "Attentiveness Score": ""
        }
    ]

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



