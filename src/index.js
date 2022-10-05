import './css/styles.css';

import debounce  from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

const countryInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

countryInput.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY)
);

function onCountryInput() {
  const name = countryInput.value.trim();
  if (name === '') {
    return (countryList.innerHTML = ''), (countryInfo.innerHTML = '');
  }
    
    
  fetchCountries(name)
    .then(countries => {
      countryList.innerHTML = '';
      countryInfo.innerHTML = '';
      if (countries.length === 1) {
        countryList.insertAdjacentHTML(
          'beforeend',
          renderCountryList(countries)
        );
        countryInfo.insertAdjacentHTML(
          'beforeend',
          renderCountryInfo(countries)
        );
      } else if (countries.length >= 10) {
        alertTooManyMatches();
      } else {
        countryList.insertAdjacentHTML(
          'beforeend',
          renderCountryList(countries)
        );
      }
    })
    .catch(allertWrongName);
}

function renderCountryList(countries) {
    const markUp = countries
      .map(({ flags: { svg }, name: { official } }) => {
        return `<li class=list-item> <img class=icon src=${svg} alt=${official} width=60 />
    ${official}</li>`;
      })
      .join('');
    return markUp;
}

function renderCountryInfo(countries) {
    const markUp = countries.map(({ capital, population, languages }) => {
        
        return ` <ul class = "country-info__list">
          <li class = "country-info__item"><p><b>Capital: </b>${capital}</p> </li>
              <li class = "country-info__item"><p><b>Population: </b>${population}</p> </li>
                <li class="country-info__item"><p><b>Languages: </b>${Object.values(languages).join(', ')}</p></li>
          </ul>`;
    })
        .join('');
    return markUp;
}

function allertWrongName() {
    Notiflix.Notify.failure('Oops, there is no country with that name');
}

function alertTooManyMatches() {
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
}
     
    

