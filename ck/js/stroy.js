/**
 * Created by Administrator on 2016/9/20.
 */
$(function(){
    //search框
    var $search_box=$(".search_box");
    var $search=$(".search_copy");

    $search.click(function(){
        $search_box.focus()
    });
    $search.mouseover(function(){
        $search_box.css("display","inline-block");
        $search_box.stop(true).animate({width:"120px"},100);
    });
    $search.mouseout(function(){
        $search_box.css("overflow","");
        $search_box.stop(true).animate({width:"0"},100,function(){
            $search_box.css("display","none");
        });
    });




    //content阴影
    var $shadow=$(".shadow");
    var $show_li=$(".show>ul>li");
    $show_li.hover(function(){
        $shadow.eq($(this).index()).css("visibility","visible")
    },function(){

        $shadow.eq($(this).index()).css("visibility","hidden")
    })
});