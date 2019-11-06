<template>
    <div>
        <p class="minibordertext">
            ثبت نام در سایت
        </p>
        <p>
            <input required v-model="firstname" @blur="checkfirstname" type="text" name="name" id="name"  placeholder="نام">
        </p>
        <p>
            <input required v-model="lastname" @blur="checklastname" type="text" name="lastname" id="lastname"  placeholder="نام خانوادگی">
        </p>
        <p>
            <input required v-model="phonenumber" @blur="checknumber" type="text" name="phonenumber" id="phonenumber"  placeholder="شماره تلفن همراه">
        </p>
        <p>
            <select required name="year" id="year" v-model="dateofbirth.year">
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
            <input required v-model="email" @blur="checkemail" type="text" name="email" id= "email"  placeholder="پست الکترونیک">
        </p>
        <p>
            <input type="text" v-model="username" @blur="checkUsername" name="username" id="username" placeholder="نام کاربری">
        </p>
        <p>
            <input type="password" v-model="password" @blur="checkPassword" name="password" id="password" placeholder="کلمه ی عبور">
        </p>
        <p>
            <input type="checkbox" name="subscription" v-model="subscribed"> میخواهم آخرین اخبار مربوط به سایت را از طریق ایمیل دریافت کنم
        </p>
        <button class="miniborderbutton" :disabled="!checkSubmission">
            ثبت نام
        </button>
    </div>
</template>

<script>
export default{
    data: function(){
        return{
            firstname:"",
            lastname:"",
            phonenumber: "",
            dateofbirth: {year: 1398,month: 8,day:9},
            email: "",
            username: "",
            password: "",
            subscribed: false,
        }
    },
    computed:{
        checkSubmission: function(){
            return this.checkfirstname() && this.checklastname()
             && this.checknumber() && this.checkemail() 
             &&  this.checkUsername() && this.checkPassword();
        }
    },
    methods:{
       
        checkfirstname: function(){
            var nametest =/^(?![\s.]+$)[a-zA-Z\s.]+$/
            if(nametest.test(this.firstname)){
                console.log("firstname is ok")
                //TODO put a checkmark on firstname
                return true;
            }else{
                console.log("firstname is wrong")
                 //TODO change style of the firstname
                 return false;
            }
        },
        checklastname: function(){
            var nametest = /^(?![\s.]+$)[a-zA-Z\s.]+$/ 
            if(nametest.test(this.lastname)){
                console.log("lastname is ok")
                //TODO put a checkmark on lastname
                return true;
            }else{
                console.log("lastname is wrong")
                //TODO change style of the lastname
                return false;
            }
        },
        checknumber: function(){
            //TODO: phone number validation using regex
            return true;
        },
        checkemail: function(){
            var emailtest = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

            if(emailtest.test(this.email)){
                console.log("email is ok")
                //TODO put a checkmark on email
                return true;
            }else{
                console.log("email is wrong")
                //TODO change style of the email
                return false;
            }
            
        },
        checkUsername: function(){  //TODO: body should be implemented
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
        }
    }
}
</script>


<style>

</style>