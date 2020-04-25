<script>
    jQuery(function($) {
        $(window).on("load resize scroll", function() {
            var windowTop = $(window).scrollTop();
            if ($(window).scrollTop() > 20) {
                $("#beyond-return-header").addClass("persist");
                $("nav#header-nav ul li a").addClass("white");
            }
            if ($(window).scrollTop() <= 20) {
                $("#beyond-return-header").hide(.25).show(.25).removeClass("persist");
                if ($("section#hero").hasClass("transparent")){
                    $("nav#header-nav ul li a").removeClass("white");
                }
            }
        })
        // mobile nav initialization, previously slicknav.io
        $('#mobile-menu').beyondreturn_mobile({
            closedSymbol: "",
            openedSymbol: "",
            prependTo:'#header-nav'
        });
        $(window).on("load", function(){$("#mobile-menu").remove();});
        $(window).on("load resize", function(){
            var mobileVisibility = $(window).innerWidth();
            if (mobileVisibility < 800){
                $("#header-links .unmobile").detach().insertAfter(".beyondreturn_mobile_menu > ul.beyondreturn_mobile_nav li.mobile-logo");
            } else {
                $(".unmobile").detach().insertBefore("#header-links a.btn");
            }
        })
        $('.beyondreturn_mobile_btn').click(function(){
            $('.beyondreturn_mobile_btn').parent().toggleClass('opened');
            $("#beyond-return-header").toggleClass("mobile-open");
        })
    })
</script>