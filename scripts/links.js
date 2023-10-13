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

    const linkList = week[links];

    for (const link of linkList){

        let linkURL = document.createElement('a');
    
        linkURL.setAttribute('href', link.url);
        linkURL.textContent = `${link.title} `;
        
        liWeek.appendChild(linkURL);
    };
    
    ulWeeks.appendChild(liWeek);
    });
  }