
const tl = gsap.timeline()

tl.from("nav .logo-icon",{
    y:-100,
    duration:0.3,
    delay:1,
    opacity:0,
    // stagger:0.2
})
tl.from("nav ul li",{
    // y:-100,
    // duration:0.3,
    // delay:1,
    opacity:0,
    stagger:0.2
})

tl.from("body .bg-mask",{
    scale:0,
    y: -600,
    opacity:0,
    duration:1
})

tl.from("body .bg-img",{
    opacity:0,
    duration:1,
})

tl.from("body .main-content .center",{
    opacity:0,
    y: 500,
    duration:2
})

tl.fromTo(
    "body .bg-particles",
    {
        scale: 0.5, // Starting scale
        y: -500,
        opacity: 1,
    },
    {
        scale: 1.7, // Ending scale
        y: 300,
        opacity: .5,
        duration: 10,
        repeat: -1,
        ease: "Linear.easeNone",
    }
);

const warp = gsap.timeline()

warp.to("feTurbulence",{
    delay:0.5,
    duration:10,
    repeat:-1,
    yoyo:true,
    ease:"Sine.easeInOut",
    attr:{
        baseFrequency:0.01
    }
})

warp.to("feDisplacementMap",{
    duration:10,
    repeat:-1,
    yoyo:true,
    ease:"Sine.easeInOut",
    attr:{
        scale: 77
    }
}, 0)
