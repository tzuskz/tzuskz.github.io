// 觸發 confetti 動畫效果
function triggerConfetti() {
    // 調用 confetti 函數，觸發彩帶效果
    confetti({
        target: 'canvas', // 將動畫目標設定為 id 為 "canvas" 的元素
        particleCount: 100, // 粒子數量
        spread: 1280, // 粒子擴散範圍
        origin: { y: -1 }, // 粒子初始位置
        // 你可以根據需要設定其他參數
        colors: ['#FFF', '#F9BC46', '#D994DF', '7CB1F0', '50D083'], // 彩帶顏色
        gravity: 1, // 彩帶掉落速度
    });
}

// 在頁面加載完畢後觸發動畫
window.onload = function() {
    setInterval(triggerConfetti, 2000); // 每 1000 毫秒（1 秒）觸發一次
};

$(document).ready(function () {
    let $ul = $(".menu"),
           $menu = $(".nav-menu");
  
      $($menu).click(function () {
          // toggle menu-click Class
          $ul.toggleClass("menu-click");
      });
    });