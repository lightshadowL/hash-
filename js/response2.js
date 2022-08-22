$(document).ready(function(){
    // $("html,body").css({
    //     "background-color":"red"
    // })
    $("#m-open").click(function(){
        $(".m-content").css({
            "left":0
        });
    })
    $(".m-close").click(function(){
        $(".m-content").css({
            "left":"-100%"
        });
    });
    $("#s-bt").click(function(){
        $("#search").toggle()
        
    });
    
    // 스크롤 이벤트를 이용해서
    // 스크롤바의 탑의 값이 지정한 값보다 크면
    // 네비를 위에서 아래로 애니메이션하면서 고정
    // 스크롤바의 탑의 값이 지정한 값이하라면 
    // 네비를 원상태로 돌려놓는다.
    $(window).scroll(function(){
        var sTop=$(window).scrollTop();
        if(sTop>150){
            // 위에서 아래로 애니메이션 고정
            $(".d-nav").addClass("d-nav-add");
        }else{
            // 원상태로 복귀
            $(".d-nav").removeClass("d-nav-add")
        }
    });

    

});