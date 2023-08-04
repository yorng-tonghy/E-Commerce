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
      <div class="main_wrapper">
        <div class="left">
        <div class="left_wrapper">
            <div class="shipping_info">
                <p>Shipping Address</p>
                <div class="firstname_lastname">
                    <input type="text" placeholder="Firstname">
                    <input type="text" placeholder="Lastname">
                </div>
                <input type="text" placeholder="Street Address"><br>
                <input type="text" placeholder="City/Province"><br>
                <input type="text" placeholder="ZipCode">
            </div>
            <div class="shipping_method">
                <p>Shipping Method</p>
                <div class="wrapper_box">
                    <div class="box 1">
                    <img src="data:image/png;base64,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" alt="">
                </div>
                <div class="box 2">
                    <img src="https://app.glueup.com/resources/public/images/logo/400x200/aceb27b6-919b-41ed-af97-1dad9c17f9b0.png" alt="">
                </div>
                <div class="box 3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt="">
                </div>
                </div>
               
            </div>
            <div class="Card_holder">
                <div class="card_holder_wrapper">
                    <p>Card Holder Name</p>
                    <input type="text" placeholder="Card Number">
                    <div class="name_date_cvv">
                        <input type="text" placeholder="Name On Card">
                        <input type="text" placeholder="MM/YY">
                        <input type="text" placeholder="CVV">
                    </div>
                
                </div>
                <div class="proceed">
                    <p>#Credit Card Payment may late to 24h to be processed</p>
                </div>
                <div class="check">
                    <input type="checkbox">
                    <p>Save my payment details for future purchases</p>

                </div>
                <div class="Complete_button">
                   <router-link to="/">Complete Order</router-link>
                </div>
            </div>
            
            
        </div>
      </div>
      <div class="line">

      </div>
    <div class="right">
        <div class="cal">
            <table>
                <tr>
                    <td>Subtotal: </td>
                    <td>$123.12</td>
                </tr>
                <tr>
                    <td>Tax:</td>
                    <td>__</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>__</td>
                </tr>
                <tr>
                   <td>TOTAL:</td>
                   <td>$123.12</td>
                </tr>
            </table>
        </div>
        <div class="Bag_summery">
            <p>Bag Summery</p>
            <div class="box 1">
                <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cec4b036-00b4-4c40-a40f-f3459b640fc6/revolution-6-mens-running-shoes-extra-wide-qP3nkM.png" alt="">
                <div class="box_desc">
                    <p>Nike Shoes For Men</p>
                    <p>W5/M3.5</p>
                    <p>Air Jordan 1</p>
                    <p>$220</p>
                    <div class="wrapper_button">
                        <div class="edit">
                            <a href="#">Edit</a>
                        </div>
                        <div class="remove">
                            <a href="#">Remove</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="privacy">
                <p>Privacy Policy|Term & Conditions</p>

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
.Complete_button{
    width: 10rem;
    height: 3rem;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    a{
        text-decoration: none;
        color: white;
        &:hover{
            color: red;
        }
    }
}
.check{
    // border: 1px solid black;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    margin-left: 1rem;
    // justify-content: center;
    input{
        transform: scale(1.5);
        border: 1px solid black;
        margin-bottom: 1rem;
    }
}
.proceed{
    color: blueviolet;
    margin-left: 2rem;
    margin-top: 1rem;
}
.shipping_info{
    margin-top: 2rem;
    margin-left: 2rem;
    p{
        font-size: 1.5rem;
    }
}
.card_holder_wrapper{
    margin-top: 2rem;
    margin-left: 1rem;
    p{
        font-size: 1.5rem;
    }
}
    input{
        margin-top: 1rem;
        padding: .7rem;
        font-size: 20px;
        margin-left: 1rem;
    }
   .shipping_method{
    p{
        font-size: 1.5rem;
    }
    margin-left: 1rem;
    margin-top: 1rem;
    
    .wrapper_box{
        display: flex;
        gap: .8rem;
        // flex-direction: column;
    }
   
   .box{
    margin-top: 1rem;
        border: 1px solid black;
        border-radius: 3px;
        margin-left: 5px;
   }

    img{
        width: 70px;
        height: 30px;
        object-fit: contain;
        display: flex;
        justify-content: center;
        align-items: center;

    }
   }
  
   .main_wrapper{
    display: flex;
    gap: 1rem;
    .line{
        border: .5px solid black;
        height: 100vh;
    }
    .right{
        width: 50%;
        .cal{
            margin-top: 2rem;
            table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width:30rem;
            }

            td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            }

            tr:nth-child(even) {
            background-color: #dddddd;
            }
        }
    }
    .Bag_summery{
        display: flex;
        justify-content: center;
        // align-items: center;
        flex-direction: column;
        margin-top: 2rem;
        .box{
            width: 20rem;
            margin-top: 2rem;
            display: flex;
            justify-content: center;
            border: 1px solid black;
            img{
                width: 100px;
            }
            display: flex;
            .wrapper_button{
                margin-top: 1rem;
                display: flex;
                gap: 1rem;
                .edit{
                    width: 40px;
                    border: 1px solid black;
                    display: flex;
                    justify-content: center;
                }
                .remove{
                    width: 70px;
                    border: 1px solid black;
                    display: flex;
                    justify-content: center;
                }
                a{
                    text-decoration: none;
                    color: black;
                }
            }
        }
    }
   }
   .privacy{
        margin-top: 2rem;
   }
</style>
