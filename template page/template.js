  $(document).ready(function() {

  $("#alert").addClass("red_text");

  });


  window.onscroll = function() {myFunction()};
  function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  }


window.addEventListener('scroll', myFunction);
window.addEventListener('scroll', scrollFunction);
