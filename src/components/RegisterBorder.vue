<template>
   <div>
        <v-container>
             <p class="Registertext">
            ثبت نام در سایت
        </p>
            
   <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
    <label class="form__label"></label>
    <input class="form__input Registeritems" placeholder="نام" v-model.trim="$v.name.$model"/>
  </div>
  <div class="error text-sm mt-2 text-red" v-if="!$v.name.required">*Field is required</div>
  <div class="error text-sm mt-2 text-red" v-if="!$v.name.minLength">*Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
  <tree-view :data="$v.name" :options="{rootObjectKey: '$v.name', maxDepth: 2}"></tree-view>
  <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
    <label class="form__label"></label>
    <input class="form__input Registeritems" placeholder="نام خانوادگی" v-model.trim="$v.lastname.$model"/>
  </div>
  <div class="error" v-if="!$v.lastname.required">*Field is required</div>
  <div class="error" v-if="!$v.lastname.minLength">*LastName must have at least {{$v.lastname.$params.minLength.min}} letters.</div>
  <tree-view :data="$v.name" :options="{rootObjectKey: '$v.lastname', maxDepth: 2}"></tree-view>
  <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
  <label class="form__label"></label>
    <input class="form__input Registeritems" placeholder="پست الکترونیک" v-model.trim="$v.email.$model"/>
  </div>
  <div class="error " v-if="!$v.email.required">*Email is required</div>
  <div class="error " v-if="!$v.email.email">*Email is not a properly formatted email address</div>
  <tree-view :data="$v.email" :options="{rootObjectKey: '$v.email', maxDepth: 2}"></tree-view>
     <div class="form-group" :class="{ 'form-group--error': $v.phonenumber.$error }">
  <label class="form__label"></label>
    <input class="form__input Registeritems" placeholder="شماره همراه" v-model.trim="$v.phonenumber.$model"/>
  </div>
  <div class="error " v-if="!$v.phonenumber.required">*phonenumber is required</div>
  <div class="error " v-if="!$v.phonenumber.numeric">*please enter a valid phonenumber </div>
  <tree-view :data="$v.phonenumber" :options="{rootObjectKey: '$v.phonenumber', maxDepth: 2}"></tree-view>
    <p>
 <select required name="year" id="year" v-model="dateofbirth.year" >
                <option v-for="y in 1398" v-bind:key="y" >{{ y }}</option>
            </select>
            <select required name="month" id="month" v-model="dateofbirth.month">
                <option v-for="m in 12" v-bind:key="m" >{{ m }}</option>
            </select>
            <select required name="day" id="day" v-model="dateofbirth.day">
                <option v-for="d in 31" v-bind:key="d" >{{ d }}</option>
            </select>
           </p>
           <p>
                 <input type="checkbox" name="subscription" v-model="subscribed"><span class="registertext"> میخواهم آخرین اخبار مربوط به سایت را از طریق ایمیل دریافت کنم</span>
        </p>
        
           <p>
            <button class="Registerbutton" :disabled="!registerenable">
            ثبت نام
        </button>
            </p>
</v-container>
       </div>
    </template>    
     <!--   <p class="Registertext">
            ثبت نام در سایت
        </p>

        <p>
            <input required v-model="fullname.firstname" @blur="checkfirstname" type="text" name="name" id="name" class="Registeritems"  placeholder="نام">
        </p>
        <p>
            <input required v-model="fullname.lastname" @blur="checklastname" type="text" name="lastname" id="lastname" class="Registeritems"  placeholder="نام خانوادگی">
        </p>
        
        <p>
            <input required v-model="phonenumber" @blur="checknumber" type="number" name="phonenumber" id="phonenumber" class="Registeritems"  placeholder="شماره تلفن همراه">
        </p>
        <p>
            
        </p>
        <p>
            <ValidationProvider rules="secret" v-slot="{ errors }">
            <input required v-model="email"  type="text" name="email" id= "email" class="Registeritems" placeholder="پست الکترونیک">
          <span>{{ errors[0] }}</span>
</ValidationProvider>
        </p>
        <p>-->
          
        
     


<script>
import { required, minLength, between , email ,  numeric } from 'vuelidate/lib/validators'

export default{
    data: function(){
        return{
            name: '',
            email:'',
            phonenumber: '',
            dateofbirth: {year: 1398,month: 8,day:9},
            subscribed: false,
            registerenable: false
        }
    },
    validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    lastname:{
        required,
        minLength:minLength(4)
    },
    age: {
        required,
      between: between(20, 30)
    },
    email:{
         required, email
    },
    phonenumber:{
        required,
        numeric
    },
  },
  
    }

</script>


<style>
.Registeritems{
    width : 170px;
    height : 20px;
    text-align: center;
    border: 2px solid rgb(77, 74, 74);
}
.Registerbutton{

  background-color: white; 
  border: 2 px solid rgb(77, 74, 74);
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
  border-radius: 28px;
  width: 140px;
}
.button5 {
  background-color: white;
  color: black;
  border: 2px solid #555555;
}


.Registerbutton:hover {
  background-color: #5d5b5f;
  color: white;
}

.Registertext{
    margin-top: 5%;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 20;
    font-weight: bold;
    color:rgb(66, 60, 70);
}

.error{
    font-size: xx-small;
    color: red;
    
}
</style>