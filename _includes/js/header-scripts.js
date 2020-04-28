<script>
    jQuery(function($) {
        $(function() {
            $(window).on("load resize scroll", function() {
                var windowTop = $(window).scrollTop();
                if ($(window).scrollTop() > 20) {
                    $("#beyond-return-header").addClass("persist");
                    $("nav#header-nav ul#unmobile-menu li a,nav#header-nav ul.social-nav li a").addClass("white");
                }
                if ($(window).scrollTop() <= 20) {
                    $("#beyond-return-header").hide(.25).show(.25).removeClass("persist");
                    if ($("section#hero").hasClass("transparent")){
                        $("nav#header-nav ul#unmobile-menu li a,nav#header-nav ul.social-nav li a").removeClass("white");
                    }
                }
            })
            // mobile nav initialization, previously slicknav.io
            $('#mobile-menu').beyondreturn_mobile({
                duration: 200,
                easingOpen: 'swing',
                easingClose: 'swing',
                closedSymbol: "",
                openedSymbol: "",
                prependTo:'#header-nav'
            });
            $("#mobile-menu").remove();
            $('.beyondreturn_mobile_btn').click(function(){
                $('.beyondreturn_mobile_btn').parent().toggleClass('opened', 500, 'swing');
                $("#beyond-return-header").toggleClass("mobile-open");
            })
        })
    })
</script>