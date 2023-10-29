const banner = document.querySelector("#banner");

function bannerButton() {
    if (banner.style.display === 'block') {
	    banner.style.display = "none";
    }
};

const date = new Date();
let day = date.getDay();

function bannerDisplay() {
    if (day == 1 || day == 2 || day == 3 ) {
        banner.style.display  = "block";
    }
    else {
        banner.style.display = "none";
    }
};

bannerDisplay();
