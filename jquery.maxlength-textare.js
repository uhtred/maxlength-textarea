jQuery.fn.maxLength = function(maxlength) {
  return this.each(function() {
    $(this).bind('keypress keyup change mouseover', function(e) {
      var key,
          max = maxlength ? maxlength : $(this).attr('maxlength'),
          tam = this.value.length,
          ie = (typeof window.ActiveXObject != 'undefined');
      key = (ie) ? e.keyCode : e.which;  
      if (key >= 33 || key == 13 || key == 32) {
        if (tam >= max) { e.preventDefault(); }
      }
      else if (tam > max) {
        this.value = this.value.substring(0, max);
      }
    });
  });
}