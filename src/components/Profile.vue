<template>
    <div class="wrapper animated bounce">
        <h1>
            حساب کاربری
        </h1>
        <div class="glow-on-hover container">
        <p style ="padding-left: 5px">username:<span style="padding-left:17%">{{username}}</span></p>
        <p style ="padding-left: 5px">firstname:<span style="padding-left:18%">{{firstName}}</span></p>
        <p style ="padding-left: 5px">lastname:<span style="padding-left:18%">{{lastName}}</span></p>
        <p style ="padding-left: 5px">email:<span style="padding-left:26%">{{email}}</span></p>
        <p style ="padding-left: 5px">phonenumber:<span style="padding-left:7%">{{phoneNumber}}</span></p>
        <p style ="padding-left: 5px">birthday:
          <span v-if="checkDate()" style="padding-left:19%">
            {{(birthdayDate.year== null ? '-': birthdayDate.year) + " / " + birthdayDate.month + " / " + birthdayDate.day}}</span></p>
        </div>

        <div class="button" id="button-3" @click="editProfile">
          <div id="circle"></div>
          <a href="#">ویرایش حساب کاربری</a>
        </div>

        <div class="button" id="button-3" @click="logout">
          <div id="circle"></div>
          <a href="#">خروج</a>
        </div>
        

    </div>
</template>

<script>
import store from '../store.js'
import { mapGetters } from "vuex"
export default {
    data: function(){
      return{
        username: localStorage.getItem('username')
      }
    },
    computed:{
      ...mapGetters(['lastName','firstName','email','phoneNumber','birthdayDate','birthdayTimestamp','loggedin']),
      
    },
    mounted: function(){
      store.dispatch('getProfile',{
          success:()=>{console.log("success on loading profile")},
          failure:(message)=>{console.log("failed to get profile");
          //  alert('خطا به هنگام دریافت اطلاعات مربوط به حساب کاربری')
          alert(message)}
        })
    },
    beforeRouteEnter : (to,from,next)=>{
          console.log("checking loggedin status")
          if(!localStorage.token){
            alert("ابتدا وارد حساب کاربری خود شوید")
            next('/account') 
          }else{
            console.log("you are loggedin!, loading your profile page")
            next()
          }
            
    },
    methods:{
      editProfile: function(){
        this.$router.push({path: '/editProfile'})
      },
      logout: function(){
        this.$store.dispatch('logout')
        this.$router.push({path: '/account'})
      },
      getBirthdayRight: function(date){

          var mm = date.getMonth() + 1; // getMonth() is zero-based
          var dd = date.getDate();

          return [date.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
          ].join(' / ');
      },
      checkDate(){ return !(this.birthdayDate.year == " ") }
    }
}
</script>
    
<style>
.container{
    text-align: left;
    width: 100%;
    height: 90%;
}
.glow-on-hover {
  display: inline-block;
  
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  
}
.glow-on-hover:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}
    

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
.wrapper {
  margin: 50px auto;
  width: 343px;
  height: 280px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}
.wrapper h1 {
  font-family: "Galada", cursive;
  color: black;
  letter-spacing: 8px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}
.wrapper hr {
  opacity: 0.2;
}
.crtacc {
  margin-left: 75px;
}
.button {
  display: inline-flex;
  height: 40px;
  width: 150px;
  border: 2px solid #3d5a5a;
  margin: 20px 20px 20px 20px;
  color: #bfc0c0;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
a {
  color: #2d5f5f;
  text-decoration: none;
  letter-spacing: 1px;
}
#button-3 {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

#button-3 a {
  position: relative;
  transition: all 0.45s ease-Out;
}

#circle {
  width: 0%;
  height: 0%;
  opacity: 0;
  line-height: 40px;
  border-radius: 50%;
  position: absolute;
  transition: all 0.5s ease-Out;
  top: 20px;
  left: 70px;
}

#button-3:hover #circle {
  width: 200%;
  height: 500%;
  opacity: 1;
  top: -70px;
  left: -70px;
}

#button-3:hover a {
  color: #2d3142;
}

</style>