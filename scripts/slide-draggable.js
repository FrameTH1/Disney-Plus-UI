let Slider = document.querySelector('.topic-1-slider-grid')
let innerSlider = document.querySelector('.topic-1-slider-row')

let pressed = false
let startx;
let x;

Slider.addEventListener('mousedown', (e) => {
    pressed = true
    startx = e.offsetX - innerSlider.offsetLeft;
    Slider.style.cursor = 'grabbing'
})

Slider.addEventListener('mouseenter', () => {
    Slider.style.cursor = 'grab'
})

Slider.addEventListener('mouseup', () => {
    Slider.style.cursor = 'grab'
})

window.addEventListener('mouseup', () => {
    pressed = false
})

Slider.addEventListener('mousemove', (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX

    innerSlider.style.left = `${x - startx}px`;

    checkboundary()
})

// mobile

Slider.addEventListener('touchstart', (e) => {
    pressed = true
    startx = e.targetTouches[0].pageX - innerSlider.offsetLeft;
    console.log(startx)
})

Slider.addEventListener('touchend', () => {
    pressed = false
})

Slider.addEventListener('touchmove', (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.targetTouches[0].clientX

    innerSlider.style.left = `${x - startx}px`;

    console.log(x)
    console.log(x - startx)

    checkboundary()
})

function checkboundary() {
    let outer = Slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = '0px'
    } else if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`
    }
}

let Slider2 = document.querySelector('.topic-2-slider-grid')
let innerSlider2 = document.querySelector('.topic-2-slider-row')

let pressed2 = false
let startx2;
let x2;

Slider2.addEventListener('mousedown', (e) => {
    pressed2 = true
    startx2 = e.offsetX - innerSlider2.offsetLeft;
    Slider2.style.cursor = 'grabbing'
})

Slider2.addEventListener('mouseenter', () => {
    Slider2.style.cursor = 'grab'
})

Slider2.addEventListener('mouseup', () => {
    Slider2.style.cursor = 'grab'
})

window.addEventListener('mouseup', () => {
    pressed2 = false
})

Slider2.addEventListener('mousemove', (e) => {
    if (!pressed2) return;
    e.preventDefault();

    x2 = e.offsetX

    innerSlider2.style.left = `${x2 - startx2}px`;

    checkboundary2()
})

// mobile

Slider2.addEventListener('touchstart', (e) => {
    pressed2 = true
    startx2 = e.targetTouches[0].pageX - innerSlider2.offsetLeft;
    console.log(startx2)
})

Slider2.addEventListener('touchend', () => {
    pressed2 = false
})

Slider2.addEventListener('touchmove', (e) => {
    if (!pressed2) return;
    e.preventDefault();

    x = e.targetTouches[0].clientX

    innerSlider2.style.left = `${x - startx2}px`;

    console.log(x2)
    console.log(x2 - startx2)

    checkboundary2()
})

function checkboundary2() {
    let outer2 = Slider2.getBoundingClientRect();
    let inner2 = innerSlider2.getBoundingClientRect();

    if (parseInt(innerSlider2.style.left) > 0) {
        innerSlider2.style.left = '0px'
    } else if (inner2.right < outer2.right) {
        innerSlider2.style.left = `-${inner2.width - outer2.width}px`
    }
}

let Slider3 = document.querySelector('.topic-3-slider-grid')
let innerSlider3 = document.querySelector('.topic-3-slider-row')

let pressed3 = false
let startx3;
let x3;

Slider3.addEventListener('mousedown', (e) => {
    pressed3 = true
    startx3 = e.offsetX - innerSlider3.offsetLeft;
    Slider3.style.cursor = 'grabbing'
})

Slider3.addEventListener('mouseenter', () => {
    Slider3.style.cursor = 'grab'
})

Slider3.addEventListener('mouseup', () => {
    Slider3.style.cursor = 'grab'
})

window.addEventListener('mouseup', () => {
    pressed3 = false
})

Slider3.addEventListener('mousemove', (e) => {
    if (!pressed3) return;
    e.preventDefault();

    x3 = e.offsetX

    innerSlider3.style.left = `${x3 - startx3}px`;

    checkboundary3()
})

// mobile

Slider3.addEventListener('touchstart', (e) => {
    pressed3 = true
    startx3 = e.targetTouches[0].pageX - innerSlider3.offsetLeft;
    console.log(startx3)
})

Slider3.addEventListener('touchend', () => {
    pressed3 = false
})

Slider3.addEventListener('touchmove', (e) => {
    if (!pressed3) return;
    e.preventDefault();

    x = e.targetTouches[0].clientX

    innerSlider3.style.left = `${x - startx3}px`;

    console.log(x3)
    console.log(x3 - startx3)

    checkboundary3()
})

function checkboundary3() {
    let outer3 = Slider3.getBoundingClientRect();
    let inner3 = innerSlider3.getBoundingClientRect();

    if (parseInt(innerSlider3.style.left) > 0) {
        innerSlider3.style.left = '0px'
    } else if (inner3.right < outer3.right) {
        innerSlider3.style.left = `-${inner3.width - outer3.width}px`
    }
}

let Slider4 = document.querySelector('.topic-4-slider-grid')
let innerSlider4 = document.querySelector('.topic-4-slider-row')

let pressed4 = false
let startx4;
let x4;

Slider4.addEventListener('mousedown', (e) => {
    pressed4 = true
    startx4 = e.offsetX - innerSlider4.offsetLeft;
    Slider4.style.cursor = 'grabbing'
})

Slider4.addEventListener('mouseenter', () => {
    Slider4.style.cursor = 'grab'
})

Slider4.addEventListener('mouseup', () => {
    Slider4.style.cursor = 'grab'
})

window.addEventListener('mouseup', () => {
    pressed4 = false
})

Slider4.addEventListener('mousemove', (e) => {
    if (!pressed4) return;
    e.preventDefault();

    x4 = e.offsetX

    innerSlider4.style.left = `${x4 - startx4}px`;

    checkboundary4()
})

// mobile

Slider4.addEventListener('touchstart', (e) => {
    pressed4 = true
    startx4 = e.targetTouches[0].pageX - innerSlider4.offsetLeft;
    console.log(startx4)
})

Slider4.addEventListener('touchend', () => {
    pressed4 = false
})

Slider4.addEventListener('touchmove', (e) => {
    if (!pressed4) return;
    e.preventDefault();

    x = e.targetTouches[0].clientX

    innerSlider4.style.left = `${x - startx4}px`;

    console.log(x4)
    console.log(x4 - startx4)

    checkboundary4()
})

function checkboundary4() {
    let outer4 = Slider4.getBoundingClientRect();
    let inner4 = innerSlider4.getBoundingClientRect();

    if (parseInt(innerSlider4.style.left) > 0) {
        innerSlider4.style.left = '0px'
    } else if (inner4.right < outer4.right) {
        innerSlider4.style.left = `-${inner4.width - outer4.width}px`
    }
}