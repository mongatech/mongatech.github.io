$(function () {
  $(document).scroll(function () {
    var $nav = $(".mt-header");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
})();