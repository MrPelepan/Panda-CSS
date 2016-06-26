$(document).ready(function() {

  $(function run() {
    $(".cloud--1"). animate({left: "100%"}, 
      50000, "linear").fadeOut(600).animate({left: "-200px"}, 0, 
      "linear").fadeIn(600);

    $(".cloud--2"). animate({left: "100%"}, 
      60000, "linear").fadeOut(600).animate({left: "-200px"}, 0, 
      "linear").fadeIn(600);

    $(".cloud--3"). animate({right: "100%"}, 
      40000, "linear").fadeOut(600).animate({right: "-200px"}, 0, 
      "linear").fadeIn(600);

    $(".cloud--4"). animate({right: "100%"}, 
      70000, "linear").fadeOut(600).animate({right: "-200px"}, 0, 
      "linear").fadeIn(600);
  })

  $(function() {
    $('.sun').animate({ width: '100px', height: '100px', top:'0%', left: '35%'}, 
      10000, 
      function(){  
        $('.sun').animate({top: '100%', left: '100%', opacity: '0.4'}, 
          10000)
      })
  });

  var grasses = 50;
  var bambuk = $('.bambuk')[0];

  function randomCss(grass) {
    var position = Math.floor(Math.random() * (window.innerWidth));
    var rotation = Math.floor(Math.random() * 20);
    grass.style.left = position + 'px';
    grass.style.transform = 'rotate(' + rotation + 'deg)';
  }

  for (var i = 0; i < grasses; i++) {
    var grass = document.createElement('div');
    randomCss(grass);
    bambuk.appendChild(grass);
  }

});