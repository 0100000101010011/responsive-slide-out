$(document).ready(function(){    
    cutOuts.init();
});

var cutOuts = {
    init: function() {
        cutOuts.renderCutOutToggleButton();
        cutOuts.toggleCutOut();
        cutOuts.positionCutOutToggleButton();
    }, 
    renderCutOutToggleButton: function() {
        // renders in the bottom right corner
        $("body").append("<button id='toggleCutOut'><i class='fa fa-adjust'></i></button>");
    }, 
    toggleCutOut: function() {
        $("#toggleCutOut").on("click", function(){
            if($(this).hasClass("toggle")) {
                cutOuts.removeCutOut();
            } else {                
                cutOuts.showCutOut();
            }
        });
    },
    showCutOut: function() {
        $("#toggleCutOut").addClass("toggle");
        $("*").css("border", "1px solid red");
    }, 
    removeCutOut: function() {
        $("#toggleCutOut").removeClass("toggle");
        $("*").css("border", "none");
    }, 
    positionCutOutToggleButton: function() {
        //position the button to be on the bottom right corner of the document body
        $("#toggleCutOut").css({
            "position" : "fixed", 
            "bottom" : "0", 
            "right" : "0"
        });
    }
};