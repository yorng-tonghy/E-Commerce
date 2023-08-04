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
            <p>All Products</p>
            <div class="add_new">
                <router-link to="/addNewProduct"><a href="">Add New Product</a></router-link>
            </div>
            <table >
                <tr>
                    <td>No</td>
                    <td>Image</td>
                    <td>Name</td>
                    <td>Price</td>
                    
                    <td>Status</td>
                </tr>
                <tr v-for="product in products">
                    <td>{{ product.id }}</td>
                    <td><img style="width: 100px;height: 100px; object-fit: cover;" :src="product.image"></td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    
                    <td>
                        <div class="edit">
                            <a href="#" class="edit_">Edit</a>
                            <a href="#" class="delete_" @click="() => removeProduct(product._id)">Delete</a>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style lang="scss">
.main{
    display: flex;
    gap: 5rem;
    .right_wrapper{
        width: 100%;
        // border: 1px solid black;
        
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        td{
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }
        th{
            border: 1px solid #000000;
            text-align: left;
            padding: 8px;
        
            color: white;
        }

        
    
        .add_new{
            background-color: rgb(148, 148, 131);
            width: 10rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            color: white;
            margin-top: 2rem;
            margin-bottom: 2rem;
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
.edit{

    display: flex;
    gap: 1rem;
    // td{
    //     img{
    //         // object-fit: cover;
    //         width: 10px;
    //         height: 10px;
    //     }
    // }
    a{
        text-decoration: none;
        color: black;
        &:hover{
            color: red;
        }
    }
    .edit_{
        background-color: rgb(182, 136, 224);
        width: 5rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }
    .delete_{
        background-color: rgb(135, 217, 159);
        width: 5rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
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
        position: sticky;
        top: 0;
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
<script>
    import axios from 'axios';
    import {ref} from 'vue'

export default{
    methods: {
        removeProduct(id) {
            axios.delete(`http://localhost:9000/products/${id}`);
            window.location.href = "/product";
        }
    },
    data(){
        return {
            products: undefined
        }
    },
      mounted() {
        axios.get("http://localhost:9000/products")
        .then(res => {
            this.products = res.data;
            console.log(this.products);
        })
      },
    }
</script>