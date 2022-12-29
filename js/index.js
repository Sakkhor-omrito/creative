$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.monir_hossain').slick({
    slidesToShow:1,
    // arrows:true,
    prevArrow:'.angle_left',
    nextArrow:'.angle_right',
    dots:true,

});

$(function(){
    $('.show').on('click', function(){
        $('.sidebar').css('left','0px')
      })
      $('.close').on('click', function(){
        $('.sidebar').css('left','-100%')
      })
})
   

