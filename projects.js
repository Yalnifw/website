var current = document.getElementById("stocking");

function sample(a){
    switch (a){
        case 1:
            setContent("stocking");
            break;
        case 2:
            setContent("");
            break;
        case 3:
            setContent("");
            break;
        case 4:
            setContent("");
            break;
        case 5:
            setContent("");
            break;
        case 6:
            setContent("");
            break;
        case 7:
            setContent("");
            break;
        case 8:
            setContent("");
            break;
        case 9:
            setContent("");
            break;
        case 10:
            setContent("");
            break;
        case 11:
            setContent("");
            break;
        case 12:
            setContent("");
            break;
        case 13:
            setContent("");
            break;
        case 14:
            setContent("");
                break;
    }
}

function setContent(prj){
    current.style.display = "none";
    current = document.getElementById(prj);
    current.style.display = "block";
}