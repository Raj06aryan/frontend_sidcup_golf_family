var crsr = document.querySelector("#cursor")
var blurr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30 + "px"
    crsr.style.top = dets.y + "px"
    blurr.style.left = dets.x -250 + "px"
    blurr.style.top = dets.y -250 + "px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav",{
    backgroundColor : "#000",
    height : "110px",
    duration : 0.5,
    scrollTrigger : {
        trigger : "#nav",
        scroller : "body",
        // markers : true,
        start : "top -10%",
        end : "top -11%",
        scrub : 2
    }
});
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger : {
        trigger : "#main",
        scroller : "body",
        // markers : true,
        start : "top -30%",
        end : "top -80%",
        scrub : 2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y : 50,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#about-us",
        scroller : "body",
        // markers : true,
        start : "top 70%",
        end : "top 58%",
        scrub : 2
    }
})

gsap.from(".card",{
    scale : 0.8,
    opacity : 0,
    duration : 0.1,
    stagger : 0.1,
    scrollTrigger : {
        trigger : "#cards-container",
        scroller : "body",
        markers : false,   //getting a issue because of here sometimes card is showing and sometimes not
        start : "top 70%",  //whenever you open the website with live server just change start 70 to 69 or vice versa
        end : "top 65%",
        scrub : 2
    }
})

gsap.from("#colon1",{
    y : -70,
    x : -70,
    scrollTrigger : {
        trigger : "#colon1",
        scroller : "body",
        // markers : true,
        start : "top 50%",
        end : "top 45%",
        scrub : 2
    }
})

gsap.from("#colon2",{
    y : 70,
    x : 70,
    scrollTrigger : {
        trigger : "#colon1",
        scroller : "body",
        // markers : true,
        start : "top 50%",
        end : "top 45%",
        scrub : 2
    }
})

gsap.from("#page4 h1",{
    y : 50,
    scrollTrigger : {
        trigger : "#page4 h1",
        // markers : true,
        start : "top 85%",
        end : "top 80%",
        scrub : 2
    }
})
