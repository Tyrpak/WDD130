const year = new Date().getFullYear();

document.getElementById('year').innerHTML = year;

document.getElementById('lastModified').textContent = Date(document.lastModified);