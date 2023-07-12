// Navigation

const navContainer = document.querySelector('.page-header');
const navToggle = document.querySelector('.page-header__toggle');

navContainer.classList.remove('page-header--no-js');

navToggle.addEventListener('click', function() {
  if (navContainer.classList.contains('page-header--closed')) {
    navContainer.classList.remove('page-header--closed');
    navContainer.classList.add('page-header--opened');
  } else {
    navContainer.classList.add('page-header--closed');
    navContainer.classList.remove('page-header--opened');
  }
});

// Slider

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
Swiper.use([ Navigation, Pagination, Autoplay ])

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../less/swiper/slider.less';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  speed: 500,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet slider__pagination-bullet'
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  observer: true,
  observeParents: true,
  parallax:true,
});

// Range

import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

noUiSlider.cssClasses.handle += ' range__handle';
noUiSlider.cssClasses.connect += ' range__connect';
noUiSlider.cssClasses.connects += ' range__connects';

import '../less/range/range.less'

const range = document.querySelector('.price-range__slider');

noUiSlider.create(range, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});

// Map

import 'leaflet';
import 'leaflet/dist/leaflet.css';

const ADDRESS = 'Санкт-Петербург, набережная реки Карповки, дом 5'

const mapContainer = document.querySelector('.coordinates');
mapContainer.classList.remove('coordinates--no-js');

const map = L.map('map')
  .setView({
    lat: 59.968322,
    lng: 30.317359,
  }, 20);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/map-marker.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: 59.968322,
    lng: 30.317359,
  },
  {
    icon: mainPinIcon,
  }
);

marker
  .addTo(map)
  .bindPopup(ADDRESS);
