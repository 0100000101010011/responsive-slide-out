/* Cleanup */
$('.pane-menu div').remove();

$('.pane-menu ul').each(function(){
    var self = $(this);
    if(!self.children('li').length){
        self.remove();
    } else {
        self.removeAttr('style');
    }
});

/*bigcommerce template - start create pages menu*/
var pageMenuContainer = '<div class="page-menu-container"></div>';
// $('.slide-out-panel .page-menu-container').append($('ul.pages-menu').clone());
$('.slide-out-panel').append(pageMenuContainer);
$('#DrawerMenu ul.pages-menu').clone().appendTo($(".page-menu-container"));
/*end create pages menu*/

/*add delay to left slide out*/
var delayedOpenLeft = window.setTimeout(function(){
    html.toggleClass('left-slide-out-panel-open');
}, 10);

//GOES IN BOTTOM OF renderDarkPageOverlay() method

        //REFACTOR ITEM this click event let's you click on the overlay to close the slide out navigation panel, must be refactored, it works on first click, not on following clicks
        $('.darken-page').on("click", function(){
            responsiveSlideOut.toggleLeftSlideOutPanel();
            responsiveSlideOut.removeDarkPageOverlay();
                        //refactor this to be more abstract
            $("#nav__responsive").toggleClass('nav__responsive--toggle');
            $(".searchbar__container").toggleClass('nav__responsive--toggle');
        });
        //REFACTOR ITEM

//END GOES IN BOTTOM OF renderDarkPageOverlay() method