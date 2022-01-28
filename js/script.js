$(document).ready(function () {
  $(".job-list-view-inner-div").hover(
    function () {
      $(this).addClass("shadow").removeClass("shadow-sm");
    },
    function () {
      $(this).addClass("shadow-sm").removeClass("shadow");
    }
  );
});
