
const tl = gsap.timeline()

tl.from("nav .logo-icon, nav ul li",{
    y:-100,
    duration:0.3,
    delay:1,
    opacity:0,
    stagger:0.2
})

tl.from("body .bg-mask",{
    scale:0,
    y: -500,
    opacity:0,
    duration:1
})

tl.from("body .bg-particles, body .bg-img",{
    opacity:0,
    duration:1,
})


const warp = gsap.timeline()

warp.to("feTurbulence",{
    duration:15,
    repeat:-1,
    yoyo:true,
    ease:"Linear.easeNone",
    attr:{
        baseFrequency:0.01
    }
})

warp.to("feDisplacementMap",{
    duration:15,
    repeat:-1,
    yoyo:true,
    ease:"Linear.easeNone",
    attr:{
        scale: 77
    }
}, 0)
