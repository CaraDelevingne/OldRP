/**
 * Created by Administrator on 2016/9/29.
 */
/*当窗口改变时*/
$(window).resize(function(){
    // Recommend 百叶窗 当窗口发生改变时
    byc();
    //popular-img 热门城市的覆盖层位置
    code();
    //Play Theme 主题玩乐动态获取图片宽度
    imgW();
});
/*当页面加载时*/
$(function(){
    //wow动画
    new WOW().init();
    // Recommend 百叶窗 页面加载完成时
    byc();

    //popular-img 热门城市鼠标移入
    $(".popular-img>ul>li").hover(function(){
        $(this).find(".popular-text").stop().slideDown()
    },function(){
        $(this).find(".popular-text").stop().slideUp()
    });

    //Play Theme 主题玩乐鼠标移入
    var play_li=$(".playTop");
    play_li.hover(function(){
        $(this).find(".play-img").css({top:"0px",oTransition:".5s",
            webkitTransition:".5s",mozTransition:".5s",msTransition:".5s",
            transition:".5s" });
    },function(){
        $(this).find(".play-img").css("top","154px");
    });

    /*延时加载*/
    setTimeout(function(){
        //Play Theme 主题玩乐动态获取图片宽度
        imgW();
        //popular-img 热门城市的覆盖层位置
        code();
    },0)

});

/*Recommend 百叶窗*/
function byc(){
    var rec_li=$(".recommend-box>li");
    var rec_box=$(".b-box").width();
    var recommend_text=$(".recommend-text");
    var win=(rec_box/rec_li.length);
    var show_win=parseInt(rec_box-388)/(rec_li.length-1);
    var recImg;
    //动态获取li的宽度
    rec_li.css({width:win+"px"});
    //动态获取copy层的宽
    setTimeout(function(){
        recImg=rec_li.find("img").width();
        recommend_text.css({width:recImg+"px"});
    },0);
    //初始位置
    for(var i = 1 ; i<rec_li.length ; i++){
        rec_li.eq(i).css({Zindex:i,left:win*i})
    }
    //移入li时
    rec_li.hover(function(){
        var j=$(this).index();
        //this之前
        for(var k = 0 ; k<=j ; k++){
            rec_li.eq(k).stop(true).animate({left:show_win*k},300,function(){
                recommend_text.eq(j).css("display","none").parents(".recommend-box>li").siblings()
                    .find(".recommend-text").css("display","block")
            });
        }
        //this之后
        for(var a = j+1 ; a<rec_li.length ; a++){
            rec_li.eq(a).stop(true).animate({left:show_win*(a-1)+388},300);
        }
    },function(){
        for(var i = 1 ; i<rec_li.length ; i++){
            rec_li.eq(i).animate({Zindex:i,left:win*i},0,function(){
                recommend_text.css("display","block");
            })
        }
    })
}

/*popular-img 热门城市的覆盖层位置*/
function code(){
    var pImg=$(".popular-img>ul>li");
    for(var i=0 ; i<pImg.length ; i++){
        pImg.eq(i).find(".popular-text").
            css("left",parseInt(pImg.eq(i).find("img").css("marginLeft"))+10+"px");
    }
}

/*Play Theme 主题玩乐动态获取图片宽度*/
function imgW(){
    var playTop=$(".playTop");
    var imgWidth=parseInt(playTop.children("img").css('width'));
    playTop.find("img").css("marginLeft",-imgWidth/2);
}

