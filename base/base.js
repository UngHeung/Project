// ===== LOGO text change =====
let logoText = document.querySelector(".logo-text");
let logoTextArr = ["ㄱㅎㅈ", "ㄱ하자", "기억하자!"];

let index = 0;
let isAdding = true;
let logoTextArrIndex = 0;

function logoChange() {
    setTimeout(() => {
        logoText.innerText = logoTextArr[logoTextArrIndex].slice(0, index);

        if (isAdding) {
            if (index > logoTextArr[logoTextArrIndex].length) {
                isAdding = false;
                logoText.classList.add("change-logo");

                setTimeout(() => {
                    logoText.classList.remove("change-logo");
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
