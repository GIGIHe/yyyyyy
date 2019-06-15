$(function(){
    $(window).scroll(function(){
        // 注入ht
        var top = $(".zgm1").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })

    $(".hjul li").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('li').removeClass('hover');
             $(".hjul_inner").hide().eq(index).fadeIn(200);
        })
    })
    $(".tabdl dd").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('dd').removeClass('hover');
             $(".table").hide().eq(index).fadeIn(200);
        })
    })
    $(".tab_i3").click(function(){
        $(".mask").fadeIn();
        $(".code").fadeIn();
    })
     $(".close_code").click(function(){
        $(".mask").hide();
        $(".code").hide();
    })
      $(".tab_bar a").click(function(){
           $(".tab_bar a").removeClass("on")
           $(this).addClass("on")
    })
})