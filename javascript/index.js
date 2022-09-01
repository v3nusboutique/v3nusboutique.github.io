var instance = M.Carousel.init({
  fullWidth: true,
  indicators: true,
});

// Or with jQuery

$(document).ready(async function () {
  await loadFull(tsParticles);
  $("#tsparticles")
    .particles()
    .init({
      background: {
        color: {
          value: "#ffffff",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#eb9d44",
        },
        links: {
          color: "#eb9d44",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("a.scroll-top").fadeIn("slow");
    } else {
      $("a.scroll-top").fadeOut("slow");
    }
  });
  $("a.scroll-top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 600);
  });
  $(".materialboxed").materialbox();
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true,
  });
});
