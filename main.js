gsap.registerPlugin(ScrollTrigger); 

let power = document.querySelector(".power");

gsap.from(power, {
    duration: 2,
    x: -1200,
    ease: "circ.out",
    scrollTrigger: {
        trigger: ".power",
    }
})

let Link = document.querySelector(".Link");

gsap.from(Link, {
    duration: 2,
    y: -1200,
    scale: 3,
    ease: "circ.out",
    scrollTrigger: {
        trigger: ".Link",
    }
})

let imagen1 = document.querySelector(".imagen1");

gsap.from(imagen1, {
    duration: 2,
    x: 1000,
    ease: "circ.out",
    scrollTrigger: {
        trigger: ".imagen1",
    }
})

gsap.from(".flex",{
    duration: 3,
    scale: 1.5,
    scrollTrigger: {
        trigger: ".flex",
        toggleActions: "play none play reverse",
    }
})

gsap.from(".video-container",{
    duration: 2,
    y: 400,
    ease: "sine.inOut",
    scrollTrigger: {
    trigger: ".video-container",
    toggleActions: "play none reverse reverse",
    }
}) 

gsap.from(".texto-conoceme", {
    x: -1200,
    duration: 2,
    ease: "circ.out",
    scrollTrigger:{
      trigger: ".texto-conoceme",
      start: "top center",
      end: "bottom bottom",
      toggleActions: "play none reverse reverse",
    }
}) 

gsap.from(".titlesinho", {
    duration: 2,
    opacity: 0,
    y: 200,
    stagger: 0.5,
    delay: 0.3,
    scrollTrigger: {
        trigger: ".titlesinho",
        toggleActions: "play none play reverse",
    }
})

gsap.from(".parrafo-san", {
    duration: 2,
    opacity: 0,
    y: 200,
    stagger: 0.5,
    delay: 0.3,
    scrollTrigger: {
        trigger: ".parrafo-san",
        toggleActions: "play none play reverse",
    }
})

gsap.from(".aboutMe-container", {
    duration: 2,
    y: 1200,
    ease: "circ.out",
})

gsap.from(".h1works",{
    duration: 3.5,
    scale: 1.5,
    x: -1200,
    ease: "circ.out",
    scrollTrigger: {
        trigger: ".h1works",
        start: "top center",
        end: "bottom bottom",
        toggleActions: "play none play reverse",
    }
})

gsap.from(".h2works",{
    duration: 3.5,
    scale: 1.5,
    x: 1200,
    ease: "circ.out",
    scrollTrigger: {
        trigger: ".h1works",
        start: "top center",
        end: "bottom bottom",
        toggleActions: "play none play reverse",
    }
})

gsap.from(".myWorks-vids1-container",{
    x: -600,
    duration: 3,
    ease: "circ.out",
    scrollTrigger: {
    trigger: ".myWorks-vids1-container"
    }
})

gsap.from(".myWorks-vids2-container",{
    x: 600,
    duration: 3,
    ease: "circ.out",
    scrollTrigger: {
    trigger: ".myWorks-vids2-container"
    }
})

gsap.from(".myWorks-vids3-container",{
    y: 600,
    duration: 3,
    ease: "circ.out",
    scrollTrigger: {
    trigger: ".myWorks-vids2-container"
    }
})

gsap.from(".h1vertical",{
    duration: 3.5,
    scale: 1.5,
    x: -1200,
    ease: "circ.out",
    scrollTrigger: {
        trigger: ".h1vertical",
        start: "top center",
        end: "bottom bottom",
        toggleActions: "play none play reverse",
    }
})

gsap.from(".h2vertical",{
    duration: 3.5,
    scale: 1.5,
    x: 1200,
    ease: "circ.out",
    scrollTrigger: {
        trigger: ".h2vertical",
        start: "top center",
        end: "bottom bottom",
        toggleActions: "play none play reverse",
    }
})

gsap.from(".reel-wrapper",{
    y: 600,
    duration: 6,
    ease: "circ.out",
    scrollTrigger: {
        trigger: ".reel-item",
        toggleActions: "play none play reverse",
    }
}) 

gsap.from(".clientes-Text",{
    duration: 1.5,
    x: -1200,
    ease: "circ.out",
    scrollTrigger: {
        trigger: ".clientes-Text",
        toggleActions: "play none play reverse",
    }
})

gsap.from(".image-clientes", {
    duration: 2,
    y: 400,
    opacity: 0,
    scrollTrigger: {
        trigger: ".clientes-Text",
        toggleActions: "play none play reverse",
        delay: .5
    }
})
 
gsap.from(".Contact-Container", {
    duration: 1.5,
    y: 200,
    ease: "circ.out",
    scrollTrigger: {
        trigger: ".contact",
        toggleActions: "play none play reverse",
    }
}) 