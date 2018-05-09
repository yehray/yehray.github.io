function smoothScroll(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
          if (this.hash !== "") {
          event.preventDefault();
    
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
                   window.location.hash = hash;
          });
        } 
      });
}

function scrollTopButton(){
    window.onscroll = function() {scrollFunction()};
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $("html, body").animate({ scrollTop: 0 }, 800); 
    return false; 
}

