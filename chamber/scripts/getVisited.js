// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
// today's date
const today = new Date();

// store current date
localStorage.setItem('lastVisitedTime', JSON.stringify(today));

//display last visited

displayDaysSinceLastVisit();

function displayDaysSinceLastVisit() {
  const visitsDisplay = document.querySelector('#visited');

  const lastVisit = localStorage.getItem('lastVisitedTime');

  if (!lastVisit) {
    visitsDisplay.innerHTML = '<h2>Welcome! Let us know if you have any questions.</h2>';
    
    return;
  }

  const lastVisitDate = Date.parse(lastVisit);
  
  if (!lastVisitDate) {
    // Stored date is not a valid format
    return;
  }

  const currentDate = new Date();

  const difference = currentDate - lastVisitDate;
  const differenceInDays = Math.floor(difference / msToDays);

  if (differenceInDays < 1) {
	visitsDisplay.innerHTML = '<h2>Back so soon! Awesome!</h2>';
	return;
  }
  else {
	visitsDisplay.innerHTML = '<h2>You last visited " + differenceInDays + " days ago.</h2>' ;
	return;
  }
 
}