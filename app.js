document.addEventListener("DOMContentLoaded", function () {
   gsap.registerPlugin(ScrollTrigger);

   const animations = [
      {
         elements: ".animate-hero",
         duration: 1,
         opacity: 0,
         y: -150,
         stagger: 0.3,
         scrollTrigger: {
            trigger: ".heroSection",
            start: "-10 top",
            end: "+=400",
            toggleActions: "restart none restart none",
            markers: false,
         },
      },
      {
         elements: ".hero-img",
         duration: 1,
         opacity: 0,
         x: 150,
         stagger: 0.3,
         scrollTrigger: {
            trigger: ".heroSection",
            start: "-1 top",
            end: "+=700",
            toggleActions: "play none restart none",
            markers: false,
         },
      },
      {
         elements: ".animate-first",
         duration: 1,
         opacity: 0,
         y: -150,
         stagger: 0.3,
         scrollTrigger: {
            trigger: ".first_section_boxes",
            start: "30% bottom",
            end: "bottom 30%",
            toggleActions: "restart none restart none",
            markers: false,
         },
      },
      {
         elements: ".animate-first-right",
         duration: 1.5,
         opacity: 0,
         x: 150,
         stagger: 0.3,
         scrollTrigger: {
            trigger: ".first_section_boxes",
            start: "30% bottom",
            end: "bottom 30%",
            toggleActions: "restart none restart none",
            markers: false,
         },
      },
      {
         elements: ".animate-second-right",
         duration: 0.8,
         opacity: 0,
         y: -150,
         stagger: 0.3,
         scrollTrigger: {
            trigger: ".second_section",
            start: "30% bottom",
            end: "bottom 10%",
            toggleActions: "restart none restart none",
            markers: false,
         },
      },
      {
         elements: ".animate-third-left",
         duration: 0.8,
         opacity: 0,
         y: -150,
         stagger: 0.3,
         scrollTrigger: {
            trigger: ".third_section",
            start: "30% bottom",
            end: "bottom 10%",
            toggleActions: "restart none restart none",
            markers: false,
         },
      },
      {
         elements: ".animate-second-left",
         duration: 1.5,
         x: -150,
         stagger: 0.3,
         // rotation: -10,
         scrollTrigger: {
            trigger: ".second_section",
            start: "30% bottom",
            end: "bottom 30%",
            toggleActions: "restart none restart none",
            markers: false,
         },
      },
      {
         elements: ".animate-third-right",
         duration: 1.5,
         x: 150,
         stagger: 0.3,
         // rotation: 5,
         scrollTrigger: {
            trigger: ".third_section",
            start: "20% bottom",
            end: "bottom 30%",
            toggleActions: "restart none restart none",
            markers: false,
         },
      },
   ];

   animations.forEach(({ elements, ...config }) => {
      gsap.from(elements, config);
   });
});
