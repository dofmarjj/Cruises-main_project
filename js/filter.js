$(document).ready(function () {
  $(".typeFilter, .priceFilter").click(function () {
    var $button = $(this);
    var filterType = $button.hasClass("typeFilter") ? "type" : "color";
    var filterValue = $button.data("filter");

    $button.toggleClass("active  bg-mainColor");

    filterProducts();
  });

  function filterProducts() {
    var selectedTypes = $(".typeFilter.active")
      .map(function () {
        return "." + $(this).data("filter");
      })
      .get()
      .join(",");
    var selectedColors = $(".priceFilter.active")
      .map(function () {
        return "." + $(this).data("filter");
      })
      .get()
      .join(",");

    var $filteredProducts = $(".product-card");
    if (selectedTypes.length > 0) {
      $filteredProducts = $filteredProducts.filter(selectedTypes);
    }
    if (selectedColors.length > 0) {
      $filteredProducts = $filteredProducts.filter(selectedColors);
    }

    $(".product-card").hide();
    $filteredProducts.show();

    if ($filteredProducts.length === 0) {
      $("#noResults").show();
    } else {
      $("#noResults").hide();
    }
    $("#clear-filters").click(function () {
      $(".typeFilter, .priceFilter").removeClass("active  bg-mainColor");
      filterProducts();
    });
  }
});
