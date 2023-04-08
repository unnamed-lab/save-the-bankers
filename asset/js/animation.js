const tl = gsap.timeline({default: {duration: 0.5}});

tl.from('.intro-section', { 
opacity: 0, 
duration: 2, 
y: 50, 
ease: 'power2.easeInOut' 
});

tl.from(".contact-section", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: 'power1.easeIn'
});

tl.from('.showcase', {
    scrollTrigger: {
        trigger: '.section-header',
        toggleActions: 'play complete none none',
        start: 'top 70%',
        end: 'bottom 30%',
        
    },
    opacity:0,
    y: 80,
    ease: 'power2.easeIn'
}, );

tl.from('#service-blocks', {
    opacity: 0,
    x: 30,
    ease: 'power1.easeIn',
}, '>+0.5');

tl.from("#mini-contact", {
    scrollTrigger: {
        trigger:'.contact-head',
        toggleActions: 'play complete none none',
        start: 'top top',
        end: 'bottom 20%',
    },
    opacity: 0,
    x:-100,
    ease: 'power1.easeIn'
});

tl.from('.partner-section', {
    scrollTrigger: {
        trigger: '.partner-section',
        toggleActions: 'play complete none none',
        start: 'top 80%',
        end: 'bottom 20%',

    },
    opacity: 0,
    x: 100,
    ease: 'power1.easeIn',
});

tl.from(".our-logo", {
    scrollTrigger: {
        trigger: '.our-logo',
        toggleActions: 'play complete none none',
        start: 'top center',
        end: 'bottom 20%'
    },
    opacity: 0,
    x: -100,
    ease: 'power2.easeIn'
});

tl.from(".company-info", {
    scrollTrigger: {
        trigger: '.our-logo',
        toggleActions: 'play complete none none',
        start: 'top center',
        end: 'bottom 20%'
    },
    opacity: 0,
    x: 200,
    ease: 'power2.easeIn',
});

tl.from(".our-team", {
    scrollTrigger: {
        trigger: '.our-team',
        toggleActions: 'play complete none none',
        start: 'center bottom',
        end: 'bottom 20%'
    },
    opacity: 0,
    x: 100,
    ease: 'power2.easeIn',
    delay: 0.3
});

tl.from(".team-info", {
    scrollTrigger: {
        trigger: '.our-team',
        toggleActions: 'play complete none none',
        start: 'center bottom',
        end: 'bottom 20%'
    },
    opacity: 0,
    x: -200,
    ease: 'power2.easeIn',
    delay: 0.3
});

// tl.from(".portfolio", {
//     scrollTrigger: {
//         trigger: '.portfolio-body',
//         toggleActions: 'play complete none none',
//         start: 'center bottom',
//         end: 'bottom 20%'
//     },
//     opacity: 0,
//     y: 50,
//     delay: 0.3,
//     ease: 'power2.easeIn'
// })

// tl.from('.quote-bg', {
//     opacity:0,
//     y: 80,
//     ease: 'power2.easeIn'
// });

// tl.from('.service-catalogue', {
//     scrollTrigger: {
//         trigger: '.quote-bg',
//         toggleActions: 'play complete none none',
//         start: 'top top',
//         end: 'bottom 30%', 
        
//     },
//     duration: 1,
//     opacity:0,
//     y: 80,
//     ease: 'power2.easeIn'
// })