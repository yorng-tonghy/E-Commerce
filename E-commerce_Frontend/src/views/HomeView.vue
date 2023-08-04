<template>
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home-Page-E-Commerce</title>
      <link rel="stylesheet" href="style.css">
      <!-- box-icon link -->
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
      <!-- <script src="https://unpkg.com/vue-router@4"></script> -->

  
  
  
  </head>
  <body>
      <section class="header__section">
          <div class="header__wrapper">
              <div class="header__logo">
                  <h2>NIKEEE</h2>
              </div>
              <div class="header__nav_item">
                  <ul>
                      <li>
                          <a href="#"><router-link to="/">Home</router-link></a>
                      </li>
                      <li>
                          <a href="#"><router-link to="/landing">Landing</router-link></a>
                      </li>
                      <li>
                        <a href="#"><router-link to="/contact">Contact</router-link></a>
                      </li>
                  </ul>
              </div>
              <div class="header__cart">
                   <ul>
                        <router-link to="/cart">Cart</router-link>
                        <router-link to="/login">Login</router-link>
                   </ul> 
              </div>
             
          </div>
      </section>
      <!-- swipper section -->
      <section class="swipper__section">
          <div class="swipper__wrapper">
              <!-- Slider main container -->
      <div class="swiper" >
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper" >
        
        <!-- Slides -->
        <div class="swiper-slide">
          <div class="left_item_swipper" >
              <div class="item_title">
                  <p>Popular Product</p>
              </div>
              <div class="item_model">
                  <p>Nike Justin</p>
              </div>
              <div class="item_desc">
                  <span>This Product is designed by Cambodian People.</span>
              </div>
              <div class="item_button">
                  <a href="#">ADD TO CART</a>
              </div>
          </div>
          <div class="right_item_swipper">
              <div class="item_img">
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d540060a-3487-41e5-ba84-f2b81b1be9b7/alpha-menace-elite-3-travis-kelce-mens-football-cleats-6m4HNQ.png" alt="">
              </div>
          </div>
        </div>
      </div>
    </div>
          </div>
      </section>
      <!-- container section -->
      <section class="container__shoes">
          <div class="container__wrapper" >
              <div class="container__title">
                  <h3>Feature Shoes</h3>
              </div>
              <div class="container__desc">
                  <p>Summer collection New Modern Design</p>
              </div>
            
              <div class="container__boxes" >
                  <div class="container--box" v-for="product in products">

                        <div class="child__container--box" @click="getDetail(product._id)">
                            <img :src="product.image" alt="">
                        </div>

                      
                        <div class="child__container--box-type">
                            <span>{{product.name}}</span>
                        </div>
                        <div class="child__container--box-title">
                            <p><b>{{ product.brand }}</b></p>
                        </div>
                        <div class="child__container--box-stars">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>
                        <div class="child__container--box-cash--cart">
                            <p>{{ product.price }}</p>
                            <router-link to="/cart">Add To Cart</router-link>
                        </div>
                  </div>
              </div>
             
          </div>
      </section>
      <!-- -------footer section------ -->
      <section class="footer__section">
          <div class="footer__wrapper">
              <div class="item1">
                  <div class="footer_logo">
                      <h1>NIKEEE</h1>
                  </div>
                  <div class="footer_contact">
                      <p>Contact</p>
                  </div>
                  <div class="footer_address">
                      <p>Address: 210 road,Street 30, PhnomPenh</p>
                  </div>
                  <div class="footer_phone">
                      <p>Phone: +855012312322</p>
                  </div>
                  <div class="footer_time">
                      <p>Hours: 8:00-20:00, Mon-Fri</p>
                  </div>
              </div>
              <div class="item2">
                  <p><a href="#">About</a></p>
                  <p><a href="#">About Us</a></p>
                  <p><a href="#">Privacy Policy</a></p>
                  <p><a href="#">Term & Condition</a></p>
                  <p><a href="#">Contact Us</a></p>
  
              </div>
              <div class="item3">
                  <p><a href="#">My Account</a></p>
                  <p><a href="#">Sign In</a></p>
                  <p><a href="#">View Cart</a></p>
                  <p><a href="#">Track My Order</a></p>
                  <p><a href="#">Help</a></p>
  
              </div>
              <div class="item4">
                  <div class="app">
                      <p>Install App</p>
                  </div>
                  <div class="app_desc">
                      <p>From App Store or Google Play</p>
                  </div>
                  <div class="app_box_wrapper">
                      <div class="appStore_box">
                          <div class="appStore_logo">
                              <i class='bx bxl-apple' ></i>
                          </div>
                          <div class="appStore_text_wrapper">
                              <p>Download on the</p>
                              <p><b>App Store</b></p>
                          </div>
                      </div>
                      <div class="playStore_box">
                          <div class="playStore_logo">
                              <i class='bx bxl-play-store' ></i>
                          </div>
                          <div class="playStore_text">
                              <p><b>GooglePlay</b></p>
                          </div>
                      </div>
                  </div>
                <div class="payment_wrapper">
                  <div class="payment_text">
                      <p>Secured Payment Gateways</p>
                  </div>
                  <div class="payment_logo">
                      <img src="https://i.pinimg.com/originals/e2/33/f5/e233f5b0c5a358449398f202b03f063a.jpg" alt="">
                      <img src="https://play-lh.googleusercontent.com/-deHHbwBUh2I4dzTjq9n4ggBGPqJwKzj9pwvPqyaR-hPxzKN9QVJOBsZP_ShlCDmX60" alt="">
                      <img src="https://www.acledabank.com.kh/kh/assets/download_material/download-logo-icon.png" alt="">
                      <img src="https://play-lh.googleusercontent.com/lKebetEHVDuBrbq5KJJ4MK6V6BaFuo0Mj9Qy9YZkoenrEDZVU-IzLrbAuoKMaCT4nA" alt="">
                  </div>
                </div>
              </div>
          </div>
      </section>
    
  </body>
  </html>
  </template>
  <style lang="scss">
  
  .login{
   
    a{
        text-decoration: none;
        color: white;
    }

  }
  .login a:hover{
    color: red;
  }
  .container__boxes{
    display: flex;
  
  }
  .child__container--box{
    img{
        width: 250px;
        height: 200px;
        object-fit: cover;

    }
    
  }
  .container__boxes{
    // background-color: blue;
    width: 100%;
    grid-template-columns: auto auto auto auto;
    // height: 100vh;
  }
  
  
  
  </style>
<script>
    import axios from 'axios';
    import {ref} from 'vue'

export default{
    data(){
        return {
            products: undefined
        }
    },
    methods: {
        getDetail(id){
            this.$router.push('/detail')
            localStorage.setItem('selectedItem', id)
            
        }
    },
      mounted() {
        axios.get("https://nikee-commerce.onrender.com/products")
        .then(res => {
            this.products = res.data
        })
      },
    }
  
  
</script>