/**
 * Created by Administrator on 2016/10/5.
 */
$(function(){
    //��¼���ѡ�
    var login=$(".choice_login");
    var login_dt=$(".choice_dt");
    login.click(function(){
        $(".login_first").show();
        $(".login_dt").hide()
    });
    login_dt.click(function(){
        $(".login_first").hide();
        $(".login_dt").show()
    });

    //��ѡ�������ּ���ѡ��
    var $check_box=$(".check");
    var $check_txt=$(".check_txt");
    var kg=false;
    $check_txt.click(function(){
        if(kg == false){
            kg=true;
        }else{
            kg=false;
        }
        $check_box.prop("checked",kg)
    });
    // ��ά������¼
    var btn=$(".change_btn");
    btn.click(function(){
        if(kg == false){
            kg=true;
            $(".change_btn").css("backgroundPosition","-76px -85px");
            $(".login_first").hide();
            $(".login_dt").hide();
            $(".qrcode").show();
        }else{
            kg=false;
            $(".change_btn").css("backgroundPosition","0 -85px");
            $(".login_dt").hide();
            $(".qrcode").hide();
            $(".login_first").show();
        }
    });
    // ������ͨ��¼
    $(".back").click(function(){
        $(".login_first").show();
        $(".login_dt").hide();
        $(".qrcode").hide();
    });
    //背景图片
    footerH()
});
//动态获取屏幕高度
function footerH(){
    var win=$(window).height();
    var headerH=$("header").height();
    $("section").css("height",parseInt(win-headerH*2-12));
}