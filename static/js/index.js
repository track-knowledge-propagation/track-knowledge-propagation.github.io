$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    bulmaSlider.attach();

    function setupTableScroll(container) {
        var wrapper = container.find('.table-wrapper');
        var leftArrow = container.find('.scroll-left');
        var rightArrow = container.find('.scroll-right');

        function checkScroll() {
            if (wrapper.length === 0) return;

            var scrollLeft = wrapper.scrollLeft();
            var scrollWidth = wrapper[0].scrollWidth;
            var clientWidth = wrapper[0].clientWidth;

            if (scrollLeft <= 0) {
                leftArrow.addClass('is-disabled');
            } else {
                leftArrow.removeClass('is-disabled');
            }
            
            if (scrollLeft + clientWidth >= scrollWidth - 1) {
                rightArrow.addClass('is-disabled');
            } else {
                rightArrow.removeClass('is-disabled');
            }
        }

        leftArrow.on('click', function() {
            wrapper.animate({ scrollLeft: wrapper.scrollLeft() - 300 }, 300);
        });

        rightArrow.on('click', function() {
            wrapper.animate({ scrollLeft: wrapper.scrollLeft() + 300 }, 300);
        });
        
        wrapper.on('scroll', checkScroll);
        
        setTimeout(checkScroll, 100); 
    }

    $('.scrollable-container').each(function() {
        setupTableScroll($(this));
    });

    // Benchmark image carousel
    $('#bm-tabs').on('click', '.bm-carousel-tab', function() {
        var idx = $(this).data('idx');
        $('#bm-tabs .bm-carousel-tab').removeClass('active');
        $(this).addClass('active');
        $('.bm-carousel-img').removeClass('active');
        $('.bm-carousel-img').eq(idx).addClass('active');
    });

});