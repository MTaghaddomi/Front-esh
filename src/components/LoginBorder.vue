<template>
    <div class = "miniborders" style="text-align: center">   
        <p class="minibordertext">
            ورود به حساب شخصی
        </p>
        <p>
            <input required v-model="username" @blur="checkUsername()" v-bind:style ="checkUsername() ? 'border: 2px solid green;' : 'border: 2px solid red;' "
 type="text" name="username" id="username"  class="miniborderitems" placeholder="نام کاربری یا پست الکترونیک">
        </p>
        <p>
            <input required v-model="password" @blur="checkPassword" type="password" name="password" id= "password" class="miniborderitems2" placeholder="کلمه عبور">
        </p>
        <button class="miniborderbutton">
            ورود
        </button>
        
    </div>
</template>

<script>
    export default {
    name: "App",
    data: function() {
        return {
        username: "",
        password: "",
        submitEnable: false,//checkButton
        validation:false,
        };
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
                console.log("password is fine");
                //TODO: change style of the username field
                return true;
            }else{
                console.log("password is wrong");

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