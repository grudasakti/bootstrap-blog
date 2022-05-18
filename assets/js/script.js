var i = 0;
var myVar;

function progress() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 10;
        var id = setInterval(frame, 15);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
    progressHide();
}

function progressHide() {
    myVar = setTimeout(showSpinner, 1700);
}

function showSpinner() {
    document.getElementById("myProgress").style.display = "none";
    document.getElementById("spinner").style.display = "block";
    loading();
}

function loading() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}