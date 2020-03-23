document.addEventListener("click",function(e){
    var menu = document.getElementById("overlay");
    var target = e.target;
    if(target !== menu && !menu.contains(target)){
       menu.style.display = "none";
    }
});