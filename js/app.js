particlesJS('particles',

  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 600
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
      },
      "size": {
        "value": 5,
        "random": true,
      },
      "line_linked": {
        "enable": true,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 0.1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 0
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
      }
    },
    "retina_detect": false
  }
);

function initializeEvents(app) {
  $("#Resume").on('click', function(){
    window.location.href = "./assets/RaymondWillett_Resume.pdf";
  });
  $("#IdeaBoard").on('click', function() {
    alert("Under Construction");
    //window.location.href = "./content/ideaboard";
  });
  $("#Interests").on('click', function() {
    alert("Under Construction");
    //window.location.href = "./content/interets";
  });
  $("#Blog").on('click', function() {
    alert("Under Construction");
    //window.location.href = "./content/blog";
  });
}


(function init() {
  if(typeof $ !== 'function') {
    window.setTimeout(init, 100);
  } else {
    app = (typeof app === 'object') ? app : {};
    initializeEvents(app);
  }
})();
