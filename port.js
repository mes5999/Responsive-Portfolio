(function ($) {
    var $container = $('.portfolio'),
        colWidth = function () {
            var w = $container.width(), 
                columnNum = 1,
                columnWidth = 50;
            if (w > 1200) {
                columnNum  = 5;
            } 
            else if (w > 900) {
                columnNum  = 3;
            } 
            else if (w > 600) {
                columnNum  = 2;
            } 
            else if (w > 300) {
                columnNum  = 1;
            }