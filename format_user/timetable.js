// ruler set
const dateBar = document.querySelector(".date-bar");

function addBarLine() {
    for (let i = 1; i <= 48; i++) {
        let dateBarChd = document.createElement("span");

        if (i % 2 == 0) {
            dateBarChd.style.width = "20px";
        }
        if (i % 12 == 0) {
            dateBarChd.innerHTML = `${i / 2}h`;
            dateBarChd.style.borderBottom = "3px solid #333";
        }
        dateBar.appendChild(dateBarChd);
    }
}

addBarLine();

// 일 시간 select옵션 생성
const dateSelect = document.getElementById("time-date");
const hourSelect = document.getElementById("time-hour");
const minuteSelect = document.getElementById("time-minute");

function addOption() {
    for (let i = 1; i <= 7; i++) {
        let dateSelectChd = document.createElement("option");
        dateSelectChd.setAttribute("value", `${i}`);
        dateSelectChd.innerHTML = `${i}`;
        dateSelect.appendChild(dateSelectChd);
    }

    for (i = 2; i <= 12; i++) {
        let hourSelectChd = document.createElement("option");
        hourSelectChd.setAttribute("value", `${i}`);
        hourSelectChd.innerHTML = `${i}`;
        hourSelect.appendChild(hourSelectChd);
    }
}

addOption();

// 시간, 분 값 저장
let dateSelectVal = "none";
let hourSelectVal = 1;
let minuteSelectVal = 0;
dateSelect.addEventListener("change", () => {
    dateSelectVal = dateSelect.value;
    hourSelectVal = parseInt(hourSelect.value);
    minuteSelectVal = parseInt(minuteSelect.value);
});
hourSelect.addEventListener("change", () => {
    dateSelectVal = dateSelect.value;
    hourSelectVal = parseInt(hourSelect.value);
    minuteSelectVal = parseInt(minuteSelect.value);
});
minuteSelect.addEventListener("change", () => {
    dateSelectVal = dateSelect.value;
    hourSelectVal = parseInt(hourSelect.value);
    minuteSelectVal = parseInt(minuteSelect.value);
});

console.log(hourSelectVal, minuteSelectVal);

// 버튼
const addBtn = document.querySelector(".add-box");

let width;
let height;
let day;
let countBox = 1;

const day1 = document.querySelector(".day-1");
const day2 = document.querySelector(".day-2");
const day3 = document.querySelector(".day-3");
const day4 = document.querySelector(".day-4");
const day5 = document.querySelector(".day-5");
const day6 = document.querySelector(".day-6");
const day7 = document.querySelector(".day-7");

console.log(day1, day2);

function addBox() {
    width = 80;
    height = hourSelectVal * 60 + minuteSelectVal;
    day = dateSelectVal;

    let timeBox = document.createElement("input");
    let timeBoxLabel = document.createElement("label");

    timeBox.setAttribute("id", `box-${countBox} box`);
    timeBox.style.display = "none";
    timeBoxLabel.setAttribute("for", `box-${countBox} box`);
    timeBoxLabel.style.display = "inline-block";
    timeBoxLabel.style.width = `${width}px`;
    timeBoxLabel.style.height = `${height}px`;
    timeBoxLabel.style.backgroundColor = "#333";

    if (day == "1") {
        day1.appendChild(timeBox);
        day1.appendChild(timeBoxLabel);
        console.log(1);
    } else if (day == "2") {
        day2.appendChild(timeBox);
        day2.appendChild(timeBoxLabel);
    } else if (day == "3") {
        day3.appendChild(timeBox);
        day3.appendChild(timeBoxLabel);
    } else if (day == "4") {
        day4.appendChild(timeBox);
        day4.appendChild(timeBoxLabel);
    } else if (day == "5") {
        day5.appendChild(timeBox);
        day5.appendChild(timeBoxLabel);
    } else if (day == "6") {
        day6.appendChild(timeBox);
        day6.appendChild(timeBoxLabel);
    } else if (day == "7") {
        day7.appendChild(timeBox);
        day7.appendChild(timeBoxLabel);
    }

    countBox++;
}
console.log(dateSelectVal);
addBtn.addEventListener("click", () => {
    if (dateSelectVal == "none") {
        alert("몇일인지 선택해주세요");
        return false;
    }
    addBox();
    console.log(width, height, countBox);
});
