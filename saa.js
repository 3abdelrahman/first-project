 

var img = document.getElementById("myImage");

document.addEventListener("mousemove",function(e){
    
    img.style.left = e.clientX+"px";
    img.style.top = e.clientY+"px";
});