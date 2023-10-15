const baseURL = "https://tyrpak.github.io/wdd230/";
const linksURL = "https://tyrpak.github.io/wdd230/data/links.json";

const ulWeeks = document.querySelector('#weeks');

async function getLinks() {
    try {
      const response = await fetch(linksURL);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // testing only
        displayLinks(data.weeks); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
         
    let liWeek = document.createElement('li');

    for (let i = 0; i < Object.keys(week).length; i++) {
      let linkURL = document.createElement('a');
   
      linkURL.setAttribute('href', week.links[i].url);
      linkURL.innerHTML = `${week.links[i].title} `;

      if (i < Object.keys(week).length -1) {
        linkURL.innerHTML = `${week.links[i].title} | `;
      };
        
      liWeek.appendChild(linkURL);
    }
    
    ulWeeks.appendChild(liWeek);
    });
  }