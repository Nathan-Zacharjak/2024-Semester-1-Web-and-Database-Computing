function GetAccept() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let terms = document.getElementById("terms");
            terms.style.display = "none";
            let button = document.getElementById("button");
            button.style.display = "none";

            GetContent();
        }
    };

    xhttp.open("GET", "/accept");
    xhttp.send();
}


let header = document.getElementById("header");

function GetContent() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                document.body.innerHTML = document.body.innerHTML + this.responseText;
            } else if (this.status == 403) {
                let paragraph = document.createElement("p");
                paragraph.innerText = "Before you use our site, accept you have read this paragraph...";
                paragraph.id = "terms";
                document.body.appendChild(paragraph);

                let button = document.createElement("button");
                button.innerText = "Accept";
                button.type = "button";
                button.onclick = GetAccept;
                button.id = "button";
                document.body.appendChild(button);
            }
        }
    };

    xhttp.open("GET", "/content.ajax");
    xhttp.send();
}