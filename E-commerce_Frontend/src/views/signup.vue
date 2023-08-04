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
      <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/> -->
  
  
  
  </head>
  <body>
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
        <h1>Sign Up</h1>
        <p>Dont' have an account?</p>
        <!-- <p><a href="#">Sign Up Free</a></p> -->
        <router-link to="/login">Back to Login</router-link>
        
            <div class="box_login">
              <form method="POST" @submit.prevent="sendPost">
                <div class="myform">
                  <label for="name">Name:</label><br>
                  <input type="text" v-model="users.name"><br>  
                  <label for="email">Email:</label><br>
                  <input type="email" v-model="users.email"><br>
                  <label for="password">Password:</label><br>
                  <input type="password" v-model="users.pwd"><br>
                  <button>SignUp</button>
                </div>
                
              </form>
               
                
            </div>
      </div>
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
    height: 35rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    align-items: center;
    flex-direction: column ;
    margin: auto;
    
  }
  input{
    padding: .5rem;
    width: 15rem;
  }
  label{
    margin-top: 1rem;
  }
  button{
    margin-top: 1rem;
    padding: 1rem;

  }
  button:hover{
    background: white;
    color: red;
  }
  a{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .myform{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  
  </style>
<script>
import axios from 'axios';
// import { response } from 'express';
import {ref} from 'vue';
// import VueAxios from 'vue-axios';
export default{
  data(){
    return {
      users: {
          name:null,
          email:null,
          pwd:null,
          

      }
    };
  },
  methods:{
    sendPost(){
      // const userData={
      //     "name":this.name,
      //     "pwd":this.pwd,
      //     "email":this.email,
      // }
      // const postData = { name: this.name, pwd: this.pwd };
      axios.post("http://localhost:9000/users",this.users)
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