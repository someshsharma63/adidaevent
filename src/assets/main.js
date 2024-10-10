jQuery(document).ready(function($) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-scrolled');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-scrolled');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 50, 'easeInOutExpo');
    return false;
  });

  // Real view height for mobile devices
  if (window.matchMedia("(max-width: 767px)").matches) {
    $('#intro').css({ height: $(window).height() });
  }

  // Initiate WOW.js and Venobox
  new WOW().init();
  $('.venobox').venobox({
    bgcolor: '',
    overlayColor: 'rgba(6, 12, 34, 0.85)',
    closeBackground: '',
    closeColor: '#fff'
  });

  // Initialize Superfish and Owl Carousels
  $('.nav-menu').superfish({ animation: { opacity: 'show' }, speed: 400 });

  $(".gallery-carousel").owlCarousel({
    autoplay: true, dots: true, loop: true, center: true,
    responsive: { 0: { items: 1 }, 768: { items: 3 }, 992: { items: 4 }, 1200: { items: 5 } }
  });

  $('.testimonial-carousel').owlCarousel({
    items: 3, loop: true, margin: 10, nav: true, center: true, autoplay: true, autoplayTimeout: 5000,
    navText: ["&#10094;", "&#10095;"], responsive: { 0: { items: 1 }, 768: { items: 3 } }
  });

  $(document).ready(function(){
    // Initialize testimonials carousel
    var testimonialOwl = $('.testimonial-carousel');
    testimonialOwl.owlCarousel({
      items: 3,
      loop: true,
      margin: 10,
      nav: false,
      center: true,
      autoplay: true,
      autoplayTimeout: 5000,
      navText: ["&#10094;", "&#10095;"],
      responsive: {
        0: { items: 1 },
        768: { items: 3 },
      }
    });
  
    // Left button functionality
    $('.left-btn').click(function() {
      testimonialOwl.trigger('prev.owl.carousel');
    });
  
    // Right button functionality
    $('.right-btn').click(function() {
      testimonialOwl.trigger('next.owl.carousel');
    });
  
    // Initialize Venobox for gallery
    $('.venobox').venobox({
      spinner: 'wave',
      share: false,
      bgcolor: '#fff',
      overlayColor: 'rgba(0,0,0,0.85)',
      titleattr: 'data-title',
    });
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav' });
    $mobile_nav.find('> ul').removeAttr('class id');
    $('body').append($mobile_nav).prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function() {
      $(this).next().toggleClass('menu-item-active').slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function() {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      if (!$("#mobile-nav, #mobile-nav-toggle").is(e.target) && $("#mobile-nav, #mobile-nav-toggle").has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;
        if ($('#header').length) {
          top_space = $('#header').outerHeight();
          if (!$('#header').hasClass('header-fixed')) top_space -= 20;
        }
        $('html, body').animate({ scrollTop: target.offset().top - top_space }, 400, 'easeInOutExpo');
        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Contact Form Validation
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contactForm");
    const submitBtn = document.getElementById("submitBtn");
    const sendMessageDiv = document.getElementById("sendmessage");
    const errorMessageDiv = document.getElementById("errormessage");

    submitBtn.addEventListener("click", function(event) {
      event.preventDefault();
      let valid = true;
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (name.length < 4) {
        showValidationError(form.name, "Please enter at least 4 characters for your name.");
        valid = false;
      } else hideValidationError(form.name);

      if (!emailRegex.test(email)) {
        showValidationError(form.email, "Please enter a valid email address.");
        valid = false;
      } else hideValidationError(form.email);

      if (subject.length < 4) {
        showValidationError(form.subject, "Please enter at least 4 characters for the subject.");
        valid = false;
      } else hideValidationError(form.subject);

      if (message.length === 0) {
        showValidationError(form.message, "Please write something in the message.");
        valid = false;
      } else hideValidationError(form.message);

      if (valid) {
        sendMessageDiv.style.display = "block";
        errorMessageDiv.style.display = "none";
        form.reset();
      } else {
        errorMessageDiv.style.display = "block";
        sendMessageDiv.style.display = "none";
      }
    });

    function showValidationError(inputElement, message) {
      const validationDiv = inputElement.nextElementSibling;
      validationDiv.textContent = message;
      validationDiv.style.display = "block";
    }

    function hideValidationError(inputElement) {
      const validationDiv = inputElement.nextElementSibling;
      validationDiv.textContent = "";
      validationDiv.style.display = "none";
    }
  });

  // Modal functionality
  $('.open-modal-btn').click(function() {
    $('#bookingModal').fadeIn();
  });

  $('#closeModalBtn').click(function() {
    $('#bookingModal').fadeOut();
  });

  $(window).click(function(event) {
    if ($(event.target).is('#bookingModal')) {
      $('#bookingModal').fadeOut();
    }
  });

});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const sendMessage = document.getElementById('sendmessage');
  const errorMessage = document.getElementById('errormessage');
  const fields = ['name', 'email', 'subject', 'message'];

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validateForm() {
    let valid = true;

    fields.forEach((field) => {
      const input = document.getElementById(field);
      const validationDiv = input.nextElementSibling;

      if (input.value.trim() === '') {
        validationDiv.style.display = 'block';
        valid = false;
      } else if (field === 'email' && !validateEmail(input.value.trim())) {
        validationDiv.textContent = 'Please enter a valid email address.';
        validationDiv.style.display = 'block';
        valid = false;
      } else {
        validationDiv.style.display = 'none';
      }
    });

    return valid;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (validateForm()) {
      sendMessage.style.display = 'block';
      errorMessage.style.display = 'none';
    } else {
      sendMessage.style.display = 'none';
      errorMessage.style.display = 'block';
    }
  });
});
