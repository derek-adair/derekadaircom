/* Author: Derek Adair */
$(document).ready(function(){ 
    // HACK HACK HACK HACK HACK HACK HAK HACK HACK HAKHAKHAKHAKHA
    $('a[href="http://www.foxyform.com"]').css('display', 'none');
    // end hackery

    //menu animation TODO: work out xbrowser
    setTimeout(function(){$("#title").show('clip', {percent: 100}, 500);}, 1000);
    $('nav a').hover(
        function(){
            $(this).stop().animate({
                'background-position-y': '0%',
                color: "#06799F"
            }, 1000);
            return false;
        },
        function(){
            $(this).stop().animate({
                'background-position-y': '100%',
            color: "white"
            }, 1000);
        });

    $("a").pjax('#main', {
        url: $(this).attr("href"), 
        fragment:"#main"
    });

    $("#main").on('pjax:end',   function() { 
        $('a[href="http://www.foxyform.com"]').css('display', 'none');
    });
});
