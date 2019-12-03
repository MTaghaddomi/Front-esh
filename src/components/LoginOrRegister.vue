<template>
  <div>
    <h1>Welcome</h1>
    <p>
      <button class="glow-on-hover" @click="navigateToLogin">
        Login
      </button>
    </p>
    <p>
      <button class="glow-on-hover" @click="navigateToRegister">
        Register
      </button>
    </p>
  </div>
</template>

<script>
import store from '../store.js'
import loading from '../../public/loading.vue'
export default {
    beforeRouteEnter : (to,from,next)=>{
          
          if(store.getters.loggedin){
              console.log("you are loggedin!, loading your profile page")
              next('/profile')
          }else{
              next() 
          }
            
    },
    methods:{
        navigateToLogin: function(){
            this.$router.push('/Login')
        },
        navigateToRegister: function(){
            this.$router.push('/Register')
        }
    }
}
</script>

<style>
.glow-on-hover {
  display: inline-block;
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
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

.glow-on-hover:active {
  color: #000;
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
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
</style>
