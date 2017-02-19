/**
 * Created by Administrator on 2016/9/8.
 */
$(function(){
    var $classify=$(".classify li"),index=0;
    $classify.hover(function(){
        index=$(this).index();
        $(this).css("background","#E0E0E0");
        $(".menu").css({display:"block",background:"#E0E0E0"});
    },function(){
        $(this).css("background","");
        $(".menu").css({display:"none"});
    });
    $(".menu").hover(function(){
        $classify.eq(index).css("background","#E0E0E0");
        $(".menu").css({display:"block",background:"#E0E0E0"});
    },function(){
        $(".menu").css({display:"none",background:""});
        $classify.eq(index).css("background","");
    });
});