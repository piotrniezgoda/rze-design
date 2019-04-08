/* eslint-disable no-undef */
$('.accordion__article-title').click(toggleAccordion);

function toggleAccordion() {
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
}

if (window.matchMedia('(min-width: 600px)').matches) {
  $('.accordion__article-title').off('click', toggleAccordion);
  $('.accordion__inner').addClass('show--wideScr');
  $('.accordion__toggle').attr('disabled', 'true');
}
