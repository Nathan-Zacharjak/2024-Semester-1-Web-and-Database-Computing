function GetLast() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("paragraph").innerText = this.responseText;
        }
    };

    xhttp.open("GET", "/last.txt");

    xhttp.send();
}