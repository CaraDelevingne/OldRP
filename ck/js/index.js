/**
 * Created by Administrator on 2016/9/8.
 */
$(function(){
    var $classify=$(".classify li");
    $classify.hover(function(){
        $(this).css("background","#E0E0E0");
        $(".menu").css({display:"block",background:"#E0E0E0"});
    },function(){
        $(this).css("background","");
        $(".menu").css({display:"none"});
    });
    $(".menu").hover(function(){
        $(".menu").css({display:"block",background:"#E0E0E0"});
    },function(){
        $(".menu").css({display:"none",background:""});
    });

});