$(document).ready(function () {

    // Loading Page

    $(".loading-screen").delay(3000).fadeOut(800, function () {
        $('body').css('overflow', 'visible');
    });

    // Trigger Scroll To Top
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            $('#top').fadeIn("fast"); // Fade in the arrow
        } else {
            $('#top').fadeOut("fast"); // Else fade out the arrow
        }
    });
    $('#top').click(function () { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });

    // Trigger DatePicker
    $(".fdatepickere").datepicker({
        format: "yyyy/mm/dd",
        container: ".availability, .book-form"
    });
    
    // Gallery
    var selectedClass = "";
    $(".fil-cat").click(function () {
        selectedClass = $(this).attr("data-rel");
        $("#portfolio").fadeTo(100, 0.1);
        $("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolio").fadeTo(300, 1);
        }, 300);

    });

    //Rooms
    $(".room-pic-slider").owlCarousel({
        rtl: true,
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        smartSpeed: 800,
        autoplay: false,
    });


    //Toggle widget initializing
    var allPanels = $('.accordion-widget > .accordion-content').hide();
    $('.accordion-widget > .accordion-content.show').show();
    $('.toggle > .accordion-header > a').click(function () {
        if ($(this).parent().next().is(":hidden")) {
            $(this).parent().next().slideDown();
            $(this).children('span').attr('class', 'fas fa-minus icon-minus').css('background-color', '#EFAB5A');
            $(this).parent().css({
                "border-bottom": "none"
            });
            $(this).css({
                "color": "#EFAB5A"
            });
            $(this).parent().next().css('border-bottom', '1px dotted #ddd');
        } else {
            $(this).parent().next().slideUp();
            $(this).css({
                "color": "#000"
            });
            $(this).children('span').attr('class', 'fas fa-minus icon-minus').css('background-color', '#000');
            $(this).children('span').attr('class', 'fas fa-plus icon-plus');
            $(this).parent().css('border-bottom', '1px dotted #ddd');
            $(this).parent().next().css('border-bottom', 'none');
        }

        return false;
    });

    $('.toggle > .accordion-header.show > a').click();


    //Accordion widget initializing
    $('.accordion > .accordion-header > a').click(function () {
        if ($(this).parent().next().is(":hidden")) {
            $(".accordion > .accordion-content").slideUp();
            $(".accordion > .accordion-header > a ").css('color', '#000').children('span').attr('class', 'fas fa-plus icon-plus').css('background-color', '#000')

            $(this).parent().next().slideDown();
            $(this).children('span').attr('class', 'fas fa-minus icon-minus').css('background-color', '#EFAB5A');
            $(this).parent().css({
                "border-bottom": "none"
            });
            $(this).css({
                "color": "#EFAB5A"
            });
            $(this).parent().next().css('border-bottom', '1px dotted #ddd');
        }
        return false;
    });

    $('.accordion > .accordion-header.show > a').click();

    //Tabs widget initializing
    $("#tabs-content > div").hide();
    $("#tabs li:first a").attr("id", "current").parent().attr("id", "current");
    $("#tabs-content > div:first").fadeIn();

    $("#tabs a").on("click", function (e) {
        e.preventDefault();
        if ($(this).attr("id") == "current") {
            return
        } else {
            $("#tabs-content > div").hide();
            $("#tabs a").attr("id", "").parent().attr("id", "");
            $(this).attr("id", "current").parent().attr("id", "current");
            $($(this).attr('name')).fadeIn();
        }
    });

    // Choose Pay Cash

    $('#exampleRadios4').on("click", function(){
        $('.cash-disable').prop('disabled', true);
    });

    $('#exampleRadios1, #exampleRadios2, #exampleRadios3').on('click', function(){
        $('.cash-disable').prop('disabled', false);
    });


    
});