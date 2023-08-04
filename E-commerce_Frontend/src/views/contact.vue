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
      <!-- contact -->
      <div class="contact">
        <div class="contact_wrapper">
            <div class="contact_title">
                <p>Contact Form</p>
            </div>
            <div class="contact_desc">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus dolor explicabo sint. Asperiores totam architecto harum? Quis minus eos, exercitationem quibusdam quaerat accusantium, suscipit dolorum quos animi repellendus illo.</p>
            </div>
            <form method="POST" @submit.prevent="sendPost1">
                <div class="name_email">
                <input type="name" placeholder="NAME" v-model="contacts.name">
                <input type="email" placeholder="EMAIL" v-model="contacts.email">
            </div>
            <div class="telephone">
                <input type="phone" placeholder="TELEPHONE" v-model="contacts.phone">
            </div>
            <div class="message">
                <input type="text" placeholder="MESSAGE" v-model="contacts.message">
            </div>
            <!-- <div class="checkbox">
                <input type="checkbox">
                <p>I accept Bio's Privacy Policy</p>
            </div> -->
            <div class="button_send">
             <button>Send Message</button>
            </div>
            </form>
        
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
<script>
    import axios from 'axios';
// import { response } from 'express';
import {ref} from 'vue';
// import VueAxios from 'vue-axios';
export default{
  data(){
    return {
      contacts: {
          name:null,
          email:null,
          phone:null,
          message:null,
          

      }
    };
  },
  methods:{
    sendPost1(){
      axios.post("https://nikee-commerce.onrender.com/contacts",this.contacts)
     .then(response=>{
        console.log(response.data)
     })
     .catch(error=>{
        console.log(error)
     })

     
    }
  }
}

</script>
  
 <style lang="scss">
 table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
    .contact{
        display: flex;
        gap: 3rem;
        align-items: center;
        // justify-content: center;
        // align-items: center;
        // border: 1px solid black;
        height: 100vh;
        .right_wrapper{
            border: 5px solid black;
        }
        .contact_wrapper{
            display: flex;
            justify-content: center;
            align-items: center;
            // border: 1px solid black;
            flex-direction: column;
            .contact_title{
                font-size: 2rem;
            }
            .contact_desc{
                // border: 1px solid black;
                width: 50%;
            }
            .name_email{
                margin-top: 2rem;
                display: flex;
                justify-content: center;
                gap: .5rem;
                input{
                    border: 1px solid black;
                    padding: .5rem;
                }
            }
            .telephone{
                input{
                    border: 1px solid black;
                    margin-top: 1rem;
                    padding: .5rem;
                    width: 19.5rem;
                }
                
            }
            .message{
                input{
                    border: 1px solid black;
                    margin-top: 1rem;
                    padding: .5rem;
                    width: 19.5rem;
                    height: 10rem;
                }
                
            }
            .checkbox{
                margin-top: 1rem;
                display: flex;
                gap: .3rem;
                align-items: center;
                // justify-content: center;
            }
            .button_send{
                width: 7rem;
                margin-top: 1rem;
                // background-color: black;
                padding: .5rem;
                a{
                    text-decoration: none;
                    color: red;
                    &:hover{
                        color: white;
                    }
                }
            }
            input{
                border: 1px solid black;
                display: flex;

                justify-content: left;
            }
        }
    }
</style>
