// READ MORE BUTTON FOR PARAGRAPHS OF SNOOKER RULES 
$('.btn-readmore').on('click', function () {
  $this = $(this);
  $this.parent().parent().find(".read-more-container").toggleClass('read-more-hidden');
  $this.parent().find(".btn-readmore").toggleClass('read-more-hidden');
});


// READ MORE BUTTON FOR PARAGRAPHS OF POOL RULES 
$('.btn-pool-readmore').on('click', function () {
  $this = $(this);
  $this.parent().parent().find(".read-more-container").toggleClass('read-more-hidden');
  $this.parent().find(".btn-readmore").toggleClass('read-more-hidden');
});



