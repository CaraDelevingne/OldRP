/**
 * Created by Administrator on 2016/9/9.
 */
$(function(){


    //左边二级菜单
    var $first=$(".sort h3");
    var $second=$(".second>li");
    $first.click(function(){
       $(this).css("background","#D2D2D2").parent().siblings().find("h3").css("background","");

        $(this).next().slideToggle().parent().siblings().find("ul").slideUp();
    });

    $second.click(function(){
        $(this).next("span").css("background","#D2D2D2").siblings().next("span").css("background","");
        $(this).next($(".third")).css("background","");
        $(this).children().slideToggle();
    });
    //当页面加载完成时指定对象展开
    $(".third:lt(4)").slideDown();
    $(".second").eq(0).css("display","block");


    //商品选项卡
    var $rec=$(".rec");
        $rec.click(function(){
            $(".SP_img img").eq($(this).index()).fadeIn().siblings().fadeOut();
        });

    //鼠标移入阴影出现
    var $sec_btm_li=$(".sec_btm>ul>li");
    $sec_btm_li.hover(function(){
        $(".B_box").eq($(this).index()).css("display","block")
            .siblings().css("display","none");
    },function(){
        $(".B_box").css("display","none");
    });
    $(".B_box").click(function(){
        window.open("shopping.html")
    })

});