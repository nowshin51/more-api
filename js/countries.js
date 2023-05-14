const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const countriesContainer = document.getElementById('countries-container');
    for(const country of countries){
        const CountryDiv = document.createElement('div');
        CountryDiv.classList.add('country');
        CountryDiv.innerHTML = `
            <h3>Name : ${country.name.common}</h3>
            <p>Capital : ${country.capital ? country.capital[0] : "No Capital"}</p>
            <button onClick ="loadCountryDetails('${country.cca2}')">Details</button>
        
        
        `;
        countriesContainer.appendChild(CountryDiv);
    }
}

const loadCountryDetails = code =>{
    // https://restcountries.com/v3.1/alpha/{code};
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = (detail) =>{
    console.log(detail);
    const countyDetail = document.getElementById('county-detail');
    countyDetail.innerHTML = `
        <h3>Details :${detail.name.common}</h3>
        <img src="${detail.flags.png}">
    `
}

loadCountries();