    var origContent = "";

    function loadContent(hash) {
        if(hash != "") {
            $('.smallMenu').show()
            if(origContent == "") {
                origContent = $('#content').html();
            }
            selector = "#content";
            dir = hash.match(/([^\/]*)\//);
            console.log(dir)
            if (dir) {
                selector = "#pane";
                if ($('#pane.'+dir[1]).length == 0)
                    $('#content').load(dir[1]+'.html', function(){
                        $(selector).load(hash +".html");
                    });
            } 
            $(selector).load(hash +".html");
        } else if(origContent != "") {
            $('.smallMenu').hide()
            $('#content').html(origContent);
        } else {
            $('.smallMenu').hide()
        }
    }

    $(document).ready(function() {
            $.history.init(loadContent);
            $('a[href^="#"]').live('click',function(e) {
                    var url = $(this).attr('href');
                    var dir = "";
                    if (url.match(/^.*#page-/))
                        url = url.replace(/^.*#page-/, '');
                    else {
                        dir = url.match(/#([^-]*)/)[1] + "/"
                        url = url.replace(/^.*#[^-]*-/, '');
                        
                    }
                    $.history.load(dir + url);
                    return false;
                });

        });

