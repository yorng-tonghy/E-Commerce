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
     <!-- body -->
     <div class="box_hero">
        <div class="hero--box">
            <h1>Step Up Your Style</h1>
            <h1>Shop Now and Make a Statement!</h1>
            <div class="paragrah">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nisi cupiditate, sunt veritatis repellendus iure tempora omnis, labore dolor aut eum necessitatibus tenetur voluptatibus corrupti quisquam neque ipsa nam molestias!</p>
            </div>
            <div class="image">
                <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1f9cfa8c-bedc-47f1-b5e9-762255331ab0/air-jordan-1-low-flyease-mens-easy-on-off-shoes-D3wW7l.png" alt="">
                <!-- <img src="https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-Air-Max-PNG-Images.png" alt=""> -->
            </div>
            <div class="signup_button">
                <a href="#"><router-link to="/signup">Sign Up</router-link></a>
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
                    <a href="#"><router-link to="/signup">Sign Up</router-link></a>
                </div>
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
                <img src="https://www.volusion.com/blog/content/images/2023/01/Business-Structure-Types.jpg" alt="">
            </div>
        </div>
     </div>
     <!-- Sponsor -->
     <div class="sponsor_section">
        <div class="sponsor_wrapper">
            <div class="s_title">
                <p>Social Logo</p>
            </div>
            <div class="logos">
                <img src="https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1632523695" alt="">
                <img src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png" alt="">
                <img src="https://1.bp.blogspot.com/-jmbupY40a_U/XXPTcAY6wsI/AAAAAAAABQI/sS8H5XgJHNQURQ-IjVXevn-kLm-l9AkeACLcBGAs/s1600/logo-j%2526t-express-vector-idngrafis.png" alt="">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png" alt="">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="">
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
  <style lang="scss">
  
  @media (min-width: 1024px) {
    .header__wrapper{
    z-index: 1000;
}
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
        display: flex;
        justify-content: center;
        right: .01rem;
        bottom: .2rem;
        width: 900px;
        height: 500px;
      
       
        // border: 1px solid black;
        img{
            height: 400px;
            width: 400px;
            object-fit: cover;
            border-radius: 100%;
           box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;;

            // border-radius: 30px;
                // border-bottom-right-radius: 300px;
                // margin-left: 14.45rem;
                // margin-bottom: 15rem;

        }
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
        gap: .1rem;
        .wrapperBox{
            // border: 1px solid black;
            margin-top: 3rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 250px;
            height:250px;
            text-align: center;
            color: #736c78;
            gap: 1rem;
           
            img{
                margin: auto;
                width: 50px;
                height: 50px;
                font-size: .7rem;
                object-fit: cover;
                border-radius: 50%;
            }
        }
    }
}
.advertise_section{
    margin-top: 10rem;
    // border: 1px solid black;
    display: flex;
    justify-content: center;
    
   .advertise_wrapper{
    width: 100%;
        // height: 20rem;
        padding: 20px;
        // border: 1px solid black;
        // gap: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        // margin-left: 20rem;
        // margin: auto;
        // background: rgb(241, 194, 194);
        .advertise_left{
            width: 400px;
            margin-right: 20px;
        }
        .advertise_right{
            img{
                height: 300px;
                // width: 50%;
                // height: 50rem;
                object-fit: contain;
            }
        }
   }
}
.sponsor_section{
    .sponsor_wrapper{
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        // border: 1px solid black;
        .s_title{
            display: flex;
            justify-content: center;
            font-size: 2rem;
        }
        .logos{
            margin-top: 2rem;
            display: flex;
            gap: 1rem;
            justify-content: center;
            img{
                width: 120px;
                
                object-fit: contain;
            }
        }
    }
}
  
  </style>
