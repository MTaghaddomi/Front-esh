<template>
    <div class = "miniborders " style="text-align: center">   
        <p class="minibordertext">
            ورود به حساب شخصی
        </p>
        <p>
            <input required v-model="username" @blur="checkUsername()"  v-bind:class="[checkUsername() ? 'TrueInput' : 'falseInput']"  type="text" name="username" id="username"  class="miniborderitems" placeholder="نام کاربری یا پست الکترونیک">
        </p>
        <p>
            <input required v-model="password" @blur="checkPassword()" v-bind:class="[checkPassword() ? 'TrueInput' : 'falseInput']"  type="password" name="password" id= "password" class="miniborderitems2" placeholder="کلمه عبور">
        </p>
        <button class="miniborderbutton button5">
            ورود
        </button>
        
        
    </div>

</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'
    export default {

    data: function() {
        return {

         
        username: "",
        password: "",
        submitEnable: false,//checkButton
        validation:false,
        };
    },
    computed:{
        checkSubmission: function(){
            console.log("checked")
            return this.checkUsername() && this.checkPassword();
        }
    },
    validation:{
        username:{
            required,
            minLength: minLength(3)
        },
    },
    methods: {
        checkUsername: function(){  //TODO: body should be implemented
           if(this.username.length > 3){
               console.log("username is fine");
               return true;
              }else{
               console.log("username is wrong");
               //TODO: change style of the username field
               return false;

           }
        },

        checkPassword: function(){  //TODO: body should be implemented
            if(this.password.size> 10){
              //  console.log("password is fine");
                //TODO: change style of the username field
                return true;
            }else{
               // console.log("password is wrong");
                //TODO: change style of the username field
                return false;
            }
        },
        checkButton:function(){
            return false;
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
}
.miniborderitems{
    width : 70%;
    height : 35px;
    margin-bottom: 3%;
    text-align: center;
    border:2px solid palevioletred ;
}
.miniborderitems2{
    width : 70%;
    height : 35px;
    margin-bottom: 30%;
    text-align: center;
    border: 2px solid palevioletred;
}
.miniborderbutton{

  background-color: white; 
  border: 2 px solid purple;
  color: black;
  padding: 16px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; 
  transition-duration: 0.4s;
  cursor: pointer;
  margin-bottom: 20%;
  border-radius: 20%;
  width: 30%;
}
.button5 {
  background-color: white;
  color: black;
  border: 2px solid #555555;
}


.miniborderbutton:hover {
  background-color: #9276a8;
  color: white;
}
.minibordertext{
    margin-top: 5%;
    margin-bottom:10% ;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 20;
    font-weight: bold;
    color:darkorchid;
}
.falseInput{
    border: 2 px solid red;
}
.TrueInput{
border: 2 px solid green;
}
</style>