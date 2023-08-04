<template>
    <div class="main">
        <div class="left_side">
        <div class="left_side_wrapper">
            <div class="logo">NIKEEE</div>
            <div class="contents">
               <router-link to="/contact_admin">Contacts</router-link>
               <router-link to="/product">Products</router-link>
               <router-link to="/reciepts">Reciepts</router-link>
            </div>
            <div class="logout_">
               <router-link to="/logout">Logout</router-link>
            </div>
        </div>
        </div>
        <div class="right_wrapper">
            <h3>Add New Product</h3><br>
            <form method="POST" @submit.prevent="sendPost2">
            <table>
            <tr>
                <td>ID:</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>Name:</td>
                <td><input type="text" v-model="products.name"></td>
            </tr>
            <tr>
                <td>Brand:</td>
                <td><input type="text" v-model="products.brand"></td>
            </tr>
            <tr>
                <td>Image:</td>
                <td>
                   <input type="text" v-model="products.image">
                </td>
            </tr>
            <tr>
                <td>Front-Image: </td>
                <td><input type="text" v-model="imgFront"></td>
            </tr>
            <tr>
                <td>Distance-Image: </td>
                <td><input type="text" v-model="products.imgFar"></td>
            </tr>
            <tr>
                <td>Bottom-Image: </td>
                <td><input type="text" v-model="products.imgBottom"></td>
            </tr>
            <tr>
                <td>Top-Image: </td>
                <td><input type="text" v-model="products.imgTop"></td>
            </tr>
            <tr>
                <td>Price</td>
                <td><input type="text" v-model="products.price"></td>
            </tr>

            <tr>
                <td>Description:</td>
                <td><input type="text" v-model="products.desc"></td>
            </tr>
            
                <button>ADD NOW</button>
                
            
          </table>
            </form>
        
        </div>
    </div>
    
</template>
<script>
import axios from 'axios';
// import { response } from 'express';
import {ref} from 'vue';
// import VueAxios from 'vue-axios';
export default{
  data(){
    return {
      products: {
          name:null,
          brand:null,
          image:null,
          price:null,
          imgBottom:null,
          imgTop:null,
          imgFar:null,
          Desc:null

          
          

      }
    };
  },
  methods:{
    sendPost2(){
      
      axios.post("http://localhost:9000/products",this.products)
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

.left_side{
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
}
.right_wrapper{
    position: fixed;
    left: 20rem;
    height: 100vh;
    overflow-y: scroll;
    top: 0;
    // left: 0;
   
    
}
button{
    // margin-left: rem;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}
.main{
    display: flex;
    gap: 5rem;
    .right_wrapper{
        // margin-top: 3rem;
        width: 100%;
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
    }
}
.left_side{ 
    
    .left_side_wrapper{
        height: 100vh;
        background-color: black;
        color: white;
        width: 15rem;
        height: 100vh;
        align-items: space-around;
        .contents{
            margin-top: 3rem;
            gap: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            a{
                text-decoration: none;
                color: white;
                font-size: 1rem;
                &:hover{
                    color: red;
                }
            }
        }
        .logo{
            // margin-top: 3rem;
            font-size: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .logout_{
            margin-top: 30rem;
            display: flex;
            color: white;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            a{
                text-decoration: none;
                color: white;
                &:hover{
                    color: red;
                }

            }
        }
    }
}
</style>