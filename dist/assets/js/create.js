"use strict";!function(){var e=function(){function e(){d.clearRect(0,0,a.width,a.height),a.width=i,a.height=c}function t(){d.drawImage(g,0,0,i,c)}function n(){var e=m/1.7,t=37*e/320,n=m/2-e/2;d.drawImage(h,n,c-40,e,t)}var i=m,c=g.height*i/g.width;e(),t(),n()},t=function(){e();var t=f.right.x-f.left.x+40;d.drawImage(s,f.left.x,f.left.y-t,t,t)},n=function(e){d.fillStyle="#29a2ef",d.fillRect(e.x-10,e.y-10,20,20)},i=function(e){f.left=e,document.querySelector(".instruction-1").classList.remove("highlight"),document.querySelector(".instruction-2").classList.add("highlight")},c=function(e){f.right=e,document.querySelector(".instruction-2").classList.remove("highlight"),document.querySelector(".instruction-3").classList.add("highlight")},o=function(e){var n=e.target.dataset.direction;switch(n){case"left":f.left.x--,f.right.x--;break;case"right":f.left.x++,f.right.x++;break;case"down":f.left.y++,f.right.y++;break;case"up":f.left.y--,f.right.y--}t()},r=function(){var e=document.getElementById("canvas"),t=e.toDataURL();window.open(t)},l=function(){y=0,e(),document.querySelector(".instruction-1").classList.add("highlight"),document.querySelector(".instruction-2").classList.remove("highlight"),document.querySelector(".instruction-3").classList.remove("highlight")},u=function(e){y++,3===y&&(y=1);var o={x:e.offsetX,y:e.offsetY};switch(n(o),y){case 1:i(o);break;case 2:c(o),setTimeout(function(){t()},500)}},a=document.getElementById("canvas"),d=a.getContext("2d"),s=document.getElementById("beanie"),h=document.getElementById("logo"),g=document.getElementById("image");g.src=window.location.href.split("?img=")[1];var m=400,f={left:{},right:{}},y=0;setTimeout(function(){e()},1e3),a.addEventListener("click",u);var v=Array.from(document.querySelectorAll(".btn-move-beanie"));v.forEach(function(e){e.addEventListener("click",o)}),document.getElementById("export").addEventListener("click",r),document.getElementById("reset").addEventListener("click",l)}();