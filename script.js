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
    // duration: 1,
    y: 5,
    filter: "blur(5px)",
    // Uma animação é animada atrás da outra (intercalada)
    stagger: .3,
    scrollTrigger: {
        trigger: ".cards",
        // markers: true,
        start: "0% 80%",
        end: "100% 70%",
        scrub: true
    }
});

gsap.from(".secaoObrigado ul li", {
    opacity: 0,
    x: 40,
    filter: "blur(40px)",
    stagger: .1,
    scrollTrigger: {
        trigger: ".secaoObrigado ul",
        // markers: true,
        start: "0% 80%",
        end: "100% 50%",
        scrub: true
    }

});

gsap.from("footer", {
    y: "-30%",
    // Renderiza a página sem jogar o posicionamento acima
    immediateRender: false,
    scrollTrigger: {
        trigger: "footer",
        // Para ficar sincronizado com a rolagem da página
        scrub: true,
        // markers: true,
        invalidateOnRefresh: true,
        end: "100% 100%"
    }
});




