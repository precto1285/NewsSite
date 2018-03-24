$(document).ready(function () {
    $('.carousel').carousel();
    $('.carousel').carousel('methodName');
    $('.carousel').carousel('methodName', paramName);
});

$("#belmontBtn").on("dblclick", function(event){
    console.log("belmont");
    
});
$("#balboaBtn").on("dblclick", function(event){
    console.log("balboa");
});
$("#gaslampBtn").on("dblclick", function(event){
    console.log("gaslamp");
});
$("#delmarBtn").on("dblclick", function(event){
    console.log("delmar");
});
$("#fashionvalleyBtn").on("dblclick", function(event){
    console.log("fashion valley");
});
$("#carlsbadBtn").on("dblclick", function(event){
    console.log("carslbad");
});


// $('#textarea1').val('Message');
// M.textareaAutoResize($('#textarea1'));

// $(document).ready(function(){
//     $('.materialboxed').materialbox();
//   });

  $(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.slider').slider();
  });

  $('.slider').slider('methodName');
  $('.slider').slider('methodName', paramName);