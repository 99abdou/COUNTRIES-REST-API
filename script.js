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

// dropDown.addEventListener('click',() => {
//     dropOption.classList.toggle('drop')
// })

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

iconSearch.addEventListener('click', () => {
    if (inputSearch.value === ''){
        alert('Veuillez saisir un pays pour continuer la recherche')
    } else {
        fetch(`https://restcountries.com/v3.1/name/${inputSearch.value}`)
        .then(res => res.json())
        .then(data => affichagePays(data))
    }
})

// afficher les pays en ce référant des region sur Api 
// const countryByRegions = regions => {
//     selecte.addEventListener('click', => () {
//         fetch(`https://restcountries.com/v3.1/regionalbloc/${selecte.value}`)
//         .then(res => res.json())
//         .then(data => affichagePays(data))
       
//         fetch(`https://restcountries.com/v3.1/regionalbloc/${regions}`)
//         .then(response => response.json())
//         .then(data => affichagePays(data))
//         }

//     })

selecte.addEventListener('click', () => {
    fetch(`https://restcountries.com/v3.1/region/${selecte.value}`)
    .then(response => response.json())
    .then(data => affichagePays(data))
})
