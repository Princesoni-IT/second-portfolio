$(document).ready(function() {
  $(window).scroll(function() {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function() {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function() {
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Web Developer", "Data Analyst", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: ["Web Developer", "Data Analyst", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
// Contact form submission aur reset ke liye code
// $('#contact-form').on('submit', function(event) {
//     // Browser ko form submit karne se rokein
//     event.preventDefault();

//     var form = $(this);
//     var formData = form.serialize();

//     // Form data ko AJAX ke through background me submit karein
//     $.ajax({
//         url: 'https://api.web3forms.com/submit',
//         method: 'POST',
//         data: formData,
//         dataType: 'json',
//         success: function(response) {
//             // Success hone par form ko reset kar dein
//             form[0].reset();

//             // User ko success message dikhayein (Optional)
//             alert('Thank you! Your message has been sent.');
//         },
//         error: function(error) {
//             // Error hone par user ko message dikhayein (Optional)
//             alert('Oops! Something went wrong.');
//         }
//     });
// });

  
});