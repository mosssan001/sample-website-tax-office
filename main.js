let slideConts = document.querySelectorAll('.slideConts'); // スライドで表示させる要素の取得
let slideContsRect = []; // 要素の位置を入れるための配列
let slideContsTop = []; // 要素の位置を入れるための配列
let windowY = window.scrollY; // ウィンドウのスクロール位置を取得
let windowH = window.innerHeight; // ウィンドウの高さを取得
let remainder = 100; // ちょっとはみ出させる部分

let menu = document.querySelector('.menu');
let menu_area = document.querySelector('.menu-area');
let menu_bar1 = document.querySelector('.menu-bar1');
let menu_bar2 = document.querySelector('.menu-bar2');
let home_sp = document.querySelector('.home-sp');
let title_div = document.querySelector('.title-div');
let title_div2 = document.querySelector('.title-div2');
let nav = document.querySelector('nav');

// 要素の位置を取得
for (let i = 0; i < slideConts.length; i++) {
  slideContsRect.push(slideConts[i].getBoundingClientRect());
}
for (let i = 0; i < slideContsRect.length; i++) {
  slideContsTop.push(slideContsRect[i].top + windowY);
}
// ウィンドウがリサイズされたら、ウィンドウの高さを再取得
window.addEventListener('resize', function () {
  windowH = window.innerHeight;
});


// スクロールされたら
window.addEventListener('scroll', function () {
  // スクロール位置を取得
  windowY = window.scrollY;

  for (let i = 0; i < slideConts.length; i++) {
    // 要素が画面の下端にかかったら
    if(windowY > slideContsTop[i] - windowH + remainder) {
      // .showを付与
      slideConts[i].classList.add('show');
    } 
  }

  // メニューバーの背景色の処理追加

  if(window.scrollY > window.innerHeight){
    menu_area.classList.add('show');
    home_sp.classList.add('show');
  } else if (window.scrollY < window.innerHeight){
    menu_area.classList.remove('show');
    home_sp.classList.remove('show');
  }
});


menu.addEventListener('click',()=>{
    menu_bar1.classList.toggle('tap');
    menu_bar2.classList.toggle('tap');
    title_div.classList.toggle('tap');
    title_div2.classList.toggle('tap');
    nav.classList.toggle('tap');

});