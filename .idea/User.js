/**
 * Created by Administrator on 2016/3/3.
 */
$(function(){

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
 $("div").css("width",function(index,value){
  return parseInt(value)-500+"px";
 })
 $("div").onmousedown(function(){
   $(this).css("background","red");
  alert(1);
 })
})