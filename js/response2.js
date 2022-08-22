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

    // main-nav>li>a클릭하면
    // 현재의 a에는 배경색을 오렌지로 변경하고
    // 현재 a를 제외한 나머지 a는 모두 원상태로 복귀

    $(".main-nav>li>a").click(function(){
        $(".main-nav>li>a").removeClass("active")
        $(this).addClass("active");
        // 현재 a의 해시(id="이름")의 거리를 위에서 부터 위치를 찾아서 저장
        var hash=$(this.hash).offset().top;
        // 문서에서 hash의 top의 위치만큼 스크롤바의 탑(scrollTop)을 애니메이션 한다
        $("html,body").stop().animate({
            scrollTop:hash
        });  
    })

    $(".section").each(function(index){
        console.log("섹션의 수 : "+index)
        console.log("각 섹션의 top의 위치 : "+ $(".section").eq(index).offset().top)

        // 스크롤 이벤트를 이용해서 
        // 스크롤바의 값이 각 섹션의 top의 위치보다 크면
        // main-nav>li>a의 색상을 변경(index를 이용해서)
        $(window).scroll(function(){
            var sTop=$(window).scrollTop();
            if(sTop+50>$(".section").eq(index).offset().top){
                $(".main-nav>li>a").removeClass("active");
                $(".main-nav>li").eq(index).children("a").addClass("active")
            }
        })
    })

});