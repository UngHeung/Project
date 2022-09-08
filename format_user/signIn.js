// 모두동의 버튼
const allChk = document.getElementById("terms-all");
const chkBoxAll = document.getElementsByClassName("check-box");
let count = 0;

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
        allChk.checked = false;
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
    termsPage.style.top = "-1500px";
}

agreeBtn.addEventListener("click", () => {
    termsAgree();
});

// 유효성 체크
// 체크 값 가져오기
let userId = document.querySelector(".user-id"); // 아이디
let userPwd1 = document.querySelector(".user-pwd"); // 비밀번호
let userPwd2 = document.querySelector(".user-pwd2"); // 비밀번호 확인
let userName = document.querySelector(".user-name"); // 이름
let mobCarr = document.getElementById("mob-carr"); // 통신사
let userPhone1 = document.querySelectorAll(".user-phone1"); // 연락처
let userPhone2 = document.querySelectorAll(".user-phone2"); // 연락처
let userPhone3 = document.querySelectorAll(".user-phone3"); // 연락처
let userAddr1 = document.querySelector(".user-addr1"); // 주소
let userAddr2 = document.querySelector(".user-addr2"); // 나머지 주소

// 체크 결과
let userIdChk = document.querySelector(".id-chk"); // 아이디 유효성
let userPwdChk = document.querySelector(".pwd-chk"); // 비밀번호 유효성
let userNameChk = document.querySelector(".name-chk"); // 이름 유효성

// 중복 체크 버튼
// idChkBtn.addEventListener("click", () => {
//     idCheck();
// });

// keyup setting
userId.addEventListener("keyup", () => {
    idCheck();
});
userPwd1.addEventListener("keyup", () => {
    pwdDbChk();
    pwdCheck();
});
userPwd2.addEventListener("keyup", () => {
    pwdDbChk();
});
userName.addEventListener("keyup", () => {
    nameChk();
});

// 아이디 체크
function idCheck() {
    let chkChar = document.querySelector(".chk-char");
    let chkLength = document.querySelector(".chk-length");
    let id = userId.value;
    let chk1 = /^[a-z0-9]+$/;
    let chk2 = /^.{4,12}$/;

    if (!chk1.test(id)) {
        chkChar.style.color = "#CC3045";
        chkChar.style.stroke = "#CC3045";
    } else {
        chkChar.style.color = "#499F5D";
        chkChar.style.stroke = "#499F5D";
    }
    if (!chk2.test(id)) {
        chkLength.style.color = "#CC3045";
        chkLength.style.stroke = "#CC3045";
    } else {
        chkLength.style.color = "#499F5D";
        chkLength.style.stroke = "#499F5D";
    }

    if (id == "") {
        chkChar.style.color = "#969696";
        chkChar.style.stroke = "#969696";
        chkLength.style.color = "#969696";
        chkLength.style.stroke = "#969696";
    }
    // 중복체크는 여기서

    return true;
}

// 비밀번호 체크
function pwdCheck() {
    let chkUpper = document.querySelector(".chk-upper");
    let chkLower = document.querySelector(".chk-lower");
    let chkNumber = document.querySelector(".chk-number");
    let chkSpecial = document.querySelector(".chk-special");
    let chkLength = document.querySelector(".chk-length2");

    let pwd = userPwd1.value;

    let chk1 = /[A-Z]*$/;
    let chk2 = /[a-z]*$/;
    let chk3 = /[0-9]*$/;
    let chk4 = /[!@#$%^&*()]*$/;
    let chk5 = /^.{8,16}$/;

    if (!chk1.test(pwd)) {
        chkUpper.style.color = "#CC3045";
        chkUpper.style.stroke = "#CC3045";
    } else {
        chkUpper.style.color = "#499F5D";
        chkUpper.style.stroke = "#499F5D";
    }
    if (!chk2.test(pwd)) {
        chkLower.style.color = "#CC3045";
        chkLower.style.stroke = "#CC3045";
    } else {
        chkLower.style.color = "#499F5D";
        chkLower.style.stroke = "#499F5D";
    }
    if (!chk3.test(pwd)) {
        chkNumber.style.color = "#CC3045";
        chkNumber.style.stroke = "#CC3045";
    } else {
        chkNumber.style.color = "#499F5D";
        chkNumber.style.stroke = "#499F5D";
    }
    if (!chk4.test(pwd)) {
        chkSpecial.style.color = "#CC3045";
        chkSpecial.style.stroke = "#CC3045";
    } else {
        chkSpecial.style.color = "#499F5D";
        chkSpecial.style.stroke = "#499F5D";
    }
    if (!chk5.test(pwd)) {
        chkLength.style.color = "#CC3045";
        chkLength.style.stroke = "#CC3045";
    } else {
        chkLength.style.color = "#499F5D";
        chkLength.style.stroke = "#499F5D";
    }

    if (pwd == "") {
        chkUpper.style.color = "#969696";
        chkUpper.style.stroke = "#969696";
        chkLower.style.color = "#969696";
        chkLower.style.stroke = "#969696";
        chkNumber.style.color = "#969696";
        chkNumber.style.stroke = "#969696";
        chkSpecial.style.color = "#969696";
        chkSpecial.style.stroke = "#969696";
        chkLength.style.color = "#969696";
        chkLength.style.stroke = "#969696";
    }

    return true;
}

// 비밀번호 확인 체크
function pwdDbChk() {
    let chkDouble = document.querySelector(".chk-double");
    let pwd = userPwd1.value;
    let pwd2 = userPwd2.value;

    if (pwd2 != pwd) {
        chkDouble.style.color = "#CC3045";
        chkDouble.style.stroke = "#CC3045";
    } else if (pwd2 == pwd) {
        chkDouble.style.color = "#499F5D";
        chkDouble.style.stroke = "#499F5D";
    }
    if (pwd == "" && pwd2 == "") {
        chkDouble.style.color = "#969696";
        chkDouble.style.stroke = "#969696";
    }
}

// 이름 체크
function nameChk() {
    let chkName = document.querySelector(".chk-name");
    let name = userName.value;
    let chk1 = /^[가-힣]*$/;

    if (!chk1.test(name)) {
        chkName.style.color = "#CC3045";
        chkName.style.stroke = "#CC3045";
    } else {
        chkName.style.color = "#499F5D";
        chkName.style.stroke = "#499F5D";
    }

    if (name == "") {
        chkName.style.color = "#969696";
        chkName.style.stroke = "#969696";
    }
}
