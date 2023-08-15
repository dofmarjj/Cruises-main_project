$(document).ready(function () {
  $(".dws-lab").on("click", ".tab", function () {
    // Delete class activeb

    $(".dws-lab ").find(".activeb").removeClass("activeb");

    //   Add class activeb
    $(this).addClass("activeb");
    $(".tabs").eq($(this).index()).addClass("activeb");
  });
});
