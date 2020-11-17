// sub 1_4.js

// gnb
$(function(){
  $('#gnb > .depth1 > li').hover(
    function(){
      $('#gnb_bg').addClass('show');
      $('#gnb_bg, .depth2').stop().slideDown(250);
    //   $('.hover').css('display','block');
    },
    function(){
      $('#gnb_bg, .depth2').stop().slideUp(250);
      $('#gnb_bg').removeClass('show');
    //   $('.hover').css('display','none');
    }
  )
});