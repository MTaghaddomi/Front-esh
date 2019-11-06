<template>
    <div class = "miniborders" style="text-align: center">   
        <p class="minibordertext">
            ورود به حساب شخصی
        </p>
        <p>
            <input required v-model="username" @blur="checkUsername" type="text" name="username" id="username"  class="miniborderitems" placeholder="نام کاربری یا پست الکترونیک">
        </p>
        <p>
            <input required v-model="password" @blur="checkPassword" type="password" name="password" id= "password" class="miniborderitems2" placeholder="کلمه عبور">
        </p>
        <button class="miniborderbutton"  :disabled="!checkSubmission" @click="postData">
            ورود
        </button>
        
    </div>
</template>

<script>
import axios from 'axios'
    export default {

    data: function() {
        return {
            username: "",
            password: "",
        };
    },
    computed:{
        checkSubmission: function(){
            return this.checkUsername() && this.checkPassword();
        },
    },
    methods:{
        
        checkUsername: function(){  //TODO: Regex should be implemented
           if(this.username.length > 3){
               console.log("username is fine")
               //TODO: change style of the username field
               return true;
           }else{
               console.log("username is wrong")
               //TODO: change style of the username field
               return false;
           }
        },

        checkPassword: function(){
            if(this.password.length>8){
                console.log("password is fine")
                //TODO: change style of the username field
                return true;
            }else{
                console.log("password is wrong")
                //TODO: change style of the username field
                return false;
            }
        },




         fail: function(error){
             if(error.status == 404){
                 console.log("Incorrect username or password!!!")
             }else{
                 console.log("Something went wrong!!")
             }
           
             //TODO: change style of the login border
         },
         welcome: function(res){
             console.log("sign in approved")
             //TODO: Extract the token out of the response
             //TODO: use the token to get the data
   
         },
         postData: function(){
             const loginRequest ={
                 username: this.username,
                 password: this.password 
             }
             console.log(loginRequest)
             axios.post('/users.json',loginRequest)
             .then((res)=>{console.log(res); this.welcome(res)})
             .catch((error)=> {console.log(error); this.fail(error)})
         }


    }   
    };
</script>


<style>

.miniborders{
    max-width: 20%;
    min-width: 20%;
    max-height: 10%;
    min-width: 30%;
    border: 2px solid rebeccapurple;
    text-align: center;
    overflow: hidden;
    border-radius: 25px;
    margin-left: 450px;
    margin-top: 55px;
    background-image:url('../assets/img/16042851.jpg');
}
.miniborderitems{
    width : 70%;
    height : 35px;
    margin-bottom: 3%;
    text-align: center;
}
.miniborderitems2{
    width : 70%;
    height : 35px;
    margin-bottom: 30%;
    text-align: center;
}
.miniborderbutton{
    width: 40%;
    height: 30px;
    margin-bottom: 20%;
}
.minibordertext{
    margin-top: 5%;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 20;
    color:darkorchid;
}
</style>