/**
 * Created by Administrator on 2016/10/1.
 */
$(function(){
    //点击文字改变复选框�
    var kg=false;
    var $agree=$(".agree");
    var $check=$(".check");
    $agree.click(function(){
        if(kg == false){
            kg=true;
        }else{
            kg=false
        }
        $check.prop("checked",kg)
    });
    //登录按钮链接��
    $(".tologin").click(function(){
        window.open("login.html")
    });

    //背景图片
    footerH()
});
//动态获取屏幕高度
function footerH(){
    var win=$(window).height();
    var headerH=$(".header").height();
    $("footer").css("height",win-headerH);
}

