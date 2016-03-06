/**
 * Created by Administrator on 2016/3/3.
 */
$(function () {
    $("table tr:odd").addClass("red")


    $("table tbody tr").on({
        mouseover: function () {
            $(this).css("background", "gold");
        },
        mouseout: function () {
            $(this).css("background", "")
        }
    })
    /*  $("table tbody tr").hover(function(){
     $(this).css("background","red");
     },(function(){
     $(this).css("background","")
     }));

     //var box= $("div").css(["color","width","height"]);


     //$.each(box,function(attr,value){
     // alert(attr+":"+value);
     //})

     //$("div").each(function(ind,ele){
     // alert(ind+":"+ele);
     //})
     //$("div").css({
     // "color":"red",
     // "background":"green",
     // "width":"200px"
     //
     //})
     //$("div").css("width",function(index,value){
     // return parseInt(value)-500+"px";
     //})
     //$("div").onmousedown(function(){
     //  $(this).css("background","red");
     // alert(1);
     //})


     //$("div").click(function(){
     //    $(this).toggleClass("red");
     //    if ($(this).hasClass("red")){
     //        $(this).removeClass("blue")
     //    }else {$(this).toggleClass("blue")}
     //})

     //$("div").click(function(){
     //    $(this).toggleClass(function(){
     //
     //    })
     //})
     $("input").bind("click",function(){
     alert("自定义事件");
     }).trigger("click");


     $("#box").delegate("#btnSub","click",function(){
     $(this).clone().appendTo("#box")
     })


     $("#aT").click(function (e) {
     e.stopPropagation()//禁止冒泡
     e.preventDefault();//禁止默认事 件
     alert(1);
     window.open("qq.com", "test")
     })
     $("#btnAni").click(function () {
     $("table").fadeToggle(2222)//淡入淡出
     })
     $("#btnSli").click(function () {
     $("table").slideToggle("slow")//上下切换
     })
     $(".animate").click(function () {
     $("table").animate({
     left: '150px',
     top:'150px'
     }, 'slow', function () {
     alert("yidong")
     })
     })
     */


    $("#btnSub").bind("click", function () {
        var id = $("#txtId").val();
        var name = $("#txtName").val();
        var dep = $("#txtDep").val();
        //   $("tbody").append("<tr><td>003</td><td>多大</td><td>离开</td></tr>")
        $("tbody").before('<tr><td>id</td><td>name</td><td>dep</td></tr>');

    })

})