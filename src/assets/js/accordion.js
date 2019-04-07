/* eslint-disable no-undef */
$('.accordion__article-title').click(function(e) {
  e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().parent().find('.accordion__inner').removeClass('show');
      $this.parent().parent().parent().find('.accordion__inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});