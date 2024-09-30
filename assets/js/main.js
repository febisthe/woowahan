//헤더 - 스크롤 반응 메뉴
let lastScroll = 0;
$(window).scroll(function(){
  curr = $(this).scrollTop();
  headerHeight = $('#header').outerHeight();

  if (curr >= headerHeight && curr > lastScroll) {
    $('#header').addClass('hide');
  }else{
    $('#header').removeClass('hide');
  }

  lastScroll = curr;
})

// 헤더 - 슬라이드 메뉴(서브메뉴 첫번째 텍스트)
$('#header .depth2 li:first-child a').addClass('active');

// 헤더 - 슬라이드 메뉴 - 메뉴 내리기
$('#header .gnb .item').hover(function(){
  if($(this).find('ul').length){ 
    $('#header').addClass('on') 
    $(this).find('.depth2').addClass('on') 
  }
},function(){
  $('#header').removeClass('on')
  $('#header .depth2').removeClass('on')
})

// 헤더 - 슬라이드 메뉴 - 볼드처리
$('#header .depth2 li').hover(function(){ 
  $(this).find('a').addClass('active')
  $(this).siblings().find('a').removeClass('active')
},function(){
  $('#header .depth2 a').removeClass('active') 
  $('#header .depth2 li:first-child a').addClass('active');
});

// 섹션1 - 비주얼
const visualSwiper = new Swiper(".sc-visual .swiper", {
  pagination: {
    el: ".pagination"
  },
  loop: true,
});

// 섹션2 - 스토리
const workSlide = new Swiper('.sc-work .swiper', {
  autoplay: {
    delay: 0,
    disableOnInteraction : false,
  },
  loop:true,
  speed:4000,
  slidesPerView:'auto',
  spaceBetween:16,
});
  
//섹션3 - 비디오 정지
$('.sc-vision .video-area .control-box').click(function(){
  if($('.sc-vision .btn-play').hasClass('on')){
    $('.sc-vision video').get(0).currentTime=0;
    $('.sc-vision video').get(0).play();
    $('.sc-vision .btn-play').removeClass('on').siblings().addClass('on');
  }else{
    $('.sc-vision video').get(0).pause();
    $('.sc-vision .btn-pause').removeClass('on').siblings().addClass('on');
  }
})

//푸터 - 관련리스트
$('#footer .btn-relate').click(function(){
  $('#footer .relate-area').toggleClass('on');
})

// 모바일 - 확장메뉴
$('#header .side-btn').click(function(){
  $('.side-nav').addClass('on')
  $('body').addClass('hidden')
})

$('.side-nav .btn-close').click(function(){
  $('.side-nav').removeClass('on')
  $('body').removeClass('hidden')
})

//모바일 - 확장메뉴 슬라이드
$('.side-nav .side-menu .depth1 .item .title-box').click(function(e){
  e.preventDefault();
  $(this).toggleClass('down').siblings().stop().slideToggle();
})