$(document).ready(function() {
    $(window).scroll(function(e) {
        if($('body').scrollTop() >= 100) {
	    $('#navbar').removeClass('navbar-static-top');
	    $('#navbar').addClass('navbar-fixed-top');
        }else{
	    $('#navbar').removeClass('navbar-fixed-top');
	    $('#navbar').addClass('navbar-static-top');
        }
    });
});