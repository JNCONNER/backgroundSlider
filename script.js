//create a variable below to target the elements in css like left button and right button are the arrows
//slides are the images called slide in html
const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

//initialize a varible below

let activeSlide = 0

rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slides.length - 1) {
       activeSlide = 0 
    }
    setBgToBody()
    setActiveSlide()
})
leftBtn.addEventListener('click', () => {
    activeSlide--

    if(activeSlide < 0) {
       activeSlide = slides.length - 1
    }
    setBgToBody()
    setActiveSlide()
})
rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slides.length - 1) {
       activeSlide = 0 
    }
    setBgToBody()
    setActiveSlide()
})

//set the background to the body as follows

setBgToBody()
function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide () {
    slides.forEach(slide => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}