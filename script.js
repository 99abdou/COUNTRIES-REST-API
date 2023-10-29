const toggle = document.querySelector('.toggle');
const icon = document.querySelector('.far');
const dropDown = document.querySelector('.dropDownOne');
const dropOption = document.querySelector('.drop');
const iconSearch = document.querySelector('.fas');
const inputSearch = document.getElementById('search')
const selecte = document.querySelector('#select')
const afric = document.querySelector('#Africa')
const asia = document.querySelector('#Asia')
const america = document.querySelector('#America')
const europe = document.querySelector('#Europe')
const oceania = document.querySelector('#Oceanie')


toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.classList.toggle('dark-mode');
    // icon.classList.toggle('fa-moon');
    // dropDownOne.classList('dark-mode')
})

const coutryAPI = () => {
fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data => affichagePays(data))
}

coutryAPI()

const affichagePays = countries => {
    console.log(countries);
    const countriesHTML = countries.map(country => getCountry(country))
    let container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join('');
};

let getCountry = (country) => {
    return `
    <div class="country">
    <img src="${country.flags.png}"/>
    <h2>${country.name.common}</h2>
    </br>
    <p><strong>Population:</strong> ${country.population}</p>
    <p><strong>Region:</strong> ${country.region}</p>
    
    <p><strong>Capital:</strong> ${country.capital}</p>
    </div>
    `
}



inputSearch.addEventListener('input', () => {
    if (inputSearch.value === ''){
        alert('Veuillez saisir un pays pour continuer la recherche')
    } else {
        fetch(`https://restcountries.com/v3.1/name/${inputSearch.value}`)
        .then(res => res.json())
        .then(data => affichagePays(data))
    }
})

selecte.addEventListener('click', () => {
    fetch(`https://restcountries.com/v3.1/region/${selecte.value}`)
    .then(response => response.json())
    .then(data => affichagePays(data))
})

// Cliquez sur un pays pour voir des informations plus détaillées sur une page séparée

// Cliquez sur un pays pour voir des informations plus détaillées sur une page séparée, Cliquez sur les pays frontaliers sur la page de détail
const modal = document.getElementById('countries');  // Get the modal element
let btnContainer = document.getElementsById('black');
container.addEventListener('country', () =>{

    for (var i=0;i<btnContainer.length;i++) {
        btnContainer[i].onclick = function(){
            modal.style.display = "block";   // Show the modal when clicked on button
            }
            }
})

            closeButton.onclick = openDetailsPage;

            container.addEventListener('country', () => {
                if (container.value === ''){
                    alert('Veuillez saisir un pays pour continuer la recherche')
                } else {
                    fetch(`https://restcountries.com/v3.1/name/${container.value}`)
                    .then(res => res.json())
                    .then(data => affichagePays(data))
                }
            })

