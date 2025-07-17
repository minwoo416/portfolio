//전체 수직 스크롤
const wrap = new Swiper('#wrap',{
    direction:'vertical',
    mousewheel:true,
})
const skill = document.querySelectorAll('.skill_container .skill');
const application = document.querySelectorAll('.skill .application');
const hover = document.querySelector('.my_skill > p')
skill.forEach((obj)=>{
    const img = obj.querySelector('img');
    const text = obj.querySelector('.application');
    img.addEventListener('mouseenter',()=>{
        hover.innerHTML = text.innerHTML;
        hover.classList.add('active')
    })
    img.addEventListener('mouseleave',()=>{
        hover.classList.remove('active')
    })
})
console.log(skill, application);

/* 스와이퍼 */
const project = new Swiper("#project_swiper", {
    pagination: {
        el: "#project_swiper .swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: "#project_swiper .swiper-button-next",
        prevEl: "#project_swiper .swiper-button-prev",
    },
});
const poster = new Swiper('#project_design_swiper .design_poster', {
    loop:true,
    slidesPerView: 3,
    autoplay:{delay:0},
    speed: 5000,
    spaceBetween:30,
})
const long = new Swiper('#project_design_swiper .design_long_banner',{
    loop:true,
    slidesPerView: 2,
    autoplay:{delay:0},
    speed: 3000,
    spaceBetween:30,
})
const detail = new Swiper('#project_design_swiper .design_right', {
    slidePerView :1,
    autoplay:{delay:2000},
})

const design = document.querySelectorAll('#project_design_swiper .swiper-slide');
const popup = document.querySelector('.popup_bg')
for(let sns of design){
    sns.addEventListener('click',()=>{
        popup.style.display ='block';
        popup.children[0].children[0].src = sns.children[0].src
        //팝업 실행 시 전체 수직 Swiper 스크롤 기능 막기
        wrap.mousewheel.disable();//스크롤 풀기 enable()
    })
}
popup.addEventListener('click',()=>{
    popup.style.display = 'none'
    wrap.mousewheel.enable()
})
const introText = "min woo's \nPORTFOLIO";
const target = document.querySelector('#intro_container .container #typing');
let i = 0;

function typing(){
    if(i < introText.length){
        const char = introText[i];
        if(char === "\n"){
            target.innerHTML += "<br>";
        }else{
            target.innerHTML += char;
        }
        i++;
        setTimeout(typing,200)
    }
}
typing();