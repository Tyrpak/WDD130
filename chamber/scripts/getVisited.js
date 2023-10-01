// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
// today's date
const today = new Date();

//display last visited
const visitsDisplay = document.querySelector('#visited');

const lastVisit = localStorage.getItem('lastVisitedTime');

//first visit
if(lastVisit==null){   
	visitsDisplay.innerHTML = '<h2>Welcome! Let us know if you have any questions.</h2>';   
}
else{
	const todayParsed = Date.parse(today);
  	const lastVisitParsed = Date.parse(lastVisit);

	const differenceInDays = Math.floor((todayParsed - lastVisitParsed) / msToDays);

	if (differenceInDays < 1) {
		visitsDisplay.innerHTML = '<h2>Back so soon! Awesome!</h2>';
	} else {
		visitsDisplay.innerHTML = '<h2>You last visited ' + differenceInDays + ' days ago.</h2>' ;
	}
}

localStorage.setItem('lastVisitedTime', today.toUTCString());