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