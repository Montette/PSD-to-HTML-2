        
        //burger //
        
        $(".burger").on("click", function() {
            $("ul").toggleClass("navActive");
            $(".burger").toggleClass("active");
        })


        //scrolling menu //


        $("#about").on("click", scrolling);

        function scrolling() {

            $("body, html").animate({
                scrollTop: $(".about").offset().top
            }, 1000)
        }

        $("#services").on("click", scrolling2);

        function scrolling2() {

            $("body, html").animate({
                scrollTop: $(".services").offset().top
            }, 1000)
        }

        $("#prices").on("click", scrolling3);

        function scrolling3() {

            $("body, html").animate({
                scrollTop: $(".prices").offset().top
            }, 1000)
        }

        $("#gallery").on("click", scrolling4);

        function scrolling4() {

            $("body, html").animate({
                scrollTop: $(".gallery").offset().top
            }, 1000)
        }

        $(document).on("scroll", arrow);

        function arrow() {
            if ($(window).scrollTop() > 1000){
        }
        $(".arrow").addClass("activeArrow");
            if($(window).scrollTop()<1000) {
        $(".arrow").removeClass("activeArrow");
    }
}

        $(".arrow").on("click", back);

        function back() {
            $("body, html").animate({
                scrollTop: 0
            }, 800)
        }

        window.sr = ScrollReveal({
            reset: true
        });

        //reveal.js//

        sr.reveal('.hero', {
            origin: 'center',
            duration: 2500,
            distance: '0'
        });
        sr.reveal('.text', {
            origin: 'bottom',
            duration: 1000,
            distance: '100px'
        });

        sr.reveal('.service', {
            origin: 'bottom',
            duration: 1000,
            distance: '100px'
        });

        sr.reveal('.quoteContainer', {
            origin: 'center',
            duration: 2500,
            distance: '0'
        });

        sr.reveal('.priceType', {
            origin: 'left',
            duration: 1000,
            distance: '300px'
        });

        sr.reveal('.info', {
            origin: 'bottom',
            duration: 1000,
            distance: '300px'
        });

        sr.reveal('.photo', {
            origin: 'bottom',
            duration: 1500,
            distance: '100px'
        });

        sr.reveal('.containerMore', {
            origin: 'bottom',
            duration: 1500,
            distance: '50px'
        });

        sr.reveal('.download', {
            origin: 'bottom',
            duration: 1500,
            distance: '300px'
        });