/*
author: alvin sanchez
origin: ransom carroll, for the goodvibes theme by cart designers
ver: 1.x
*/

//ready
$(document).ready(function(){
    responsiveSlideOut.init();
});

//start build responsive slide out navigation
var responsiveSlideOut = {
    init: function(){
        if(window.innerWidth < 640){
            responsiveSlideOut.triggerEvents();
            responsiveSlideOut.renderResponsiveSlideOutInterface();
            responsiveSlideOut.toggleFreezePageScroll();
            responsiveSlideOut.toggleSearchField();
        }
    },
    configs: {
        //configure overflow: hidden; to toggle dynamically on <html> element: 
        //bug fix for {https://teamtreehouse.com/forum/position-fixed-css-bug-in-chrome-and-firefox-for-android}
        freezePageScroll: false
    }, 
    triggerEvents: function() {
        //when the hamburger button is clicked
        $('.slideout__button--hamburger').on('click',function(){
            //slide out the panel
            responsiveSlideOut.toggleLeftSlideOutPanel();
            //and freeze the page to prevent scrolling while slide out panel is active
            responsiveSlideOut.toggleFreezePageScroll();

            //refactor this to be more abstract
            $("#nav__responsive").toggleClass('nav__responsive--toggle');
            $(".searchbar__container").toggleClass('nav__responsive--toggle');
        });
    }, 
    renderResponsiveSlideOutInterface: function(){
        //render slideout panel     
        var renderSlideOutPanelHtml = '<div class="left-slide-out-panel slide-out-panel"></div>';
        $('html').append(renderSlideOutPanelHtml);

        //render head content block at top of slideout panel
        //the dir="ltr" used in the anchor tag is used to fix bug where the phone number text with hyphens renders out of order
        var renderHeadContentBlockHtml = '<div class="call-to-action-item"><ul><li><a href="tel:+1-866-227-2537" dir="ltr"><i class="fa fa-phone"></i>866-2-BRAKES</a><small>(866-227-2537)</small></li><li>Se Habla Español</li></ul></div>';
        $('.slide-out-panel').prepend(renderHeadContentBlockHtml);
    },
    toggleLeftSlideOutPanel: function(){
        //toggle show/hide left slideout panel
        var html = $('html');
        html.toggleClass('left-slide-out-panel-open');
        //test toggle status (optional check to create events based on toggleClass state)
        if($('html').hasClass('left-slide-out-panel-open')){
            return true;
        } else {
            return false;
        }
    }, 
    toggleFreezePageScroll: function(){
        //merge with triggerEvent method's code
        $('.slideout__button--hamburger').on('click',function(){            
            if (responsiveSlideOut.configs.freezePageScroll === false) {  
                responsiveSlideOut.freezePageScroll(); 
            } else {                 
                responsiveSlideOut.unfreezePageScroll();
            }            
        });
        responsiveSlideOut.configs.freezePageScroll = false;
    }, 
    freezePageScroll: function(){
        //freeze page scroll functionality
        $("html").css({"overflow":"hidden"});
        return responsiveSlideOut.configs.freezePageScroll = true;
    }, 
    unfreezePageScroll: function(){
        //unfreeze page scroll functionality
        $("html").css({"overflow":"auto"});
        return responsiveSlideOut.configs.freezePageScroll = false;
    }, 
    toggleSearchField: function(){        
        //when search button is clicked
        //refactor this to not depend on the external css for .show, but to create it dynamically here
        $('.search__button--magnifyingglass').on('click', function(e){
            e.preventDefault();
            if($(".searchbar__container").hasClass('show')) {
                responsiveSlideOut.hideSearchField();
            } else {
                responsiveSlideOut.showSearchField();
            }
        });
    }, 
    showSearchField: function(){
        $(".searchbar__container").addClass('show');
        $(".search__button--magnifyingglass").css({"background":"#fff"});
        $(".search__button--magnifyingglass > a").css({"color":"#ba0001"});
    },
    hideSearchField: function(){
        $(".searchbar__container").removeClass('show');
        $(".search__button--magnifyingglass").css({"background":"#2B2B2B"});
        $(".search__button--magnifyingglass > a").css({"color":"#fff"});
    },
}