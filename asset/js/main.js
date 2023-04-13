// gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  defaults: {
    duration: 0.75,
    opacity: 0,
    ease: "power2.easeIn",
    markers: {
      startColor: "green",
      endColor: "red",
      fontSize: "18px",
    },
  },
});
tl.from(".hero-header", {
  y: -40,
})
  .from(
    ".intro-title",
    {
      y: 70,
    },
    "+=.25"
  )
  .from(
    ".intro-text",
    {
      y: 50,
    },
    ">"
  )
  .from(
    ".intro-btn",
    {
      y: 70,
    },
    ">"
  );


tl.from(".info-card", {
  scrollTrigger: {
    trigger: ".info-card",
    start: "bottom center",
    toggleActions: "play none reverse none",
  },
  x: 200,
  delay: 0.5,
  duration: 1.3,
});

tl.from(".about-title", {
  y: -30,
  delay: 0.5,
  duration: 1.15,
  scrollTrigger: {
    trigger: ".ecosystem",
    start: "center center",
    toggleActions: "play none none none",
  },
}, '>')
.from(".about-card",
  {
    y: -70,
    scrollTrigger: {
      trigger: ".about-title",
      toggleActions: "play none none none",
    },
  },
  ">"
)
.from(".card-img", {
    x: 20,
}, ">")
.from(".card-detail-text", {
    x: -20,
}, "-=.1");

tl.from(".tokenomics", {
  scrollTrigger: {
    trigger: ".tokenomics",
    start: "bottom center",
    toggleActions: "play none reverse none",
  },
  x: 200,
  delay: 0.5,
  duration: 1.3,
})
  .from(
    ".tokenomics-title",
    {
      y: -30,
      delay: 0.5,
      duration: 1.15,
      scrollTrigger: {
        trigger: ".tokenomics",
        start: "center center",
        toggleActions: "play none none none",
      },
    },
    ">"
  )
  .from(".token-detail", {
    y: -70,
  })
  .from(
    "#myChart",
    {
      y: -70,
    },
    "-=1"
  )
  .from(".tdk", {
    x: 30,
  })
  .from(".btn-tab", {
    y: -20,
  }, ">");

{
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Team", "Marketing", "Liquidity", "Burn Reserve", "Public"],
      datasets: [
        {
          label: "Distribution",
          data: [10, 15, 10, 5, 60],
          backgroundColor: [
            "#295fa6",
            "#20d89b",
            "#2ad56f",
            "#2a9545",
            "#2a95bf",
          ],
          hoverOffset: 50,
          hoverBorderColor: "#dddddd",
          borderWidth: 3,
          offset: 10,
          borderJoinStyle: "round",
          rotation: 15,
        },
      ],
    },
  });
}

{
  function calenderyear() {
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById("dateyear").innerText = year;
  }
  calenderyear();
}
