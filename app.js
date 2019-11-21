$('.btn-readmore').on('click', function () {
  $this = $(this);
  $this.parent().parent().find(".read-more-container").toggleClass('read-more-hidden');
  $this.parent().find(".btn-readmore").toggleClass('read-more-hidden');
});


