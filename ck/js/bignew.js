/**
 * Created by Administrator on 2016/9/19.
 */
$(function(){
    var $winWdith=$(window).width();
    //百叶窗
    var $img=$(".jeans>li");
    var wid=($winWdith/$img.length);
    var showWid=$winWdith-($img.width()+2);
    var everWid=parseInt(showWid/($img.length-1));

    for(var i = 1 ; i<$img.length ;i++){
        $img.eq(i).css({Zindex:i,left:wid*i});
        $(".year").css("display","block");
    }
    $img.hover(function(){
        var j=$(this).index();

        for(var k = 0 ;k<=j ;k++){
            $img.eq(k).stop().animate({left:everWid*k},300);

            $(".node").eq(k).css("display","block").parent().siblings().find(".node").css("display","none");
        }
        for(var a = j+1 ;a<$img.length ;a++){
            $img.eq(a).stop().animate({left:(everWid*(a-1)+$img.width())},300);
        }
        $(".year").eq(j).css("display","none").parents(".jeans>li").siblings().find(".year").css("display","block")
    },function(){

        for(var i = 1 ; i<$img.length ;i++){
            $img.eq(i).stop().animate({Zindex:i,left:wid*i});
            $(".node").css("display","none");
            $(".year").css("display","block");
        }
    })
});