'use strict';

$(document).ready(function() {

    (function() {
        var tabs = $('.tab, li');

        document.addEventListener('click', tabListener);

        function tabListener(event) {
            if (event.target.nodeName !== 'A') {
                return;
            }

            tabs.each(function() {
                $(this).removeClass('active');
            });

            $(event.target.hash).addClass('active');
            console.log(event.target.parentNode);
            $(event.target.parentNode).addClass('active');
        }

    })();
});