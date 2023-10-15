const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

const url = 'https://tyrpak.github.io/wdd230/chamber/data/directory.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
  }
  
getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
    
    let card = document.createElement('section');
    let fullName = document.createElement('h2'); // fill in the blank
    let portrait = document.createElement('img');
    let dateOfBirth = document.createElement('p');
    let birthPlace = document.createElement('p');

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;   
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;   

    // Append the section(card) with the created elements
    card.appendChild(fullName); //fill in the blank
    
    card.appendChild(dateOfBirth);
    card.appendChild(birthPlace);
    card.appendChild(portrait);
    cards.appendChild(card);
  
    });
  }