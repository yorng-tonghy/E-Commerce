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
      <!-- swiper link  -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
  
  
  
  </head>
  <body>
    <!---------- Header Section ------ -->
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
      <!-------- body Section  ---------->
      <div class="main_wrapper">
            <div class="main_wrapper">
                <!-- ======left side====== -->
                <div class="left_side">
                    <div class="top_box">
                        <img :src="product.image" alt="">
                    </div>
                    <div class="box_row_1">
                        <div class="box 1">
                            <img :src="product.imgFront" alt="">
                        </div>
                        <div class="box 2">
                            <img :src="product.imgBottom" alt="">
                        </div>
                    </div>
                    <div class="box_row_2">
                        <div class="box 1">
                            <img :src="product.imgFar" alt="">
                        </div>
                        <div class="box 2">
                            <img :src="product.imgTop" alt="">
                        </div>
                    </div>
                </div>
                <!--======= right side =======-->
                <div class="right_side">
                    <div class="title">

                    </div>
                    <div class="name">
                        <p>Home/Shoes</p>
                    </div>
                    <div class="type">
                        <p>{{product.name}}</p>
                    </div>
                    <div class="price">
                        <p>{{product.price}}</p>
                    </div>
                    <select name="" id="">
                        <option value="">M 3.5 / W 5</option>
                        <option value="">M 4 /W 5.5</option>
                    </select>
                    <!-- button -->
                    <div class="Add_to_cart">
                        <a href="#">ADD TO CART</a>
                    </div>
                    <div class="desc">
                        <b>Product Details</b><br>
                        <p>{{product.desc}}</p>
                    </div>
                </div>


            </div>
        

        </div>
           
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
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }

  .top_box{
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 500px;
    height: 600px;
   
    /* border: 1px solid black; */
   
  }
  .top_box img{
        width: 500px;
        height: 600px;
        object-fit: cover;
        background-color: #D9D9D9;
    }
    .box_row_1{
        margin-top: 1rem;
        display: flex;
        gap: 1rem;
    }
    .box_row_2{
        margin-top: 1rem;
        display: flex;
        gap: 1rem;
    }
 .box{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 240px;
    height: 140px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
 }
 .box img{
    width: 240px;
    height: 140px;
    object-fit: cover;
 }
 .main_wrapper{
    margin-top: 3rem;
    display: flex;
    justify-content: space-around;
    gap: 4rem;
    margin-left: 5rem;
 }
 .Add_to_cart{
    margin-top: 1rem;
    background-color: black;
    width: 510px;
    height: 115px;
    display: flex;
        justify-content: center;
        align-items: center;
    a{
        text-decoration: none;
        color: white;
        &:hover{
            color: red;
        }
       
    }
 }
 .right_side{
    font-size: 40px;
    .desc{
        margin-top: 2rem;
        font: 20px;
    }
    select{
        width: 12rem;
        height: 3rem;
    }
 }
 .title{
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    
 }
 .container__boxes{
    .container--box{
        color: black;

        .child__container--box{
            width: 250px;
            height: 320px;
            background-color: #2F4F4F;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            img{
                width: 215px;
                height: 135px;
                object-fit: cover;
                border-radius: 20px;
                margin-top: 1rem;
                
            }
            .child__container--box-cash--cart{
                display: flex;
            }

        }
    }

 }
  </style>

  <script>
    import axios from 'axios';
    import {ref} from 'vue'

export default{
    data(){
        return {
            product: {
                image: ''
            }
        }
    },
      mounted() {
        axios.get("http://localhost:9000/detail/"+localStorage.getItem('selectedItem'))
        .then(res => {
            this.product = res.data
            console.log(this.product);
        })
      },
    }

</script>
