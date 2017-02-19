/**
 * Created by Administrator on 2016/9/22.
 */
//当窗口发生改变时
$(window).resize(function(){
    imgHeight()
});
//当页面加载时
$(function(){
    //wow
    new WOW().init();

    //img赋值同样的高
    imgHeight();

    //nav左侧的小图标
    var nav_li=$(".header_right li");
    nav_li.hover(function(){
        $(this).css({webkitTransform:"rotateY(360deg)",msTransform:"rotateY(360deg)",
            oTransform:"rotateY(360deg)",mozTransform:"rotateY(360deg)",transform:"rotateY(360deg)",
            webkitTransition:".5s",msTransition:".8s",oTransition:".8s",mozTransition:".8s",
            transition:".8s"
        })
    },function(){
        nav_li.css({transform:"",transition:""})
    });


    //backTop
    $(".back-top").click(function(){
        //在这儿window是dom对象，$(window)就是JQ对象
        window.scrollTo(0,0)
    })
});
//让图片的高等于文本的时候
function imgHeight(){
    if(parseInt($(window).width())<992 && parseInt($(window).width())>768){
        var textHeight=parseInt($(".img-text").prev().css("height"));
        $(".img-text").css("height",textHeight+"px")
    }else{
        $(".img-text").css("height","")
    }
}