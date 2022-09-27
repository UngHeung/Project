//JavaScript is very flexible
//flexible === dangerous
//added EXMAScript 5;
'use strict'; //자바스크립트 엔진을 좀 더 효율적이고 실용적으로 그리고 안정적으로 사용할 수 있다.
//ex) console에서 선언되지않은 변수도 error를 내지않고 출력하는 것을 방지해준다

// ===== LOGO text change =====
let logoText = document.querySelector(".logo_box"); /*document=html로생각하기*/
/*logoText라는 변수 안에 .logo_box를 넣은거양*/

let logoTextArr = ["ㄱㅎㅈ", "ㄱ하자", "기억하자!"]; /*Arr = List로생각하기*/

let index = 0;
let isAdding = true;
let logoTextArrIndex = 0;

function logoChange() {
    setTimeout(() => {
        logoText.innerText = logoTextArr[logoTextArrIndex].slice(0, index);

        if (isAdding) {
            if (index > logoTextArr[logoTextArrIndex].length) {
                isAdding = false;
                logoText.classList.add("change_logo");

                setTimeout(() => {
                    logoText.classList.remove("change_logo");
                    logoChange();
                }, 2000);

                return;
            } else {
                index++;
            }
        } else {
            if (index == 0) {
                isAdding = true;

                logoTextArrIndex = (logoTextArrIndex + 1) % logoTextArr.length;
            } else {
                index--;
            }
        }
        logoChange();
    }, 200);
}

logoChange();
// ===== text change end =====

//===== change full screen =====

let viewport = document.querySelector(".viewport");
let banner_viewport = document.querySelector(".banner_viewport");
let search_box = document.querySelector(".search_box");
let main_sub_page = document.querySelector(".main_sub_page");
let header = document.querySelector(".header");

window.addEventListener("wheel", (e) => {
    console.log(e.deltaY);
    if (e.deltaY > 0) {
        /*1.창올라가게 (viewport줄었어)
        2.내용이올라와
        3.*/
        viewport.style.height = "400px";
        banner_viewport.style.backgroundPositionY = "-530px";
        search_box.style.top = "calc(100px + 300px/2 - 62px/2)";
        header.style.top = "400px";
        main_sub_page.style.display = "block";
        return;
    }
    if (e.deltaY < 0) {
        viewport.style.height = "100vh";
        banner_viewport.style.backgroundPositionY = "-10px";
        main_sub_page.style.display = "none";
        search_box.style.top = "calc(100vh/2 - 62px/2)";
        return;
    }
});