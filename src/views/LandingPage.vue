<template>
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home-Page-E-Commerce</title>
      <!-- <link rel="stylesheet" href="style.css"> -->
      <!-- box-icon link -->
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
      <!-- swiper link  -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
  
  
  
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
                          <a href="#"><router-link to="/home">Home</router-link></a>
                      </li>
                      <li>
                          <a href="#"><router-link to="./Checkout.vue">Shop</router-link></a>
                      </li><li>
                          <a href="#"><router-link to="./Checkout.vue">Blog</router-link></a>
                      </li>
                      <li>
                          <a href="#"><router-link to="./AboutView.vue">About</router-link></a>
                      </li>
                      <li>
                          <a href="#"><router-link to="./AboutView.vue">Landing</router-link></a>
                      </li>
                     
  
                  </ul>
              </div>
              <div class="header__cart">
                  <i class='bx bxs-cart'></i>
              </div>
              <div class="login">
                <router-link to="/login">Login</router-link>
              </div>
          </div>
      </section>
     <!-- body -->
     <div class="box_hero">
        <div class="hero--box">
            <h1>Step Up Your Style</h1>
            <h1>Shop Now and Make a Statement!</h1>
            <div class="paragrah">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nisi cupiditate, sunt veritatis repellendus iure tempora omnis, labore dolor aut eum necessitatibus tenetur voluptatibus corrupti quisquam neque ipsa nam molestias!</p>
            </div>
            <div class="image">
                <img src="../assets/img/image 16.png" alt="">
            </div>
            <div class="signup_button">
                <a href="#">Sign Up</a>
            </div>
        </div>
     </div>
     <!-- Sign up section -->
     <div class="wrapper_signup">
        <div class="wrapper-signup">
            <div class="letter">
                <p>Sign Up For Newsletters</p>
                <p>Get E-mail updates about our latest shop and special offers</p>
            </div>
            <div class="insert">
                <input type="email" placeholder="Your Email Address">
                <div class="box_insert">
                    <a href="#">Sign Up</a>
                </div>
            </div>
            
            
        </div>
     </div>
     <!-- Client Review  -->
     <div class="client_title">
        <p>Client</p>
        <p>Reviews</p>
     </div>
     <div class="wrapper_feedback">
        <div class="child_wrapper">
            <div class="wrapperBox 1">
                <img src="https://static.thenounproject.com/png/81720-200.png" alt="">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro temporibus, nulla ratione atque quod culpa dolore repudiandae dolor placeat assumenda quam eum corporis illum suscipit in dolores voluptatum quibusdam. Possimus.</p>
                <img src="../assets/img/Rectangle 94.png" alt="">
                <p>Jannie Suffer</p>
            </div>
            <div class="wrapperBox 2">
                <img src="https://static.thenounproject.com/png/81720-200.png" alt="">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro temporibus, nulla ratione atque quod culpa dolore repudiandae dolor placeat assumenda quam eum corporis illum suscipit in dolores voluptatum quibusdam. Possimus.</p>
                <img src="../assets/img/Rectangle 94.png" alt="">
                <p>Jannie Suffer</p>
            </div>
            <div class="wrapperBox 3">
                <img src="https://static.thenounproject.com/png/81720-200.png" alt="">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro temporibus, nulla ratione atque quod culpa dolore repudiandae dolor placeat assumenda quam eum corporis illum suscipit in dolores voluptatum quibusdam. Possimus.</p>
                <img src="../assets/img/Rectangle 94.png" alt="">
                <p>Jannie Suffer</p>
            </div>
            <div class="wrapperBox 4">
                <img src="https://static.thenounproject.com/png/81720-200.png" alt="">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro temporibus, nulla ratione atque quod culpa dolore repudiandae dolor placeat assumenda quam eum corporis illum suscipit in dolores voluptatum quibusdam. Possimus.</p>
                <img src="../assets/img/Rectangle 94.png" alt="">
                <p>Jannie Suffer</p>
            </div>
        </div>
     </div>
     <!-- advertise -->
     <div class="advertise_section">
        <div class="advertise_wrapper">
            <div class="advertise_left">
                <h3>What it's like </h3>
                <h3>Working with Nikeee</h3>
                <div class="line 1"></div>
                <div class="line 2"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis vitae cumque asperiores quidem autem similique eum provident aperiam repellat qui omnis, repellendus voluptates blanditiis obcaecati eaque! Voluptas, soluta cum.</p>
            </div>
            <div class="advertise_right">
                <iframe src="https://www.youtube.com" frameborder="1"></iframe>
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
      <component is="script" src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"  async></component>
      <component is="script" src="../js/swiper" async></component>
  </body>
  </html>
  </template>
  
  <!-- <script src=""></script> -->
  <!-- <script src="../js/swiper"></script> -->
  <style lang="scss">
  
  @media (min-width: 1024px) {
    .home {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
    
  }
  .login{
   
    a{
        text-decoration: none;
        color: white;
    }

  }
  .login a:hover{
    color: red;
  }
  .box_hero{
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .hero--box{
    width: 1140px;
    height: 570px;
    background-color: #48B9B9;
    display: flex;
    justify-content: center;
    border-radius:30px;
    border-bottom-right-radius:300px;
    flex-direction: column;
    color: white;
    padding-left: 2rem;
    padding-top: .5rem;
    
    
    .paragrah{
        
        width: 500px;
    }
    .signup_button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 100px;
        background-color: white;
        margin-left: 1rem;
        font-size: 32px;
        border-radius: 40px;
        margin-top: 1rem;
        margin-left: 1rem;
        a{
            text-decoration: none;
            color: black;
            &:hover{
                color: red;
            }
        }
    }
    .image{
        position: absolute;
        right: .5rem;
        top: 2rem;
        width: 993px;
        height: 663px;
    }
  }
//   signup section
.wrapper_signup{
    .wrapper-signup{
        margin-top: 5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 230px;
        background-color: #26B7B6;
        border-top-left-radius: 50px;
        border-bottom-right-radius: 50px;
        color: white;
        font-size: 24px;
        input{
            width: 300px;
            padding: 1rem;
            font-size: 17px;
        }
        .insert{
            display: flex;
        }
        .box_insert{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #26152F;
            width: 110px;
            a{
                text-decoration: none;
                color: white;
                font-size: 17px;
                &:hover{
                    color: red;
                }

            }
        }
    }
}
.client_title{
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    font-size: 40px;
}
.wrapper_feedback{
    display: flex;
    justify-content: center;
    .child_wrapper{
        display: flex;
        gap: 1rem;
        .wrapperBox{
            // border: 1px solid black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 250px;
            height:400px;
            text-align: center;
            
            img{
                margin: auto;
                width: 70px;
                height: 70px;
            }
        }
    }
}
  
  </style>
    <script setup>
    
  
  
  </script>