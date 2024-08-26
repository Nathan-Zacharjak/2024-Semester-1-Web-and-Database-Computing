var button = document.getElementById("button");

function DateClick() {
    const d = new Date();
    document.getElementById("current_time").innerText = d.toDateString() + " " + d.toTimeString();
}

button.addEventListener("click", DateClick);