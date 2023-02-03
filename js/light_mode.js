var mode = document.getElementById("mode");

mode.onclick = function (){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        mode.src = "img/dark theme icon/sun.png";
    } else {
        mode.src = "img/dark theme icon/moon.png";
    }
}