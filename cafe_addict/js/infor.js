$(document).ready(function () {
    let $ul = $(".menu"),
           $menu = $(".nav-menu");
  
      $($menu).click(function () {
          // toggle menu-click Class
          $ul.toggleClass("menu-click");
      });
    });