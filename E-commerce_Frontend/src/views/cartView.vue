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
      <!-- body -->
      <div class="title">
        <div class="title_wrapper">
            <div class="promote">
                <p class="cart">#Cart</p>
                <p class="descript">Add Your coupon code & Save up to 70%</p>
            </div>
            <div class="shoes_table">
                <table>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>SubTotal</td>
                    </tr>
                    <tr>
                        <td><img src="https://www.svgrepo.com/show/7711/remove-button.svg" alt="" width="20px"></td>
                        <td><img  class="shoes" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/64b8a4ec-5e3c-4cb8-96ac-4a182e5006ef/kd-trey-5-x-basketball-shoes-cNfPMN.png" alt="" width="100px" height="100px"></td>
                        <td>Jodan Nike 3</td>
                        <td>$110</td>
                        <td>1</td>
                        <td>$110</td>
                    </tr>
                    <tr>
                        <td><img src="https://www.svgrepo.com/show/7711/remove-button.svg" alt="" width="20px"></td>
                        <td><img  class="shoes" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/64b8a4ec-5e3c-4cb8-96ac-4a182e5006ef/kd-trey-5-x-basketball-shoes-cNfPMN.png" alt="" width="100px" height="100px"></td>
                        <td>Jodan Nike 3</td>
                        <td>$110</td>
                        <td>1</td>
                        <td>$110</td>
                    </tr>
                    <tr>
                        <td><img src="https://www.svgrepo.com/show/7711/remove-button.svg" alt="" width="20px"></td>
                        <td><img  class="shoes" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/64b8a4ec-5e3c-4cb8-96ac-4a182e5006ef/kd-trey-5-x-basketball-shoes-cNfPMN.png" alt="" width="100px" height="100px"></td>
                        <td>Jodan Nike 3</td>
                        <td>$110</td>
                        <td>1</td>
                        <td>$110</td>
                    </tr>
                    <tr>
                        <td><img src="https://www.svgrepo.com/show/7711/remove-button.svg" alt="" width="20px"></td>
                        <td><img  class="shoes" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/64b8a4ec-5e3c-4cb8-96ac-4a182e5006ef/kd-trey-5-x-basketball-shoes-cNfPMN.png" alt="" width="100px" height="100px"></td>
                        <td>Jodan Nike 3</td>
                        <td>$110</td>
                        <td>1</td>
                        <td>$110</td>
                    </tr>
                </table>
            </div>
            
        </div>
      </div>
      <!-- coupon -->
      <div class="coupon">
        <div class="coupon_wrapper">
            <div class="coupon_left">
                <p>Apply Coupon</p>
                <div class="coupon_left_title">
                   
                    <input type="text">
                    <div class="apply">
                        <a href="#">Apply</a>
                    </div>
                </div>
            </div>
            <div class="coupon_right">
                <div class="coupon_right_title">
                    <p>Cart Totals</p>
                    <div class="cart_box">
                        <table>
                            <tr>
                                <td>Cart Subtotal</td>
                                <td>$218</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>$218</td>
                            </tr>

                        </table>
                    </div>
                </div>
                <div class="checkout_button">
                    <router-link to="/checkout">Proceed to checkout</router-link>
                    <!-- <a href="#"></a> -->
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
      <component is="script" src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"  async></component>
      <component is="script" src="../js/swiper" async></component>
  </body>
  </html>
  
  </template>
  
 <style lang="scss">
 table {
  font-family: arial, sans-serif;
//   border-collapse: collapse;
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
    tr{
        td{
            img{
                    object-fit: contain;
            }
        }
    }
    .title{
        
        .title_wrapper{
           
            .promote{
                display: flex;
                justify-content: center;
                flex-direction: column;
                background-color: black;
                height: 20rem;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                .cart{
                    color: red;
                    font-size: 4rem;
                }
                .descript{
                    font-size: 1rem;
                }

            }
        }
    }
    .coupon{
        .coupon_wrapper{
            margin-top: 3rem;
            display: flex;
            justify-content: space-around;
            .coupon_left{
                .coupon_left_title{
                    display: flex;
                    gap: 1rem;
                    input{
                        width: 15rem;
                    }
                    .apply{
                        padding: .5rem;
                        background-color: black;
                    }
                    a{
                        text-decoration: none;
                        color: red;
                        &:hover{
                            color: white;
                        }
                    }
                }
             
                
            }
            .coupon_right{
                    .coupon_right_title{
                        .cart_box{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: 3rem;
                            border: 1px solid black;
                        }
                    
                }
                .checkout_button{
                    margin-top: 1rem;
                    background-color: black;
                    display: flex;
                    justify-content: center;
                    padding: .3rem;
                        a{
                            text-decoration: none;
                            color: red;
                            &:hover{
                                color: white;
                            }
                    
                        }
                    }
                }
        }
    }
</style>
