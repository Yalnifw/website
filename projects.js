var current = document.getElementById("default");

function sample(){
    document.getElementById("viewport").innerHTML = "<br><em>It Worked!</em>";
}

function setContent(prj){
    current.style.display = "none";
    current = document.getElementById(prj);
    current.style.display = "block";
}