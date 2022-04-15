import * as flsFunction from "./modules/functions.js";
//import * as tabs from "./modules/suitableTabs.js";
flsFunction.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);


const swiper = new Swiper('.swiper', {
  // Optional parameters
 // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  centeredSlides: false,
  autoHeight: false,
  slidesPerColumn: 2,
});


//Табы для Кому подойдет 1С: ЗУП 8?
$('.suitable__tabs-js').click(function() {
  // клик!
  let id = $(this).attr('data-tab-item'); // 1
  let content = $('.suitable__container-js[data-tab-item="'+ id +'"]'); // 2

  $('.suitable__tabs-js.jsTabActive').removeClass('jsTabActive'); // 1
  $(this).addClass('jsTabActive'); // 2

  $('.suitable__container-js.jsTabActive').removeClass('jsTabActive'); // 3
  content.addClass('jsTabActive'); // 4
})

