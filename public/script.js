'use strict';

(function() {
    var inputFile = document.querySelector('input[name="fileName"]');
    var submitButton = document.querySelector('button[name="submit"]');
    inputFile.addEventListener('change', function () {
        submitButton.disabled = false;
    });

}());
