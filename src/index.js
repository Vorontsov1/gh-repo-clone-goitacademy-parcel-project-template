import './css/styles.css';

import { fetchCountries } from './js/fetchCountries';
import {
  buildCountry,
  buildCountryList,
  countryInfo,
  countryList,
  clearSearchResult,
} from './js/countries';


import Notiflix, { Notify } from 'notiflix';
import { debounce } from 'lodash.debounce';

Notiflix.Notify.init({
  width: '300px',
  position: 'right-top',
  timeout: 2000,
});

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');

searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch() {
    const searchName = searchBox.ariaValueMax.trim().toLowerCase();
    console.log(searchName);
    if (searchName) {
        fetchCountries(searchName)
            .then(resultSearch)
            .catch(error => {
                Notify.failure('Oops, there is no counrty with that name');
                clearSearchResult();
            });
    } else if (searchName === 0) {
        clearSearchResult();
    }
}

function resultSearch(country) {
    if (counrty.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        clearSearchResult();
        return;
    } else if (counrty.length === 1) {
        buildCountryList(country);
        countryList.innerHTML = '';
        return;
    } else {
        buildCountry(country);
        countryInfo.innerHTML = '';
        return;
    }
}