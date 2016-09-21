$(document).ready(function(){
    // slow scrolling to top
    var menuLinks =  $('a[href*=#]:not([href=#])');
    menuLinks.click(function(e){
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var _hash = this.hash;
          var target = $(_hash);

          target = target.length ? target : $('[name=' + _hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            },
            300,
            'swing',
            function(){
                window.location.hash = _hash;
            });
            e.preventDefault();
            return false;
          }
        }
    });

    // Read hash when page loads to scroll to proper section
    var hash = window.location.hash,
        currentSectionLink = $('header').find('a[href='+hash+']');

    if(!!currentSectionLink){
        currentSectionLink.trigger('click');
    }
});