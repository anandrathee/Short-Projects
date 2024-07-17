let tl = gsap.timeline()


let workFirst = document.querySelector("#work-first");
let mobImg = document.querySelector(".mob-img");

workFirst.addEventListener("mouseenter", function(){
    mobImg.style.display = "initial";
    tl.from(".mob-img",{
        y:100,
        duration:0.3,
        })
})

workFirst.addEventListener("mouseleave", function(){
    mobImg.style.display = "none";    
})


let workSec = document.querySelector("#work-sec");
let indigency = document.querySelector(".indi-img");

workSec.addEventListener("mouseenter", function(){
    indigency.style.display = "initial";
    tl.from(".indi-img",{
        y:100,
        duration:0.3,
        })
})

workSec.addEventListener("mouseleave", function(){
    indigency.style.display = "none";    
})


let workThird = document.querySelector("#work-third");
let eneftee = document.querySelector(".ene-img");

workThird.addEventListener("mouseenter", function(){
    eneftee.style.display = "initial";
    tl.from(".ene-img",{
        y:100,
        duration:0.3,
        })
})

workThird.addEventListener("mouseleave", function(){
    eneftee.style.display = "none";
})




let crsr = document.querySelector(".crsr");

function cursorAnimation() {
    document.addEventListener("mousemove", function(dets) {
        crsr.style.left = `${dets.pageX - crsr.offsetWidth / 2}px`;
        crsr.style.top = `${dets.pageY - crsr.offsetHeight / 2}px`;
    });
}

cursorAnimation();



tl.from(".header", {
    y: -150,
    // stagger: 0.25,
    duration: 0.6,
    delay: 0.5     

});


tl.from(".home h1",{
    y: 100,
    opacity: 0,
    stagger: 0.25,
    duration: 1,
    delay: 0.3,
    ease:Power4,
    
})

tl.from(".home-bottom button",{
    x: -100,
    opacity: 0,
    duration: 0.3,
    delay: 0.1,
    ease:Power4,
})

tl.from(".home-bottom p",{
    x: 100,
    opacity: 0,
    duration: 0.3,
    delay: 0.1,
    ease:Power4,
})





tl.from(".about-top h1",{
    transform: "translateX(-100%)",
    scrollTrigger:{
        trigger:".about",
        scroller: "body",
        start:"top 60%",
        end:"top 43%",
        scrub:1,
        pin:true,
    }
})




// tl.from(".title h3",{
//     transform: "translateX(-80%)",
//     scrollTrigger:{
//         trigger:".projects",
//         scroller: "body",
//         start:"top 60%",
//         end:"top 43%",
//         scrub:1,
//         pin:true,
//     }
// })

// tl.from(".work h1",{
//     transform: "translateX(-80%)",
//     scrollTrigger:{
//         trigger:".projects",
//         scroller: "body",
//         markers:true,
//         start:"top 60%",
//         end:"top 43",
//         scrub:1,
//         pin:true,
//     }
// })