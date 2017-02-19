/**
 * Created by Administrator on 2016/9/9.
 */
$(function(){
    //复选框点击文字改变状态

    var cek=true;
    $(".check").prev().prop("checked",getcookie(cek));
    $(".email").val(getcookie("name"));
    $(".password").val(getcookie("pasW"));

    $(".check").click(function(){
        $(this).prev().prop("checked",cek);
        if (cek == false) {
            cek = true;
        }else{
            cek = false;
        }
        //添加cookie
        var $email=$(".email").val();
        var $password=$(".password").val();
        var oDate=new Date();
        oDate.setDate(oDate.getDate()+30);
        document.cookie="name="+$email+";expires="+oDate;
        document.cookie="pasW="+$password+";expires="+oDate;
        document.cookie="state="+cek+";expires="+oDate;
    });

    $(".but").click(function(){
        var email=getcookie("name");
        var passwo=getcookie("pasW");
        alert(email);
        alert(passwo);
    });


});
function getcookie(name){
    var res=document.cookie;
    var arrCookie=res.split("; ");
    for(var i = 0; i<arrCookie.length; i++){
        var arr=arrCookie[i].split("=");
        if(name==arr[0]){
            return arr[1]
        }
    }
    return "";
}
