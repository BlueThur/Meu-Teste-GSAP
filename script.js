 let caixa = document.querySelector(".caixa");
 let circulo = document.querySelector(".circulo")
 
 gsap.to([caixa, circulo], {
    height:"200px",
    width:'200px',
    background:'yellow',
    x:200,
    duration:1
});

gsap.to(caixa, {
    delay: 1,
    background:"pink", 
    y:200, 
    duration: 1
});

gsap.to(circulo, {
    delay: 1, 
    background: "lime", 
    duration:1, 
    x:0, 
    borderRadius: 0
});

gsap.to(circulo, {
    delay: 2, 
    duration:1, 
    y:-200, 
    borderRadius: 100, 
    background: 'linear-gradient(#007bff, #9d2cff)'
});

gsap.to(caixa, {
    delay: 2, 
    duration:1, 
    y:400, 
    borderRadius: 100,
    background: 'linear-gradient( #37ee65ff, #b1dd60ff)'
});

gsap.to(caixa, {
    background: "radial-gradient( #dc95eeff, #9142b6ff, #5c0685ff)",
    delay: 3,
    border:"1px solid white",
    boxShadow: "0px 0px 30px 10px #f696ffff",
    x: 100
});

gsap.to(circulo, {
    background: "radial-gradient( #01dce4ff, #3a85e7ff, #0b4086ff)",
    delay: 3,
    border:"1px solid white",
    boxShadow: "0px 0px 30px 10px #cbecffff",
    x: 100
});

gsap.to("body", {
    delay: 4,
    background: 'white'
})

gsap.to([circulo, caixa], {
    delay: 4,
    boxShadow: 'none',
    border: 'none',
    borderRadius: 0
});

gsap.to(circulo, {
    delay:4,
    background: '#80ff59ff'
});

gsap.to(caixa, {
    delay:4,
    background: '#ffb429ff'
});

gsap.to([caixa, circulo], {
    delay: 5,
    height: '100px',

});

gsap.to(circulo, {
    y:100,
    delay:6,
    
});

gsap.to(caixa, {
    y:200,
    delay:6
});

gsap.to(circulo, {
    fontSize:40,
    delay:7,
});
