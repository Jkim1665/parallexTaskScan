//given
(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


//jobs modal
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});// Or with jQuery


//*******date
$(document).ready(function(){
  $('.modal').modal();
});
     
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, options);
});// Or with jQuery

$(document).ready(function(){
  $('.datepicker').datepicker();
});
        
//*******time
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.timepicker');
  var instances = M.Timepicker.init(elems, options);
});// Or with jQuery

$(document).ready(function(){
  $('.timepicker').timepicker();
});