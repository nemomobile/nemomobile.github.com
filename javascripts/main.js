    var origContent = "";

    function loadContent(hash) {
        if(hash != "") {
            $('.smallMenu').show()
            if(origContent == "") {
                origContent = $('#content').html();
            }
            $('#content').load(hash +".html",
                               function(){  });
        } else if(origContent != "") {
            $('.smallMenu').hide()
            $('#content').html(origContent);
        } else {
            $('.smallMenu').hide()
        }
    }

    $(document).ready(function() {
            $.history.init(loadContent);
            $('a[href^="#"]').click(function(e) {
                    var url = $(this).attr('href');
                    url = url.replace(/^.*#/, '');
                    $.history.load(url);
                    return false;
                });
        });

