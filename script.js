gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

function animarPagina(){
    
    // ANIMAÇÕES HERO
    gsap.from(".hero", {
        opacity: 0,
        duration: 1
    });
    
    // ANIMAÇÕES HERO
    gsap.from("picture:nth-child(1)", {
        y: -60,
        duration: 1
    });
    
    // ANIMAÇÕES HERO
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
    
    // ANIMAÇÕES FOOTER
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
    
    // ANIMAÇÕES LETRAS
    
    // Seleciono todos os elementos da pagina que tem a classe textoSplit
    const grupoTextoSplit = document.querySelectorAll(".textoSplit");
    
    grupoTextoSplit.forEach(textoUnicoSplit => {
    
        // Divido por div palavras e cada letra
        const split = SplitText.create(textoUnicoSplit, {
            type: "lines, words, chars",
            mask: "lines"
        })
        
        gsap.from(split.chars, {
            y: 40,
            opacity: 0,
            duration: .3,
            stagger: .03,
            scrollTrigger: {
                trigger: textoUnicoSplit,
            },
        });
    
    });

}

// ANIMAÇÕES PRELOADER
const tl = gsap.timeline({
    onComplete(){
        animarPagina(),
        gsap.to("#preloader", {
            opacity: 0,
            display: "none"
        })
    }
});

tl.to("#preloader path", {
    duration: 1,
    strokeDashoffset: 0
});

tl.to("#preloader path", {
    fill: "rgb(168, 19, 19)",
    duration: 0.5,
    strokeDashoffset: 0
});



