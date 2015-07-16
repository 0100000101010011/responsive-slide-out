// start trigger responsive slide out navigation
$(document).ready(function(){
    responsive.init();
});

// start build responsive slide out navigation
var responsive = {
    init: function(){
        if(window.innerWidth < 640){
            responsive.buildPagesMenu();
            responsive.togglefreezePageScroll();
            responsive.toggleSearchField();
        }
    },
    configs: {
        /*this fixes the issue where on mobile when you scroll down, some elements jump out of design because the address bar disappears, this freezes the entire document's html when the slide out navigation is active to lock elements into place including the chrome address bar*/
        freezePageScrollScroll: false
    }, 
    buildPagesMenu: function(){
        /*start create the entire left pane that will contain all the other stuff*/
        var leftPaneHTML = '<div class="left-pane external-pane"></div>';
        $('html').append(leftPaneHTML);
        /*end create the entire left pane that will contain all the other stuff*/

        /*start create call to action item*/
        /*the dir="ltr" here is used because for whatever reasons, the phone number mixed with text displays in reverse direction*/
        var callToActionItem = '<div class="call-to-action-item"><ul><li><a href="tel:+1-866-227-2537" dir="ltr"><i class="fa fa-phone"></i>866-2-BRAKES</a><small>(866-227-2537)</small></li><li>Se Habla Español</li></ul></div>';
        /*refactor this selector into a variable*/
        $('.external-pane').prepend(callToActionItem);
        /*end create call to action item*/

        /*start create pages menu*/
        var pageMenuContainer = '<div class="page-menu-container"></div>';
        // $('.external-pane .page-menu-container').append($('ul.pages-menu').clone());
        $('.external-pane').append(pageMenuContainer);
        $('#DrawerMenu ul.pages-menu').clone().appendTo($(".page-menu-container"));

        /*end create pages menu*/

        // var pagesMenuItems = '<div class="pages-menu pages-pane pane-menu"></div>';

        // var categoriesPane = '<div class="categories-pane pane-menu"><h3 class="border-color-primary">Browse By Category</h3></div>';

        // var categoryMenu = $('.CategoryList > div > ul').clone().appendTo($('.categories-pane'));

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

        // button toggle event
        $('.button__toggle').on('click',function(){
            responsive.toggleLeftPane();
            $("#nav__responsive").toggleClass('nav__responsive--toggle');
            $(".search__bar").toggleClass('nav__responsive--toggle');
            responsive.togglefreezePageScroll();


        });
    },
    toggleLeftPane: function(){

        var html = $('html');
        var searchBar = $('.search__bar');

        if(html.hasClass('rightopen')){
            // responsive.toggleRightPane();
            var delayedOpenLeft = window.setTimeout(function(){
                html.toggleClass('leftopen');
            }, 100);
        } else {
            html.toggleClass('leftopen');
            //             $("html").css({"overflow":"hidden"});
            // searchBar.toggleClass('leftopen');
            // searchBar.css({"left":"295px"});
        }
    },
    checkLeftPaneForOpen: function(){
        if($('html').hasClass('leftopen')){
            return true;
        } else {
            return false;
        }
    },
    togglefreezePageScroll: function(){
         
        $('.button__toggle').on('click',function(){            
            if (responsive.configs.freezePageScrollScroll === false) {  
                responsive.freezePageScroll(); 
            } else {                 
                responsive.unfreezePageScroll();
            }            
        });
        responsive.configs.freezePageScrollScroll = false;
    }, 
    freezePageScroll: function(){
        $("html").css({"overflow":"hidden"});
        return responsive.configs.freezePageScrollScroll = true;
    }, 
    unfreezePageScroll: function(){
        $("html").css({"overflow":"auto"});
        return responsive.configs.freezePageScrollScroll = false;
    }, 
    toggleSearchField: function(){        
        /*start search button toggle show and hide methods*/
        $('.search__toggle').on('click', function(e){
            e.preventDefault();
            if($(".search__bar").hasClass('show')) {
                responsive.hideSearchField();
            } else {
                responsive.showSearchField();
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
