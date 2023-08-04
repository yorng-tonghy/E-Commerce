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
    <!-- <img src="https://wallpaperaccess.com/full/680088.jpg" alt=""> -->
    <!---------- Header Section ------ -->
      <!-- <section class="header__section">
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
                        <a href="#"><router-link to="/detail">Detail</router-link></a>
                      </li>
                      <li>
                        <a href="#"><router-link to="/contact">Contact</router-link></a>
                      </li>
  
                  </ul>
              </div>
              <div class="header__cart">
                  <router-link to="/cart">Cart(0)</router-link>
              </div>
              <div class="login">
                <router-link to="/login">Login</router-link>
              </div>
          </div>
      </section> -->
      <!-------- body Section  ---------->
      <div class="login_wrapper">
        <h1>Login</h1>
        <p>Dont' have an account?</p>
        <!-- <p><a href="#">Sign Up Free</a></p> -->
        <router-link to="/signup">Sign Up Free</router-link>
        
            <div class="box_login">
                <label for="email">Email:</label>
                <input type="text"  v-model="email"><br>
                <label for="password">Password:</label>
                <input type="password" v-model="password">
                <!-- <a href="#">Forget Password?</a> -->
                <button type="submit"  @click="getData1()">Login</button>
            </div>
      </div>
            
     


      <!-- -------footer section------ -->
      <!-- <section class="footer__section">
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
      </section> -->
      <component is="script" src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"  async></component>
      <component is="script" src="../js/swiper" async></component>
  </body>
  </html>
  
  </template>
  
  <style>
 
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  .login_wrapper{
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

  }
  .login_wrapper h1{
    margin-top: 5rem;
  }
  .box_login{
    margin-top: 1rem;
    /* background-color: black; */
    color: black; 
    width: 30rem;
    height: 20rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    align-items: center;
    flex-direction: column ;
    margin: auto;
    background-color: white;
    
  }
  input{
    padding: .5rem;
    width: 15rem;
    border: 2px solid black;
    font-size: 20px;
  }
  label{
    margin-top: 1rem;
  }
  button{
    margin-top: 1rem;
    padding: 1rem;
    border: 2px solid black;

  }
  button:hover{
    background-color: red;
    color: white;
  }
  a{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  
  </style>
<script>
// import Home from '../views/Admin/Home.vue';
// import Vue from 'vue';

// import Router from 'vue-router';
export default{
  name:"Login",
  data(){
    return{
      email:'',
      password:''
    }
  },
 methods:{
    getData1(){
      if(this.email =='admin' && this.password =='admin'){
        window.location = "/admin"
      }else{
        alert("Please Sign Up First")
      }
      // if(this.email==)

    }
  }
}

</script>