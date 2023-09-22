const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
        body.style.background = "#000";
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "❎";
	} else {
        body.style.background = "#fff";
		main.style.background = "#fff";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});
