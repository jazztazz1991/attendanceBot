const form = document.querySelector("#csvForm");
const csvInput = document.querySelector("#csvInput");
const output = document.querySelector("#csvResult");

const students = [
    {
        fullName: "Doe, John",
        aliases: ["Johnny", "JD"],
        present: false
    }
]
console.log("javascript");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submit ran")
    const file = csvInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const csvArray = csvToArr(e.target.result, ",");
        console.log("output: ", output);
        output.value = JSON.stringify(csvArray, null, 4);
    };

    reader.readAsText(file);
});

function csvToArr(stringVal, splitter) {
    // console.log(stringVal);
    const [keys, ...rest] = stringVal
        .trim()
        .split("\n")
        .map((item) => item.split(splitter));

    console.log(keys);
    console.log(rest);
    for (let i = 0; i < rest.length; i++) {
        if (rest[i].length === 7) {
            rest[i][0] += rest[i][1];
            rest[i][1] = rest[i][2];
            rest[i][2] = rest[i][3];
            rest[i][3] = rest[i][4];
            rest[i][4] = rest[i][5];
            rest[i][5] = rest[i][6];
            rest[i][6] = rest[i][7];
            rest[i].pop();
        }
        if (rest[i][0].includes('"')) {
            rest[i][0] = rest[i][0].replace(/"/g, '');
        }
    }
    const formedArr = rest.map((item) => {
        const object = {};
        keys.forEach((key, index) => (object[key] = item.at(index)));
        return object;
    });


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
            let diff = 0;
            for (let i = 0; i < formedArr.length; i++) {
                let tempArrName = formedArr[i]["User Name"].split(" ");
                let tempName = newObj["User Name"].split(" ");
                if ((newObj["User Name"].includes(tempArrName[0]) && newObj["User Name"].includes(tempArrName[1])) || (formedArr[i]["User Name"].includes(tempName[0]) && formedArr[i]["User Name"].includes(tempName[1]))) {
                    let temp = parseFloat(formedArr[i]["Duration(Minutes)"]);
                    diff += temp;
                }
            }
            newObj["Duration(Minutes)"] = parseFloat(newObj["Duration(Minutes)"]) + diff;
            reducedArr.push(newObj);
        } else {

        }



    })
    console.log(reducedArr);

    return reducedArr;
}
