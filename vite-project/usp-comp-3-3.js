// gsap.from(".sec-usp-comp .card-comp", {
//     duration: 2,
//     opacity: 0,
//     y: 1000,
//     scrollTrigger: {
//       trigger: "sec-usp-container",
//       scroller: window
//     }
//   });
  AOS.init();

  // gsap.registerPlugin(ScrollTrigger);

  // gsap.to(".sec-usp-container container .usp-comp-3-4 .card-comp", 
  // {
  //   y: -1000,
  //   opacity: 0,
  //   duration: 1,
  //   scrolltrigger:{
  //     trigger:"body",

  //   }
  // });

  const tlUsp = gsap.timeline()
 

  tlUsp.from(".sec-usp-comp .sec-usp-comp-3-3,.card-comp .sec-usp-comp .sec-usp-comp-3-4", 
  {
    y: 1000,
    duration:5
  })