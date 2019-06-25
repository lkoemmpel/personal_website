// // Get a reference to the <path>
// var path = document.querySelector('#star-path');

// // Get length of path... ~577px in this case
// var pathLength = path.getTotalLength();

// // Make very long dashes (the length of the path itself)
// path.style.strokeDasharray = pathLength + ' ' + pathLength;

// // Offset the dashes so the it appears hidden entirely
// path.style.strokeDashoffset = pathLength;

// // Jake Archibald says so
// // https://jakearchibald.com/2013/animated-line-drawing-svg/
// path.getBoundingClientRect();

// // When the page scrolls...
// window.addEventListener("scroll", function(e) {
 
//   // What % down is it? 
//   // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
//   // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
//   var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
//   // Length to offset the dashes
//   var drawLength = pathLength * scrollPercentage;
  
//   // Draw in reverse
//   path.style.strokeDashoffset = pathLength - drawLength;
    
//   // When complete, remove the dash array, otherwise shape isn't quite sharp
//  // Accounts for fuzzy math
//   if (scrollPercentage >= 0.99) {
//     path.style.strokeDasharray = "none";
    
//   } else {
//     path.style.strokeDasharray = pathLength + ' ' + pathLength;
//   }
  
// });


$(window).scroll(function() {
   var scrollTop = $(this).scrollTop();
 
   $('.stars').css({
     opacity: function() {
       var elementHeight = $(this).height();
       return 1 - (elementHeight - scrollTop) / ( elementHeight - 600);
     }
   });
   $('.main').css({
    opacity: function() {
      return 1;
    }
  });
 });



// $(function() {
//    $(window).scroll(function () {
//       if ($(this).scrollTop() > 50) {
//          $('body').addClass('changeOrange')
//          $('header').addClass('displayNone')
//       }
//       if ($(this).scrollTop() < 50) {
//          $('body').removeClass('changeOrange')
//          $('header').removeClass('displayNone')
//       }
//       if ($(this).scrollTop() > 100) {
//          $('body').addClass('changeNavy')
//          $('body').removeClass('changeOrange')
//       }
//       if ($(this).scrollTop() < 100) {
//          $('body').removeClass('changeNavy')
//          $('body').addClass('changeOrange')
//       }
//    });
// });

// -----------------------------
// function setup() { 
//    createCanvas(400, 400);
//   }
// function draw() { 
//    background(220);
//   }

// $(document).ready(function(){       
//    var scroll_pos = 0;
//    $(document).scroll(function() { 
//        scroll_pos = $(this).scrollTop();
//        if(scroll_pos > 210) {
//          for (var i = 0; i < 50; i++) {
//             var x = random(windowWidth);
//             var y = random(windowHeight-200);
//             noStroke();
//             fill(255, 255, 0);
//             ellipse(x, y, 2, 2);
//          }         
//        }
//    });
// });
// --------------------------------

// $(document).ready(function(){       
//    var scroll_pos = 0;
//    $(document).scroll(function() { 
//        scroll_pos = $(this).scrollTop();
//        if(scroll_pos > 210) {
//            $("body").css('background-color', 'blue');
//        } else {
//            $("body").css('background-color', 'red');
//        }
//    });
// });