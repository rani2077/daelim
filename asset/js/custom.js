

// 비주얼 영역 스와이퍼
visualTxt1 = [
    'PISA SERIES'
    ,'EDGE-LIGHT SERIES'
    ,'FIT SERIES'
    ,'100년을 향한 59번째 도약'
    ,'우리의 독보적인 우월함'
    ,'환경과 미래 세대를 위한 선택'
];
visualTxt2 = [
    'BATH COLLECTION'
    ,'BATH COLLECTION'
    ,'BATH COLLECTION'
    ,'Since. 1966'
    ,'THE BEST'
    ,'SMART TECH'
];




var swiper = new Swiper(".visual-swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + "</span>";
        return `<div class=${className}>
                    <p class="title">${visualTxt1[index]}</p>
                    <span class="desc">${visualTxt2[index]}</span>
                </div>`
        },
      },
      loop:true,
    speed : 1000,
});




// sc-info swiper 반응형스크립트

let mql = window.matchMedia("screen and (max-width: 768px)");

let flag
function screenCheck(){
    if(mql.matches){
        flag = "enter"
    }else{
        flag = "out"
    }
}
screenCheck()

let slidesPer;


let scInfo = document.getElementsByClassName("sc-info")[0].getElementsByClassName("inner")[0]
let infoHtml = scInfo.innerHTML
let infoFlag = flag;


function infoSwiper(){
    if (mql.matches&&infoFlag == "enter") {
        slidesPer = 2;
        
        infoFlag = "out";
        // console.log("작다");
        scInfo.innerHTML = infoHtml;

        let swiper = new Swiper(".info-swiper", {
            slidesPerView: slidesPer,
            centeredSlides: true,
            spaceBetween: 10,
            speed:1000,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
        
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
        });
    

    } else if(!(mql.matches)&&infoFlag == "out"){
        slidesPer = 3;
        infoFlag = "enter"
        // console.log("크다");
        scInfo.innerHTML = infoHtml;

        let swiper = new Swiper(".info-swiper", {
            slidesPerView: slidesPer,
            centeredSlides: true,
            spaceBetween: 10,
            speed:1000,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
        
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
        });
    
    } 
    

}
infoSwiper()
window.addEventListener("resize",infoSwiper)



$(".sc-info .info-item").click(function(el){
    el.preventDefault();
})




//sc-tech 마우스 오버 애니메이션

tag = [
    "Automatic Flushing",
    "Perfect Flushing Performance",
    "Rimless Design",
    "Auto Open-Close Lid",
    "Clean-Cera Coating",
    "Specialized Design For Korean"
]
text = [
    "자동 물내림 기능",
    "완벽한 수세력",
    "림리스 디자인",
    "자동 개폐 기능",
    "오염 방지 특수 코팅",
    "한국인 체형 특화 디자인"
]
desc = [
    "사용자의 손이 닿지 않아도 알맞은 양의 물을<br>자동으로 내려주는 최고의 편의, 가장 완벽한 기술",
    "특허로 검증된 4단계 2회 세척법과 볼 세척력 강화 장치로<br>저수압에서도 기능이 극대화 되는 독보적인 수세 기술",
    "양변기 가장자리의 테두리를 제거하여 오물과 세균이<br>쌓이는 모서리 공간까지 집중한 위생 디자인",
    "인체 동작을 감지하여 사용자가 손을 대지 않아도<br>자동으로 여닫히는 오토 센서 제어 기술",
    "특수 방오 유약을 덧발라 도기 표면 평활도를 높여 변색과 오염에 강하고<br>오래도록 백색도와 청결함이 유지되는 도기 기술",
    "한국인의 평균 체형과 인체 치수를 반영하여<br>설계한 최적의 편안함을 선사하는 인체공학적 설계"
]
$(".sc-tech .tech-box").mouseenter(function(){

    let filter = $(this).data("filter");
    let idx = $(this).index();
    // console.log(filter)
    $(this).addClass("on");
    $(".sc-tech .tech-box").not(this).removeClass('on');

    $(".sc-tech .group-tech").css("background","url(./asset/images/tech-bg"+(idx+1)+".png) center/cover no-repeat")

    html =`<div class="text-box">
        <em class="tag">${tag[idx]}</em>
        <h3 class="text">${text[idx]}</h3>
        <p class="desc">${desc[idx]}</p>
    </div>`

    $('.sc-tech .text-area').html(html);
})

// sc-tech 태블릿모드 태그옵션

$(".sc-tech .group-tech-portable .tech-item").click(function(){
    let idx = Number($(this).index()+1)
    
    $(this).addClass("on");
    $(".sc-tech .tech-item").not(this).removeClass("on");

    $(".group-tech-portable .ico img").attr("src","./asset/images/tech-ico"+idx+".png")
    $(".group-tech-portable .bg").attr("src","./asset/images/tech-mo"+idx+".png")
    

    html =`
    <div class="text-box">
        <h3 class="text">${text[idx-1]}</h3>
        <p class="desc">${desc[idx-1]}</p>
    </div>`

    $(".group-tech-portable .text-box").html(html)
})








// sc-landmark 마우스오버 애니메이션

$(".sc-landmark .landmark-item").mouseenter(function(){

    let idx = Number($(this).index())+1

    console.log(idx);

    $(".sc-landmark .group-landmark").css("background","url('./asset/images/landmark-bg"+idx+".jpg') center/cover no-repeat")

});


// sc-landmark 스크린 사이즈 감지 스와이퍼 스크립트

let scLand = document.getElementsByClassName("sc-landmark")[0]
let landHtml = scLand.innerHTML
let landFlag = flag;


let landSlide;

function landmarkSwiper(){
    if (mql.matches&&landFlag == "enter") {
        landSlide = 1.4;
        landFlag = "out";
        // console.log("작다");
        scLand.innerHTML = landHtml;

        let landSwiper = new Swiper(".landmark-swiper", {
            slidesPerView: landSlide,
            centeredSlides: true,
            spaceBetween: 10,
            speed:1000,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
        
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        
        });
    

    } else if(!(mql.matches)&&landFlag == "out"){
        landSlide = 3;
        landFlag = "enter"
        // console.log("크다");
        scLand.innerHTML = landHtml;

        let landSwiper = new Swiper(".landmark-swiper", {
            slidesPerView: landSlide,
            centeredSlides: true,
            spaceBetween: 10,
            speed:1000,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
        
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        
        });
    
    } 
}
landmarkSwiper()
window.addEventListener("resize",landmarkSwiper)






// sc-media 마우스오버 좌우 애니메이션

$(".sc-media .media-list .media-item").mouseenter(function(){
    $(this).addClass("on");
    $(".sc-media .media-item").not(this).removeClass("on");
})

// sc-media 태블릿 모드 스와이퍼
var swiper = new Swiper(".media-swiper", {
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 10,
    speed:1000,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// sc-media 비디오 모달
$(".sc-media .media-item").click(function(){
    let videoSrc = "asset/video/video-modal" + $(this).data("filter") + ".mp4";
    let videoEl = document.getElementById("video-src");
    let videoFrame = document.getElementById("video-frame");
    
    videoEl.setAttribute("src",videoSrc);
    let viRender = videoFrame.outerHTML
    function viTurnOn(){
        $(".video-modal").addClass("on");
        videoFrame.outerHTML =  viRender;
    }
    
    videoEl.addEventListener("load", viTurnOn());
})

$(".sc-media .close-btn").click(function(){
    $(".video-modal").removeClass("on");
})




// footer 패밀리사이트 선택옵션 애니메이션

$(".footer .family-area button").click(function(){
    $(this).parent(".family-box").parent(".family-area").toggleClass('on');
    $(this).toggleClass('delay');
});


// 모바일 하단 메뉴
let lastScroll = window.scrollY;
window.addEventListener("scroll",function(e){

    let yPos = window.scrollY;

    if(lastScroll > yPos){
        $(".gnb-bottom").removeClass("on");
        $(".btn-top").removeClass("on")
    }else if(lastScroll < yPos){
        $(".gnb-bottom").addClass("on");
        $(".btn-top").addClass("on")


    }
    
    lastScroll = yPos;
})




// 헤더 마우스오버

// $(".sc-header .service-name").mouseenter(function(){
//     $(this).siblings(".group-sub").addClass("on");
// })
// $(".sc-header .service-name").mouseout(function(){
//     $(this).siblings(".group-sub").removeClass("on");
// })

// 햄버거버튼 애니메이션


$(".sc-header .btn-hamburger").click(function(e){
    e.preventDefault();
    $(".sc-side").addClass("on");
    $(".sc-side-portable").addClass("on");
    $('body').addClass("no-scroll");
});
$(".sc-side .btn-close").click(function(e){
    e.preventDefault();
    $(".sc-side").removeClass('on');
    $('body').removeClass("no-scroll");
})
$(".sc-side-portable .close-area").click(function(){
    $(".sc-side-portable").removeClass("on");
    $('body').removeClass("no-scroll");
})

// 태블릿 사이즈 햄버거 버튼

$(".sc-side-portable .link-name").click(function(e){
    e.preventDefault();
    $(this).toggleClass("on");
    $(this).siblings(".link-box").toggleClass("on");
    $(this).siblings(".link-box").children(".tag-wrap").addClass("open");
    $(this).siblings(".link-box").children(".sub-wrap").addClass('on');

    $(this).parent(".link-item").siblings(".link-item").children('.link-name').removeClass("on");
    $(this).parent(".link-item").siblings(".link-item").children('.link-box').removeClass("on");


    $(".sc-side-portable .tag-wrap").click(function(e){
        e.preventDefault();
        $(this).toggleClass("open");
        $(this).siblings('.sub-wrap').toggleClass("on");
    })
})


// let temp = document.getElementsByClassName("test").children(".link-sub")
// let temp = document.querySelector(".test .link-sub")
// let temp1223 = document.querySelector(".test").children
// console.log(temp.clientHeight);
// console.log(temp1223.length);


// 제품검색 버튼 클릭

$(".group-btn .search-area").click(function(e){
    e.preventDefault();
    $(".search-area").removeClass("on");
    setTimeout(function(){
        $(".sc-search").addClass("on");
    },500)
})

$(".sc-search .close-btn").click(function(){
    $(".sc-search").removeClass("on");
    setTimeout(function(){
        $(".search-area").addClass("on");
    },500)

})


// 탑버튼 클릭

$(".group-btn .btn-top").click(function(e){
    e.preventDefault();
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
})



// gsap 애니메이션

gsap.utils.toArray("[data-fade]").forEach(element => {
    // console.log(element);
    gsap.to(element,{yPercent:20,opacity:0})
    ScrollTrigger.create({
        trigger:element,
        start:"top 80%",
        end:"bottom top",
        // markers:"true",
        onEnter:function(){
            gsap.to(element,{yPercent:0,opacity:1})

        }
    })
})

