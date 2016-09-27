$(document).ready(function(){
  var windowHeight = function(){
    var windowHeight = $(window).height();
    $('.header-row').css('height', windowHeight);
  }

  windowHeight();

  $(window).resize(function(){
    windowHeight();
  });


  var options = {
      useEasing : false, 
      useGrouping : false, 
      separator : '', 
      decimal : '.', 
      prefix : '', 
      suffix : '' 
  };

  var airports = new CountUp("airports", 0, 2330, 0, 1.5, options);
  var airlines = new CountUp("airlines", 0, 120, 0, 1.5, options);
  var chalanges = new CountUp("chalanges", 0, 1000, 0.5, 1, options);



  $('#feature-1').one('inview', function(){
      $('#feature-1').addClass('animated once fadeIn');
    });
    $('#feature-2').one('inview', function(){
      $('#feature-2').addClass('animated once fadeIn');
    });
    $('#feature-3').one('inview', function(){
      $('#feature-3').addClass('animated once fadeIn');
    });

  $('.section-numbers').one('inview', function(){
    airports.start();
    airlines.start();
    chalanges.start();
  });


});