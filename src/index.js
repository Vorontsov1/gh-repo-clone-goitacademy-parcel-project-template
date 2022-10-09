import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchImages } from './js/fetch-images';
import { renderGallery } from './js/render-gallery';
import { onScroll, onTopbtn } from './js/scroll';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');


searchForm.addEventListener('submit', onSearchForm);
loadMoreBtn.addEventListener('click', onLoadMoreBtn);

onScroll();
onTopbtn();

function onSearchForm(e) {
    e.preventDefault();
}


function onLoadMoreBtn() {
    
}