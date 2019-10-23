 window.onload=function(){
           var fontSize=100;
           var designWidth=720;
           function rem(){
           	var CW=document.documentElement.clientWidth;
           	var scale=CW/designWidth;
           	document.querySelector("html").style.fontSize=fontSize*scale+"px"; 
           }
           rem();
           window.onresize=rem;
  	   }