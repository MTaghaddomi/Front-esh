<template>
    <div>
        <v-container >
            
        
        <p class="Registertext">
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
            <input required v-model="email" @blur="checkemail" type="text" name="email" id= "email" class="Registeritems" placeholder="پست الکترونیک">
        </p>
        <p>
            <input type="checkbox" name="subscription" v-model="subscribed"> میخواهم آخرین اخبار مربوط به سایت را از طریق ایمیل دریافت کنم
        </p>
        <button class="Registerbutton" :disabled="!registerenable">
            ثبت نام
        </button>
        </v-container>
    </div>
</template>

<script>
export default{
    data: function(){
        return{
            fullname: {firstname:"",lastname:""},
            phonenumber: "",
            dateofbirth: {year: 1398,month: 8,day:9},
            email: "",
            subscribed: false,
            registerenable: false
        }
    },
    methods:{
        checkfirstname: function(){
            var nametest =/^(?![\s.]+$)[a-zA-Z\s.]+$/
            if(nametest.test(this.fullname.firstname)){
                console.log("firstname is ok")
                //TODO
            }else{
                console.log("firstname is wrong")
                //TODO
            }
        },
        checklastname: function(){
            var nametest = /^(?![\s.]+$)[a-zA-Z\s.]+$/ 
            if(nametest.test(this.fullname.lastname)){
                console.log("lastname is ok")
                //TODO
            }else{
                console.log("lastname is wrong")
                //TODO
            }
        },
        checknumber: function(){
            //TODO: phone number validation using regex
        },
        checkemail: function(){
            var emailtest = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

            if(emailtest.test(this.email)){
                console.log("email is ok")
                //TODO
            }else{
                console.log("email is wrong")
                //TODO
            }
            
        }
    }
}
</script>


<style>
.Registeritems{
    width : 30%;
    height : 35px;
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
  border-radius: 20%;
  width: 30%;
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
</style>