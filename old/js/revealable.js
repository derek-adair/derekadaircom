(function( $ ){
    var methods = {
        init : function( options ) {
            return this.each(function(){
                var $this = $(this),
                windowHeight = $(window).height(),
                $revealContainers = $this.find('section, header, footer'),
                $revealers = $revealContainers.find('.revealer'),
                $windows = $revealContainers.find('.revealing-window');

                $revealContainers.css("height", windowHeight);
                $revealers.css({
                    "margin-bottom": windowHeight,
                    "z-index"      : '999'
                });
                $windows.css({
                    'position'        : 'fixed',
                    'top'             : '0',
                    'background-color': 'white',
                    'z-index'         : '888',
                    'height'          : windowHeight
                });
                

            });
        },
        reposition : function( ) {  }
    };

    $.fn.revealable = function( method ) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.revealable' );
        }    
    };
})( jQuery );
