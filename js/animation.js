let tl = gsap.timeline();
// hero sec
tl.from(".section-hero-data", {
    x: 1100,
    opacity: 0,
    duration: 2,
    stagger: 0.9,
    scrollTrigger: {
        trigger: ".section-hero-data",
        // scroller: "body",
        // markers:true,
        start: "-50px 20%",
        end: "-50px 10%",
        // start:"top 80%",
        // end: "top 50%",
        scrub: 2,
    }
});

tl.from(".section-hero-image img", {
    sacle: 0,
    opacity: 0,
    duration: 2,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".ection-hero-image img",
        // scroller: "body",
        // markers:true,
        start: "-50px 20%",
        end: "-50px 10%",
        scrub: 2,
    }
});


tl.from(".bio-data", {
    x: 600,
    opacity: 0,
    duration: 2,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".bio-data",
        scroller: "body",
        // markers:true,
        start: "top 40%",
        end: "top 50%",
        scrub: 2,
    }
});

tl.from(".bio-images img", {
    sacle: 0,
    y: 300,
    opacity: 0,
    duration: 1,
    scrub: 2,
    scrollTrigger: {
        trigger: ".bio-images img",
        // scroller: "body",
        // markers:"true",
        start: "-300 50%",
        end: "-300 40%",
        scrub: 2,
    }
});

tl.from("#portfolio-section .common-heading,#portfolio-section p", {
    y: 600,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#portfolio-section .common-heading,#portfolio-section p",
        // scroller: "body",
        // markers:true,
        start: "-700px 50%",
        end: "-700px 40%",
        scrub: 2,
    }
});

// 3 button

tl.from("#portfolio-section .p-btns .hireme-btn", {
    sacle: 0,
    // y: 300,
    opacity:0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#portfolio-section .p-btns .hireme-btn",
        scroller: "body",
        start: "-300px 40%",
        end: "-300px 30%",
        scrub: 2,
    }
});

tl.from(".portfolio-images .img-overlay ", {

    y: 50,
    sacle: 0,
    opacity: 0,
    duration: 1,
    stagger: 2,
    scrollTrigger: {
        trigger: ".portfolio-images .img-overlay",
        // scroller: "body",
        // markers: true,
        start: "-100px 60%",
        end: "-100px 10%",
        scrub: "2",
    }
});

// our services
tl.from(".section-service .common-heading,.section-service .paraAnimation", {
    y: 600,
    opacity: 0,
    duration: 2,
    stagger: 0.9,
    scrollTrigger: {
        trigger: ".section-service .common-heading,.section-service .paraAnimation",
        scroller: "body",
        // markers:true,
        start: "-800px 30%",
        end: "-800px 15%",
        scrub: 2,
    }
});

// icon box
tl.from(".section-service .container .services-box", {
    y: 50,
    duration: 0.9,
    stagger: 1,
    scrollTrigger: {
        trigger: ".section-service .container .services-box",
        // scroller: "body",
        // markers: true,
        start: "-100px 70%",
        end: "-100px 10%",
        scrub: 2,
    }
});

// contact heading
tl.from(".contact-section .container .common-heading,.contact-section .container p,.contact-container form", {
    y: 600,
    opacity: 0,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: ".contact-section .container .common-heading,.contact-section .container p,.contact-container form",
        scroller: "body",
        // markers:true,
        start: "-700px 40%",
        end: "-700px 0%",
        scrub: 2,
    }
});

//   footer
// tl.from(".footer .container .f-about,.footer .container .f-links,.footer .container .f-services,.footer .container .f-address ", {
//     y: 200,
//     opacity: 0,
//     duration: 4,
//     stagger: 4,
//     scrollTrigger: {
//         trigger: ".footer .container .f-about,.footer .container .f-links,.footer .container .f-services,.footer .container .f-address ",
//         scroller: "body",
//         // markers:true,
//         start: "-720px 30%",
//         end: "-720px 10%",
//         scrub: 2,
//     }
// });

tl.from(".footer .container .f-about h3,.footer .container .f-about p  ,.footer .container .f-links,.footer .container .f-services,.footer .container .f-address ", {
    y: 200,
    opacity: 0,
    duration: 4,
    stagger: 1,
    scrollTrigger: {
        trigger: ".footer .container .f-about h3,.footer .container .f-about p  ,.footer .container .f-links,.footer .container .f-services,.footer .container .f-address ",
        scroller: "body",
        // markers:true,
        start: "-720px 30%",
        end: "-720px 10%",
        scrub: 2,
    }
});

// about page start
tl.from(".team .container-team h2 ", {
    y: 150,
    opacity: 0,
    duration: 2,
    stagger: 2,
    color:"#fff",
    scrollTrigger: {
        trigger: ".team .container-team h2 ",
        scroller: "body",
        // markers:true,
        start: "-250px 15%",
        end: "-250px 5%",
        scrub: 2,
    }
});

tl.from("section.team .container .about-img img ", {
    scale:1.3,
    opacity: 0,
    duration: 2,
    stagger: 4,
    color:"#fff",
    scrollTrigger: {
        trigger: "section.team .container .about-img img ",
        scroller: "body",
        // markers:true,
        start: "-180px 40%",
        end: "-180px 20%",
        scrub: 2,
    }
}
);

tl.from(".content-img > p,.content-img h1,.content-img p", {
    y: 150,
    opacity: 0,
    duration: 2,
    stagger: 4,
    color:"#fff",
    scrollTrigger: {
        trigger: ".content-img > p,.content-img h1,.content-img p",
        scroller: "body",
        // markers:true,
        start: "50px 80%",
        end: "50px 50%",
        scrub: 2,
    }
});
tl.from("section.team .content-img div a", {
    y: 100,
    opacity: 0,
    duration: 2,
    stagger: 4,
    color:"#fff",
    scrollTrigger: {
        trigger: "section.team .content-img div a",
        scroller: "body",
        // markers:true,
        start: "40px 80%",
        end: "40px 50%",
        scrub: 2,
    }
});

// offer services
tl.from(".offer .container h2,.offer .container p", {
    y: 150,
    opacity: 0,
    duration: 5,
    stagger: 4,
    color:"#fff",
    scrollTrigger: {
        trigger: ".offer .container h2,.offer .container p",
        scroller: "body",
        // markers:true,
        start: "-260px 80%",
        end: "-260px 40%",
        scrub: 2,
    }
});
tl.from(".offer-box .box", {
    y: 50,
    opacity: 0,
    duration: 2,
    stagger: 4,
    color:"#fff",
    scrollTrigger: {
        trigger: ".offer-box .box",
        scroller: "body",
        // markers:true,
        start: "-270px 60%",
        end: "-270px 20%",
        scrub: 2,
    }
});