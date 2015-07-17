/*
author: alvin sanchez
origin: ransom carroll, for the goodvibes theme by cart designers
ver: 1.x
*/

// ready
$(document).ready(function(){
    responsiveSlideOut.init();
});

// start build responsive slide out navigation
var responsiveSlideOut = {
    init: function(){
        if(window.innerWidth < 640){
            responsiveSlideOut.triggerEvents();
            responsiveSlideOut.renderResponsiveSlideOutInterface();
            responsiveSlideOut.togglefreezePageScroll();
            responsiveSlideOut.toggleSearchField();
        }
    },
    configs: {
        //configure overflow: hidden; to toggle dynamically on <html> element: 
        //bug fix for {https://teamtreehouse.com/forum/position-fixed-css-bug-in-chrome-and-firefox-for-android}
        freezePageScrollScroll: false
    }, 
    triggerEvents: function() {
        //when the hamburger button is clicked
        $('.slideout__button--hamburger').on('click',function(){
            //slide out the panel
            responsiveSlideOut.toggleLeftSlideOutPanel();
            //and freeze the page to prevent scrolling while slide out panel is active
            responsiveSlideOut.togglefreezePageScroll();

            //refactor this to be more abstract
            $("#nav__responsive").toggleClass('nav__responsive--toggle');
            $(".search__bar").toggleClass('nav__responsive--toggle');
        });
    }, 
    renderResponsiveSlideOutInterface: function(){
        /*render slideout panel*/        
        var renderSlideOutPanelHtml = '<div class="left-slide-out-panel slide-out-panel"></div>';
        $('html').append(renderSlideOutPanelHtml);

        /*render head content block in slideout panel*/
        /*the dir="ltr" used in the anchor tag is used to fix bug where the phone number text with hyphens renders out of order*/
        var renderHeadContentBlockHtml = '<div class="call-to-action-item"><ul><li><a href="tel:+1-866-227-2537" dir="ltr"><i class="fa fa-phone"></i>866-2-BRAKES</a><small>(866-227-2537)</small></li><li>Se Habla Español</li></ul></div>';
        /*refactor this selector into a variable*/
        $('.slide-out-panel').prepend(renderHeadContentBlockHtml);
        /*end create call to action item*/
    },
    toggleLeftSlideOutPanel: function(){

        var html = $('html');
        var searchBar = $('.search__bar');

        if(html.hasClass('rightopen')){
            // responsive.toggleRightPane();
            var delayedOpenLeft = window.setTimeout(function(){
                html.toggleClass('left-slide-out-panel-open');
            }, 100);
        } else {
            html.toggleClass('left-slide-out-panel-open');
            //             $("html").css({"overflow":"hidden"});
            // searchBar.toggleClass('left-slide-out-panel-open');
            // searchBar.css({"left":"295px"});
        }
    },
    checkLeftPaneForOpen: function(){
        if($('html').hasClass('left-slide-out-panel-open')){
            return true;
        } else {
            return false;
        }
    },
    togglefreezePageScroll: function(){

        $('.slideout__button--hamburger').on('click',function(){            
            if (responsiveSlideOut.configs.freezePageScrollScroll === false) {  
                responsiveSlideOut.freezePageScroll(); 
            } else {                 
                responsiveSlideOut.unfreezePageScroll();
            }            
        });
        responsiveSlideOut.configs.freezePageScrollScroll = false;
    }, 
    freezePageScroll: function(){
        $("html").css({"overflow":"hidden"});
        return responsiveSlideOut.configs.freezePageScrollScroll = true;
    }, 
    unfreezePageScroll: function(){
        $("html").css({"overflow":"auto"});
        return responsiveSlideOut.configs.freezePageScrollScroll = false;
    }, 
    toggleSearchField: function(){        
        /*start search button toggle show and hide methods*/
        $('.search__toggle').on('click', function(e){
            e.preventDefault();
            if($(".search__bar").hasClass('show')) {
                responsiveSlideOut.hideSearchField();
            } else {
                responsiveSlideOut.showSearchField();
            }
        });
        /*end search button toggle show and hide methods*/
    }, 
    showSearchField: function(){
        $(".search__bar").addClass('show');
        $(".search__toggle").css({"background":"#fff"});
        $(".search__toggle > a").css({"color":"#ba0001"});
        /*this next line refactor to a more abstract selector, this line is custom to atlsports.com, may remove this line anytime*/
        $(".h-search #SearchForm").css({"padding":"3px 0 0 10px", "background":"none"});
    },
    hideSearchField: function(){
        $(".search__bar").removeClass('show');
        $(".search__toggle").css({"background":"#2B2B2B"});
        $(".search__toggle > a").css({"color":"#fff"});
    },
}