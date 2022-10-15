let slide_viewport = document.querySelector(".slide_viewport");
let slide_page = document.querySelectorAll(".slide_page");
let slide_page_count = slide_page.length - 1;

page_slide(); // 슬라이드

function page_slide() {
    let page_count = 0;
    let slide_page_height = 100;

    // 마우스 휠 이동시 발생 값을 'e'에 담음
    slide_viewport.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            page_count++;
            if (page_count > slide_page_count) {
                page_count = slide_page_count;
            }
            slide_viewport.style.top = `-${page_count * slide_page_height}vh`;
        } else if (e.deltaY < 0) {
            page_count--;
            if (page_count < 0) {
                page_count = 0;
            }
            slide_viewport.style.top = `-${page_count * slide_page_height}vh`;
        }
    });
    /**
     * page_count * slide_page_height = top의 값이 나옴
     * 초기 top = 0 이며, top = -100vh * page_count
     * 페이지가 위로 말려올라가는 형식
     */
}

member_slide(); // 멤버 슬라이드

function member_slide() {
    let slide_bar = document.querySelector(".slide_bar");

    let image_size = 350;
    let slide_count = 0;

    let prev_button = document.querySelector(".slide_button>svg:nth-of-type(1)");
    let next_button = document.querySelector(".slide_button>svg:nth-of-type(2)");

    prev_button.addEventListener("click", () => {
        slide_count--;
        if (slide_count < 0) slide_count = 0;

        slide_bar.style.marginLeft = `-${image_size * slide_count}px`;
        console.log(slide_count);
    });

    next_button.addEventListener("click", () => {
        slide_count++;
        if (slide_count > 5) slide_count = 5;

        slide_bar.style.marginLeft = `-${image_size * slide_count}px`;
        console.log(slide_count);
    });
}

const edit_form_data = new FormData(document.edit_form);

fetch("http://localhost:8080/inform_editOK", {
    method: "POST",
    body: edit_form_data,
})
    .then((response) => response.json())
    .then(function (response) {
        console.log(response);
        //		if(response.check == null) {
        //			alert("");
        //		} else {
        //			alert("");
        //		}
    });
