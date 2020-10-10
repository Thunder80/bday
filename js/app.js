const startingDiv = document.getElementById("starting-div");
const somosree = document.getElementById("somosree");
const sohini = document.getElementById("sohini");
const particle = document.getElementById("particle-js");
const audio = document.getElementById("audio");
const explosion = document.getElementById("explosion");
const end = document.getElementById("end");

somosree.addEventListener("click", () => {
  anime({
    targets: "#starting-div",
    keyframes: [{ scale: 1.2 }, { scale: 0 }],
    duration: 800,
    easing: "easeInOutQuad",
  });
  setTimeout(() => {
    startingDiv.style.display = "none";
    particle.style.display = "block";
    particlesJS("particle-js", {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);
    setTimeout(() => {
      particle.style.transform = "translateY(0)";
      audio.play();
    }, 500);
  }, 1200);

  setTimeout(() => {
    anime({
      targets: "#hey_u",
      translateX: -158,
      duration: 1000,
      easing: "easeInOutQuad",
    })
  }, 8000)


  setTimeout(() => {
    anime({
      targets: "#hey_u",
      translateX: 160,
      duration: 1000,
      easing: "easeInOutQuad",
    })
  }, 12000)

  document.getElementById("first").style.display = "block";
  setTimeout(() => {
    anime({
      targets: "#guilty",
      translateX: 170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#first",
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 15000)

  setTimeout(() => {
    anime({
      targets: "#first",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 22000)

  document.getElementById("second").style.display = "block";
  setTimeout(() => {
    anime({
      targets: "#second",
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 25000)

  setTimeout(() => {
    anime({
      targets: "#second",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#guilty",
      translateX: -160,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 32000)

  setTimeout(() => {
    anime({
      targets: "#second",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 35000)

  document.getElementById("third").style.display = "block";
  setTimeout(() => {
    anime({
      targets: "#third",
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#thumbs_up",
      translateX: -170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 38000)

  setTimeout(() => {
    anime({
      targets: "#third",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#thumbs_up",
      translateX: 160,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 45000)

  document.getElementById("fourth").style.display = "block";
  setTimeout(() => {
    anime({
      targets: "#fourth",
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#stupidity",
      translateX: 170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 48000)

  setTimeout(() => {
    anime({
      targets: "#fourth",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#stupidity",
      translateX: -170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 55000)

  document.getElementById("fifth").style.display = "block";
  setTimeout(() => {
    anime({
      targets: "#fifth",
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#laugh",
      translateX: -170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 58000)

  setTimeout(() => {
    anime({
      targets: "#fifth",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#laugh",
      translateX: 170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 65000)

  document.getElementById("sixth").style.display = "block";
  setTimeout(() => {
    anime({
      targets: "#sixth",
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#bear",
      translateX: 170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 68000)

  setTimeout(() => {
    anime({
      targets: "#sixth",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#bear",
      translateX: -170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 75000)

  document.getElementById("seventh").style.display = "block";
  setTimeout(() => {
    confetti.start();
    explosion.play();
    anime({
      targets: "#seventh",
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#flower-l",
      translateX: 170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#flower-r",
      translateX: -170,
      scaleX: -1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#cake",
      bottom: 0,
      duration: 2000,
      easing: "easeInOutQuad",
    });
  }, 78000)

  setTimeout(() => {
    end.style.display = "block";
    anime({
      targets: "#end",
      translateX: "-50%",
      scale: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 85000);

  end.addEventListener("click", () => {
    location.reload();
  })
});

sohini.addEventListener("click", () => {
  anime({
    targets: "#starting-div",
    keyframes: [{ scale: 1.2 }, { scale: 0 }],
    duration: 800,
    easing: "easeInOutQuad",
  });
  setTimeout(() => {
    startingDiv.style.display = "none";
    particle.style.display = "block";
    particlesJS("particle-js", {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);
    setTimeout(() => {
      particle.style.transform = "translateY(0)";
      audio.play();
    }, 500);
  }, 1200);

  setTimeout(() => {
    anime({
      targets: "#shey_u",
      translateX: -158,
      duration: 1000,
      easing: "easeInOutQuad",
    })
  }, 8000)


  setTimeout(() => {
    anime({
      targets: "#shey_u",
      translateX: 160,
      duration: 1000,
      easing: "easeInOutQuad",
    })
  }, 12000)

  document.getElementById("sfirst").style.display = "block";
  setTimeout(() => {
    anime({
      targets: "#sguilty",
      translateX: 170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#sfirst",
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 15000)

  setTimeout(() => {
    anime({
      targets: "#sfirst",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 22000)

  document.getElementById("ssecond").style.display = "block";
  setTimeout(() => {
    anime({
      targets: "#ssecond",
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 25000)

  setTimeout(() => {
    anime({
      targets: "#ssecond",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#sguilty",
      translateX: -160,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 32000)

  setTimeout(() => {
    anime({
      targets: "#ssecond",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 35000)

  document.getElementById("sthird").style.display = "block";
  setTimeout(() => {
    anime({
      targets: "#sthird",
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#sthumbs_up",
      translateX: -170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 38000)

  setTimeout(() => {
    anime({
      targets: "#sthird",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#sthumbs_up",
      translateX: 160,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 45000)

  document.getElementById("sfourth").style.display = "block";
  setTimeout(() => {
    anime({
      targets: "#sfourth",
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#sstupidity",
      translateX: 170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 48000)

  setTimeout(() => {
    anime({
      targets: "#sfourth",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#sstupidity",
      translateX: -170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 55000)

  document.getElementById("sfifth").style.display = "block";
  setTimeout(() => {
    anime({
      targets: "#sfifth",
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#slaugh",
      translateX: -170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 58000)

  setTimeout(() => {
    anime({
      targets: "#sfifth",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#slaugh",
      translateX: 170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 65000)

  document.getElementById("ssixth").style.display = "block";
  setTimeout(() => {
    anime({
      targets: "#ssixth",
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#sbear",
      translateX: 170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 68000)

  setTimeout(() => {
    anime({
      targets: "#ssixth",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#sbear",
      translateX: -170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 75000)

  document.getElementById("sseventh").style.display = "block";
  setTimeout(() => {
    confetti.start();
    explosion.play();
    anime({
      targets: "#sseventh",
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#sflower-l",
      translateX: 170,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#sflower-r",
      translateX: -170,
      scaleX: -1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#scake",
      bottom: 0,
      duration: 2000,
      easing: "easeInOutQuad",
    });
  }, 78000)

  setTimeout(() => {
    end.style.display = "block";
    anime({
      targets: "#end",
      translateX: "-50%",
      scale: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, 85000);

  end.addEventListener("click", () => {
    location.reload();
  })
});
