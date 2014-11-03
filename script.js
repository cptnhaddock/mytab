'use strict';

$(document).ready(function() {

    (function () {
        var tabs = $('.tab');

        document.addEventListener('click', tabListener);

        function tabListener (event) {
            if (event.target.nodeName !== 'A') {
                return;
            }

            tabs.each(function (){
                $(this).removeClass('active');
            });

            $(event.target.hash).addClass('active');
        }

    }) ();
});