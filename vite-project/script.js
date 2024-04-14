
const tl = gsap.timeline()

tl.from("nav .logo-icon, nav ul li",{
    y:-100,
    duration:0.3,
    delay:1,
    opacity:0,
    stagger:0.2
})

