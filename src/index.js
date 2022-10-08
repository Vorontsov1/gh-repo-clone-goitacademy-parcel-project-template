import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchImages } from './js/fetch-images';
import { renderGallery } from './js/render-gallery';


// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.btn-load-more');
