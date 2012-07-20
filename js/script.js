/* Author: Derek Adair

*/
var blah = 'blah';
$(document).ready(function(){ 
    //menu animation TODO: work out xbrowser
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

    $("a").pjax('#main', {url: $(this).attr("href"), fragment:"#main"});
    $('#main').live('pjax:error', function(e, xhr, err) {
        alert('Something went wrong: ' + err)
    })
});
