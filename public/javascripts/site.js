function GetSite() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let main = document.getElementById("main");
            main.innerHTML = this.responseText;
        }
    };

    let buttons = ["contact", "search", "about"];

    for (const id of buttons) {
        let button = document.getElementById(id);
        button.onclick = function () {
            xhttp.open("GET", "/"+ id +".ajax");
            xhttp.send();
        };
    }
}