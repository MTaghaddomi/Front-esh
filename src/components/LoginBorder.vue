<template>

    <div class = "miniborders " style="text-align: center">   
        <p class="minibordertext">
            <v-toolbar >
                <v-toolbar-title>
                    ورود به حساب شخصی
                </v-toolbar-title>
            </v-toolbar>
        
        </p>
       
  <div class="form-group" :class="{ 'form-group--error': $v.username.$error }">
    <label class="form__label"></label>
    <input class="form__input miniborderitems" placeholder="username" v-model.trim="$v.username.$model" type="username"/>
  </div>
  <div class="error" v-if="!$v.username.required">Username is required.</div>
  <div class="error" v-if="!$v.username.minLength">username must have at least {{ $v.username.$params.minLength.min }}characters.</div>
  <!--<div class="error" v-if="!$v.username.isUnique">This username is already registered.</div>-->
  <tree-view :data="$v.username" :options="{rootObjectKey: '$v.username', maxDepth: 2}"></tree-view>
       <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
    <label class="form__label"></label>
    <input class="form__input miniborderitems2" placeholder="password" v-model.trim="$v.password.$model" type="password"/>
  </div>
  <div class="error" v-if="!$v.password.required">password is required.</div>
  <div class="error" v-if="!$v.password.minLength">password must have at least {{ $v.password.$params.minLength.min }}characters.</div>
 <tree-view :data="$v.password" :options="{rootObjectKey: '$v.password', maxDepth: 2}"></tree-view>

        <button class="miniborderbutton button5">
            ورود
        </button>
        
        
    </div>

</template>

<script>
import { required , minLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      username: '',
      password:'',
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(4),
    },
    password: {
        required,
        minLength: minLength(8),
      },
  }
}


</script>


<style>

.miniborders{
    max-width: 20%;
    min-width: 20%;
    max-height: 10%;
    min-width: 30%;
    border: 2px solid rgb(77, 75, 78);
    text-align: center;
    overflow: hidden;
    border-radius: 25px;
    margin-left: 450px;
    margin-top: 55px;
    background-color:white
}
.miniborderitems{
    width : 70%;
    height : 35px;
    text-align: center;
    border:2px solid rgb(104, 93, 97) ;
}
.miniborderitems2{
    width : 70%;
    height : 35px;
    text-align: center;
    border: 2px solid rgb(104, 93, 97);
    margin-top: 7%;
    
}
.miniborderbutton{

  background-color: white; 
  border: 2 px solid rgb(104, 80, 104);
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
  margin-top: 20%;
}
.button5 {
  background-color: white;
  color: black;
  border: 2px solid #555555;
}


.miniborderbutton:hover {
  background-color: #838383;
  color: white;
}
.minibordertext{
    margin-top: 5%;
    margin-bottom:10% ;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 20;
    font-weight: bold;
    color:rgb(0, 0, 0);
}
.falseInput{
    border: 2 px solid red;
}
.TrueInput{
border: 2 px solid green;
}
</style>