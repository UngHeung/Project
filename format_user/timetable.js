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
/**
 * 48시간을 30분 간격으로 표시
 * 1시간 간격으로 긴 침
 * 6시간 간격으로 굵은 침, 시간 표시
 */

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
/**
 * select 태그 옵션수가 많으므로 코드 양을 줄이기 위해
 * for 반복문을 사용하여 옵션을 추가
 */

// 시간, 분 값 저장
let dateSelectVal = "none";
let hourSelectVal = 1;
let minuteSelectVal = 0;
dateSelect.addEventListener("change", () => {
    dateSelectVal = dateSelect.value;
});
hourSelect.addEventListener("change", () => {
    hourSelectVal = parseInt(hourSelect.value);
});
minuteSelect.addEventListener("change", () => {
    minuteSelectVal = parseInt(minuteSelect.value);
});
/**
 * select 박스의 선택 값이 바뀔 때마다
 * 바뀐 값을 선언된 변수에 저장
 * 초기값은 시간은 1시간, 분은 0분
 */

// 버튼
const addColor = document.querySelectorAll(".radio-color");
const addBoxCont = document.querySelector(".box-cont");
const addBtn = document.querySelector(".add-box"); // 박스 추가
const delBtn = document.querySelector(".del-box"); // 박스 삭제
/**
 * addColor => 선택된 색상
 * addBoxCont => 타임테이블에 입력할 간단한 문자열
 */

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

/* 박스 색상 가져오기 */
let colorSet = "#ffc4c4"; // 처음 색상
for (let i = 0; i < addColor.length; i++) {
    addColor[i].addEventListener("click", () => {
        if ((addColor[i].checked = true)) {
            colorSet = addColor[i].innerText;
        }
    });
}
/**
 * 색상 라디오버튼이 클릭될 때마다 addColor 변수가 갖는 색상 값이 변경됨
 */

/* 박스 추가 */
function addBox() {
    width = 80;
    height = hourSelectVal * 30 + minuteSelectVal;
    day = dateSelectVal;

    let timeBox = document.createElement("input");
    let timeBoxLabel = document.createElement("label");

    timeBox.setAttribute("type", "checkbox");
    timeBox.setAttribute("id", `box-${countBox}`);
    timeBox.setAttribute("class", "box");
    timeBox.style.display = "none";
    timeBoxLabel.setAttribute("for", `box-${countBox}`);
    // timeBoxLabel.style.display = "inline-block";
    // timeBoxLabel.style.width = `${width}px`;
    timeBoxLabel.style.height = `${height}px`;
    timeBoxLabel.style.backgroundColor = `${colorSet}`;
    timeBoxLabel.innerHTML = `${addBoxCont.value}`;

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
/**
 * 너비는 80px 고정, 높이는 시간당 30px으로 다음과 같이 구함
 * hourSelectVal(선택된 시간) * 30 + minuteSelectVal(선택된 분)
 * 추가 버튼을 클릭할 때마다 지정된 너비와 높이, 색상 가진 div 태그에
 * addboxCont 변수가 가진 값을 입력 후
 * 선택된 일자의 자리에 추가
 */

addBtn.addEventListener("click", () => {
    if (dateSelectVal == "none") {
        alert("몇일인지 선택해주세요");
        return false;
    }
    addBox();
    addBoxCont.value = "";
});
/**
 * 일자가 선택되지 않았을 경우
 * 알림창 띄움
 */
