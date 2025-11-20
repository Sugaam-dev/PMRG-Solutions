(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeIn');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


     // Fact Counter

     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });



})(jQuery);

document.addEventListener('DOMContentLoaded', function () {
    // Case Studies Read More button
    const caseStudiesBtn = document.getElementById('readMoreBtn');
    const caseStudiesSection = document.querySelector('.case-studies-section');
    if (caseStudiesBtn && caseStudiesSection) {
        caseStudiesBtn.addEventListener('click', function () {
            caseStudiesSection.classList.toggle('expanded');
            if (caseStudiesSection.classList.contains('expanded')) {
                this.textContent = "Show Less";
            } else {
                this.textContent = "Read More";
                const firstCard = document.querySelector('#caseStudiesRow > .case-study-wrapper:nth-child(1)');
                if (firstCard) {
                    firstCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }

    // Deployment Models Read More button
    const deploymentBtn = document.getElementById('deploymentReadMoreBtn');
    const deploymentSection = document.querySelector('.deployment-models-section');
    if (deploymentBtn && deploymentSection) {
        deploymentBtn.addEventListener('click', function () {
            deploymentSection.classList.toggle('expanded');
            if (deploymentSection.classList.contains('expanded')) {
                this.textContent = "Show Less";
            } else {
                this.textContent = "Read More";
                const firstCard = document.querySelector('#deploymentModelsGrid > .col-lg-4:nth-child(1)');
                if (firstCard) {
                    firstCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }

    // Testimonials Read More button
    const testimonialBtn = document.getElementById('testimonialReadMoreBtn');
    const testimonialsSection = document.querySelector('.testimonials-section');
    if (testimonialBtn && testimonialsSection) {
        testimonialBtn.addEventListener('click', function () {
            testimonialsSection.classList.toggle('expanded');
            if (testimonialsSection.classList.contains('expanded')) {
                this.textContent = "Show Less";
            } else {
                this.textContent = "Read More";
                const firstTestimonial = document.querySelector('#testimonialsGrid .testimonial-row:nth-child(1)');
                if (firstTestimonial) {
                    firstTestimonial.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }

    // Blog Read More button
    const blogBtn = document.getElementById('blogReadMoreBtn');
    const blogSection = document.querySelector('.blog-section');
    const blogRow = document.getElementById('blogRow');
    if (blogBtn && blogSection && blogRow) {
        blogBtn.addEventListener('click', function () {
            blogSection.classList.toggle('expanded');
            if (blogSection.classList.contains('expanded')) {
                this.textContent = "Show Less";
            } else {
                this.textContent = "Read More";
                const firstBlogItem = blogRow.querySelector('div:first-child');
                if (firstBlogItem) {
                    firstBlogItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }
});
