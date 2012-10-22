    var origContent = "";

    function loadContent(hash) {
        if(hash != "") {
            $('.smallMenu').show()
            if(origContent == "") {
                origContent = $('#content').html();
            }
            selector = "#content";
            dir = hash.match(/([^\/]*)\//);
//            console.log(dir)
            if (dir) {
                selector = "#pane";
                if ($('#pane.'+dir[1]).length == 0){
                    $('#content').load(dir[1]+'.html', function(){
                        $(selector).load(hash +".html");
                        $('.active').removeClass('active')
                        $('a[href^="#page-'+dir[1]+'"]').addClass('active');
                        $('a[href="#'+hash.replace('/','-')+'"]').addClass('active');
                    });
                }
            } 
            $(selector).load(hash +".html",function(){
                $('a[href^="#page-'+hash+'"]').addClass('active');
                $('a[href="#'+hash.replace('/','-')+'"]').addClass('active');
            });
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
                $(this).parent().siblings().children('.active').removeClass('active');
                $(this).siblings('.active').removeClass('active');
//                $(this).addClass('active');
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

