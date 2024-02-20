$(document).ready(function(){
    var selectedFilters = []; 

    function filterProducts() {
        if(selectedFilters.length === 0) {
            $('.product-card').show(); 
        } else {
            $('.product-card').hide(); 
            selectedFilters.forEach(function(filter) {
                $('.' + filter).show(); 
            });
        }
    }


    $('#filter-options button').click(function() {
        var filter = $(this).data('filter');
        var index = selectedFilters.indexOf(filter);
        
       
        if(index === -1) {
            selectedFilters.push(filter);
            $(this).addClass('btn-on bg-mainColor text-white'); 
        } else {
            selectedFilters.splice(index, 1); 
            $(this).removeClass('btn-on bg-mainColor text-white'); 
        }

        filterProducts(); 
    });

    $('#clear-filters').click(function() {
        selectedFilters = []; 
        $('#filter-options button').removeClass('btn-on bg-mainColor text-white'); // Удаляем класс активности у всех кнопок
        filterProducts(); 
    });
});