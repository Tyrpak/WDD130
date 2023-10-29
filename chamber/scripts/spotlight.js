const directoryUrl = 'https://tyrpak.github.io/wdd230/chamber/data/directory.json';

const spotlight = document.querySelector('.spotlight');

async function getMemberData() {
    const response = await fetch(directoryUrl);
    const data = await response.json();
    displaySpotlight(data.members);
  }
  
getMemberData();

const displaySpotlight = (members) => {
    members.forEach((member) => {
    
    if (member.membership == "gold"){
    let card = document.createElement('section');
    let name = document.createElement('h2'); // fill in the blank
    let sign = document.createElement('img');
    let description = document.createElement('p');

    
    // Build the image by setting all the relevant attributes
    sign.setAttribute('src', member.imageurl);
    sign.setAttribute('alt', `Sign of ${member.name}`); // fill in the blank
    sign.setAttribute('loading', 'lazy');
    sign.setAttribute('width', '256');
    sign.setAttribute('height', '256');
    // Build the h2 content out to show the member
    name.innerHTML = `<a href="${member.websiteurl}">${member.name}</a>`; // fill in the blank

    description.textContent = `${member.description}`;   
    

    // Append the section(card) with the created elements
    card.appendChild(sign);
    card.appendChild(name); 
    
    card.appendChild(description);
    
    spotlight.appendChild(card);
    }
    });
    
  }