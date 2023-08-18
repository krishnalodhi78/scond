

  
 $('.decor-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.top-slider'
   
});

$('.top-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.decor-slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});






 
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  