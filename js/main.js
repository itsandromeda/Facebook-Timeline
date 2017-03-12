/*global window, document*/
var i,
    ddContent,
    showOptions,
    privacy = document.getElementById("privacy-options");

privacy.addEventListener('click', function () {
    "use strict";
    document.getElementById("privacy-dd").classList.toggle("show");
});

window.onclick = function (e) {
    "use strict";
    if (!e.target.matches('.privacy-options')) {
        ddContent = document.getElementsByClassName("privacy-dd-content");
        for (i = 0; i < ddContent.length; i += 1) {
            showOptions = ddContent[i];
            if (showOptions.classList.contains('show')) {
                showOptions.classList.remove('show');
            }
        }
    }
};