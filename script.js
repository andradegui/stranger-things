gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1,
  effects: true,
});

// ANIMAÇÕES HERO

gsap.from(".hero", {
    opacity: 0,
    duration: 1
});

gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1
});

gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1
});

// ANIMAÇÕES CIDADE

gsap.from(".card", {
    opacity: 0,
    duration: 1,
    y: 30,
    filter: "blur(20px)",
    stagger: .3,
    scrollTrigger: {
        trigger: ".cards",
        markers: true
    }
})


