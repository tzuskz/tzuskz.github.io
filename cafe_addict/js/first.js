$(document).ready(function () {
  let $ul = $(".menu"),
		 $menu = $(".nav-menu");

	$($menu).click(function () {
		// toggle menu-click Class
		$ul.toggleClass("menu-click");
	});
    $(".four-right1").hover(
      function () {
        // Fade in overlay
        $(this).children(".four-right1-on").fadeIn(800);
        document.querySelector('.four-right1-on').style.display = 'flex';
      },
      function () {
        // Fade out overlay
        $(this).children(".four-right1-on").fadeOut(500);
        document.querySelector('.four-right1-on').style.display = 'flex';
      }
    );
    $(".four-right1").hover(
      function () {
        // Fade in overlay
        $(this).children(".four-right1-on-word").fadeIn(800);
        document.querySelector('.four-right1-on-word').style.display = 'flex';
        
      },
      function () {
        // Fade out overlay
        $(this).children(".four-right1-on-word").fadeOut(500);
        document.querySelector('.four-right1-on-word').style.display = 'flex';
      }
    );
  
    $(".four-left2").hover(
      function () {
        // Fade in overlay
        $(this).children(".four-left2-on").fadeIn(800);
        document.querySelector('.four-left2-on').style.display = 'flex';
      },
      function () {
        // Fade out overlay
        $(this).children(".four-left2-on").fadeOut(500);
        document.querySelector('.four-left2-on').style.display = 'flex';
      }
    );
    $(".four-left2").hover(
      function () {
        // Fade in overlay
        $(this).children(".four-left2-on-word").fadeIn(800);
        document.querySelector('.four-left2-on-word').style.display = 'flex';
      },
      function () {
        // Fade out overlay
        $(this).children(".four-left2-on-word").fadeOut(500);
        document.querySelector('.four-left2-on-word').style.display = 'flex';
      }
    );
  });
      
  
  