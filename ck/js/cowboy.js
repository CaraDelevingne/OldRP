/**
 * Created by Administrator on 2016/9/18.
 */
$(function(){
    var $li=$("#over>ul>li");

    $li.hover(function(){
        $(this).find(".text_node").css("display","block")
    },function(){
        $li.find(".text_node").css("display","none")
    })
});