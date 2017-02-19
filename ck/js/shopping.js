/**
 * Created by Administrator on 2016/9/12.
 */

$(function(){
    //放大镜
    var $small=$(".small");
    var $big=$(".big");
    var $big_s=$(".big_s");
    var $look=$(".look");
    var $copy=$(".copy");
    //放大镜宽高
    var oWidth=(parseInt($small.width())/parseInt($big_s.width())
        *parseInt($big.width()));
    var oHeight=(parseInt($small.height())/parseInt($big_s.height())
        *parseInt($big.height()));
    $look.css({width:oWidth+"px",height:oHeight+"px"});
    $big.hide();
    $copy.mousemove(function(e){
        $look.show();

        var oLeft= e.pageX;
        var oTop= e.pageY;
        //获取放大镜的位置
        var lookWidth=parseInt(oLeft-$small.offset().left)-parseInt($look.width())/2;
        var lookHeight=parseInt(oTop-$small.offset().top)-parseInt($look.height())/2;
        //判断鼠标
        if(lookWidth<0){
            lookWidth=0;
        }
        if(lookHeight<0){
            lookHeight=0;
        }
        //当鼠标的高度或者宽度超出放大镜的一半时，赋值在放大镜的中心
        if(lookWidth>parseInt($small.width())-parseInt($look.width())){
            lookWidth=parseInt($small.width())-parseInt($look.width())
        }
        if(lookHeight>parseInt($small.height())-parseInt($look.height())){
            lookHeight=parseInt($small.height())-parseInt($look.height())
        }
        $look.css({left:lookWidth+"px",top:lookHeight+"px"});

        //大图的位置
        var big_sLeft=(parseInt($big_s.width())/parseInt($small.width()))*lookWidth;
        var big_sTop=(parseInt($big_s.height())/parseInt($small.height()))*lookHeight;
        $big_s.css({left:-big_sLeft,top:-big_sTop});

        //右边窗口
        var bigLeft=parseInt($copy.width());
        $big.css({left:bigLeft+20+"px",top:0});
        $big.show();
    });

    $copy.mouseout(function(){
        $look.hide();
        $big.hide();
    });
    //切换商品图片
    var images=[
        {big:"images/big.jpg"},
        {big:"images/big1.jpg"},
        {big:"images/big2.jpg"},
        {big:"images/big3.jpg"}
    ];

    var $icon=$(".icon>li");
    $icon.click(function(){
        $small.children("img").prop("src",images[$(this).index()].big);
        $big_s.prop("src",images[$(this).index()].big)
    });

    //颜色选择
    var $color=$(".color");
    var $color_t=$(".color_t");
    $color.click(function(){
        $(this).css("border","1px solid black");
        $color_t.text("红色");
    });

    // 数量选择
    var $math=$("#math");
    for(var i = 1 ; i<11 ; i++){
        $math.html($math.html()+"<option value="+i+">"+i+"</option>");
    }


});