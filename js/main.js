/*global window, document, alert*/
var i,
    ddContent,
    showOptions,
    privacy = document.getElementById("privacy-options"),
    postContent,
    privatePost,
    publicPost,
    post,
    posts,
    edit;

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

window.addEventListener('load', function () {
    "use strict";
    post = document.getElementById("post");

    post.addEventListener('click', function () {
        postContent = document.getElementById("status").value;
        posts = document.getElementById("posts");
        privatePost = [];
        publicPost = [];
        
        var today = new Date(),
            dd = today.getDate(),
            mm = today.getMonth() + 1,
            yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        today = mm + '/' + dd + '/' + yyyy;
        
        posts.innerHTML += "<div id='post-container'>" +
                                "<div class='user-header'>" +
                                    "<img src='https://scontent.flim1-1.fna.fbcdn.net/v/t1.0-1/p160x160/16298634_1866005673683265_4781597635078519780_n.jpg?oh=87362e41736827bb1cf8c9b047bc5ce4&oe=59728588' class='user-small'>" +
                                    "<a href='#' id='user'>ItsAndromeda</a>" +
                                "</div>" +
                                "<div class='date'>" +
                                    today + " · <i class='fa fa-users post-users'></i>" +
                                "</div>" +
                                "<div class='posts' contenteditable='false'>" +
                                    postContent +
                                "</div>" +
                            "</div>";
    });
});