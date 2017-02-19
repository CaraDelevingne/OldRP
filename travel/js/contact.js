/**
 * Created by Administrator on 2016/9/28.
 */
$(function(){
    //keep on touch
    var val="";
    var input=$(".on-touch>input");
    input.focus(function(){
        clearVal($(this))
    });
    input.blur(function(){
        getplaceholder($(this))
    });
    $(".message").focus(function(){
        clearVal($(this))
    });
    $(".message").blur(function(){
        getplaceholder($(this))
    });


    function clearVal(obj){
        obj.val(" ");
        val=obj.prop('placeholder')
    }

    function getplaceholder(obj){
        if(obj.val("") == ""){
            obj.prop('placeholder',val)
        }
    }

});