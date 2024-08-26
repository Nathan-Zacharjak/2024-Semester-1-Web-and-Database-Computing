// Task 3.1
var count = 0;
function MouseHover() {
    count = count + 1;
    document.getElementById("mcount").innerText = count;
}

// Task 3.2
function DoPost() {
    const d = new Date();
    const dateString = d.toLocaleString();
    const postString = document.getElementById("text-input").value;

	const blueRadio = document.getElementById("blue-radio").checked;
	const redRadio = document.getElementById("red-radio").checked;

	// Task 3.4
	var postQuantity = document.getElementById("post-quantity");
	var postsDiv = document.getElementById("posts");

	for (let i = 0; i < postQuantity.value; i++){

		var timeText = document.createElement("p");
		timeText.innerText = dateString;
		timeText.setAttribute("class", "post-time");
		var postText = document.createElement("p");
		postText.innerText = postString;
		postText.setAttribute("class", "post-content");

		if (blueRadio) {
			postText.style.color = "blue";
		} else if (redRadio) {
			postText.style.color = "red";
		}

        // Task 3.6
        const italic = document.getElementById("check-italic").checked;
        const bold = document.getElementById("check-bold").checked;

        if (italic) {
            postText.style.fontStyle = "italic";
        }

        if (bold) {
            postText.style.fontWeight = "bold";
        }

		postsDiv.appendChild(timeText);
		postsDiv.appendChild(postText);

	}
}

// Task 3.3
function ToggleMainDiv(toggle) {
	if (toggle) {
		document.getElementById("main").style.display = "block";
		document.getElementById("menu").style.display = "none";
	} else {
		document.getElementById("main").style.display = "none";
		document.getElementById("menu").style.display = "block";
	}
}

// Task 3.5
var backgroundInput = document.getElementById("background-input");

function ChangeBackground() {
    document.body.style.backgroundColor = backgroundInput.value;
}

backgroundInput.addEventListener("focusout", ChangeBackground);

// Task 3.6
function UpdateVisiblePosts(sliderValue) {
	let posts = document.getElementById("posts").children;
	sliderValue = sliderValue*2;

	for (let i = 0; i < posts.length; i=i+2) {
		const date = posts[i];
		const post = posts[i + 1];

		if (i < sliderValue) {
			date.style.display = "block";
			post.style.display = "block";
		} else {
			date.style.display = "none";
			post.style.display = "none";
		}
	}
}