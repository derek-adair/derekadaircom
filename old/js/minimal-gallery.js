(function( $ ){
    var methods = {
        init : function( options ) {
            return this.each(function(){
                var $this = $(this).addClass('minimal-gallery'),
                thumbs = $this.find('li').addClass('minimal-gallery-thumb minimal-gallery-item'),
                active = $this.find('li:first-child').removeClass('minimal-gallery-thumb').addClass('minimal-gallery-active'),
                imgArr;

                thumbs.bind('click', function( e ){
                    var activeImg = active.html(), //hack until I make the actual transition simply stores img src to swap
                    thumbImg = $(this).html();

                    active.html(thumbImg);
                    $(this).html(activeImg);
                });
            });
        }
    };

    $.fn.minimalGallery = function( method ) {

        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.minimalGallery' );
        }    

    };

})( jQuery );
