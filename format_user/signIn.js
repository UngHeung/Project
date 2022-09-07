// 모두동의 버튼
const allChk = document.getElementById("terms-all");
const chkBoxAll = document.getElementsByClassName("check-box");

allChk.addEventListener("change", () => {
    isChked();
    btnDisable();
});

// 필수 동의 버튼 확인
for (let i = 0; i < chkBoxAll.length; i++) {
    chkBoxAll[i].addEventListener("change", () => {
        btnDisable();
    });
}

// 모두 동의 버튼
function isChked() {
    // 모두 동의 체크시
    if (allChk.checked) {
        for (let i = 0; i < chkBoxAll.length; i++) {
            // 모든 버튼 체크
            chkBoxAll[i].checked = true;
        }
        // 모두 동의 체크 해제시
    } else {
        for (let i = 0; i < chkBoxAll.length; i++) {
            // 모든 버튼 체크 해제
            chkBoxAll[i].checked = false;
        }
    }
}

// 확인 버튼 활성화
const agreeBtn = document.querySelector(".agree-btn");
const chk_1 = document.getElementById("terms-1st");
const chk_2 = document.getElementById("terms-2nd");
const chk_3 = document.getElementById("terms-3rd");

function btnDisable() {
    if (chk_1.checked && chk_2.checked) {
        agreeBtn.disabled = false; // 활성화
        agreeBtn.classList += " button-hover"; // hover 추가
    } else {
        agreeBtn.disabled = true; // 비활성화
        agreeBtn.classList.remove("button-hover"); // hover 삭제
    }
}

// 취소 버튼 - reset
const resetBtn = document.querySelector(".back-btn");
resetBtn.addEventListener("click", () => {
    allChk.checked = false;
    isChked();
    btnDisable();
});

// 동의 시 회원가입
const termsPage = document.querySelector(".mem-terms");

function termsAgree() {
    termsPage.style.transition = "top 1.5s";
    termsPage.style.transitionTimingFunction =
        "cubic-bezier(0.11,-0.3, 0, 0.55)";
    termsPage.style.top = "-1000px";
}

agreeBtn.addEventListener("click", () => {
    termsAgree();
});
