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
    navigation: {
        nextEl: "#project_swiper .swiper-button-next",
        prevEl: "#project_swiper .swiper-button-prev",
    },
});
/* const poster = new Swiper('#project_design_swiper .design_long_banner', {
    
}) */

const detail = new Swiper('#project_design_swiper .design_right', {
    slidePerView : 1,
})
const head = document.querySelectorAll('header nav a');
const list =document.querySelectorAll('.swiper-slide container');
console.log(head, list)