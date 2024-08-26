function GetColor() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let heading = document.getElementById("Heading");
            heading.innerText = this.responseText;
            heading.className = this.responseText;
        }
    };

    xhttp.open("GET", "/color.txt");
    xhttp.send();

    let button = document.getElementById("Button");
    button.onclick = function() {
        xhttp.open("GET", "/color.txt");
        xhttp.send();
    };
}