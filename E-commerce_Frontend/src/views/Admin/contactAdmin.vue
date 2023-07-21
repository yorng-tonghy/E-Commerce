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
            <p>All contacts</p>
            <table>
                <tr>
                    <td>No</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Message</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Jack</td>
                    <td>Jack@yahoo.com</td>
                    <td>0887654123</td>
                    <td>Hello dear</td>
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
        margin-top: 3rem;
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