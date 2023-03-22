import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/css/style.scss";

const app = createApp(App);

app.use(router);

app.mount("#app");

// import { createApp } from "vue";
// import App from "/views/App.vue";
// import router from "./router";


// const app = createApp(App);

// app.use(router);

// app.mount("#app");
//swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
