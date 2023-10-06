// page rating

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

pass2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (pass1.value !== pass2.value) {
        message.style.display = "block";
		message.textContent = "The Passwords DO NOT MATCH!";
		message.style.visibility = "show";
		pass2.style.backgroundColor = "#fff0f3";
		pass2.value = "";
		//pass2.focus();
	} else {
		message.style.display = "none";
		pass2.style.backgroundColor = "rgb(0, 0, 0, 0.1)";
	}
}
