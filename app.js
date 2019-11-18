$('.btn-readmore').on('click', function() {
  $this = $(this);
  $this.parent().parent().find(".read-more-container").toggleClass('read-more-hidden');
  $this.parent().find(".btn-readmore").toggleClass('read-more-hidden');
});

$(function() {

  $('.trigger').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('menu-is-open');
  });

  $('#section-1').css({
    width: 0,
    opacity: 0
  });

  $('header h2').on('click', function() {
    // $('#section-1').slideToggle(500);
    $('#section-1').animate({
      width: '100%',
      opacity: 1
    }, 200);
  });

});