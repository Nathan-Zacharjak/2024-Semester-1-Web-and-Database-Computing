function GetLog() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let timestamps = JSON.parse(this.responseText);
            let list = document.getElementById("list");
            list.innerHTML = "";

            for (const timestamp of timestamps) {
                let newItem = document.createElement("li");
                newItem.innerText = timestamp;
                list.appendChild(newItem);
            }
        }
    };

    xhttp.open("GET", "/log.json");
    xhttp.send();

    setInterval(() => {
        xhttp.open("GET", "/log-ro.json");
        xhttp.send();
    }, 10000);
}