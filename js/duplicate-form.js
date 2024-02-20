/*
duplicateDivNTimes {
  for (i = 1; i <= 4)
    data = buttonCountNumber[i]
    if (data.val > 0)
      function duplicator(i, data[type])
}

function duplicator(i, type) {
  html = duplicate.clone(.originalDiv)
  html.num_pass = i
  html.type_pass = type
  append(html)
}
*/


$(document).ready(function() {
  
  
  
  
    $("#duplicateForms").click(function() {
        $('.forms-output').html('')

        for (var i = 1; i <= 4; i++) {
            var wrap = $('#buttonCountNumber'+i),
                count = wrap.text(),
                name = wrap.attr('value'),
                type = wrap.data('type')
                
            if (!count) continue
            
           

            duplicator(count, name, type)
        }
    });
});

function duplicator(count, name, type) {
    for (var i = 1; i <= count; i++) {
        var html = $(".form-tpl .form-wrap").clone()
        var n = $("span .type_pass")

        n.find('.type_pass').val()
        html.find('.num_pass').text(i)
        html.find('.type_pass').text(name)
        html.find('.age_type').text(type)

        // console.log(n)

        $(".forms-output").append(html)
    }
}