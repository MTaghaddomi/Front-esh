<template>
<div class="container">
    <meta name="viewport" content="width=device-width, initial-scale=1">    
    <NavBar></NavBar>
    <div id="app">
           
        <h1 v-if="checkRoute">خوش آمدید</h1> 
        <!-- will only be displayed when we are at the home page url has only a '/'-->
        
       
        <router-view></router-view>
    </div>
    </div>
    
</template>

<script>
import NavBar from '../src/components/NavBar.vue'
export default{
    computed: {
        checkRoute: function(){
            if(this.$route.path==='/') 
                return true;
            return false;
        }
    },
    components:{
        NavBar,
    },
   
}

</script>


<style >
 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
.bg-image {
  /* The image used */
  background-image: url("../src/assets/img/16042851.jpg");
  
  
 
  
  /* Full height */
  height: 100%; 
  
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Position text in the middle of the page/image */
.container{
    width: 1330px;
    height:650px ;
    border: 2px solid rgb(77, 75, 78);
    overflow: hidden;
     background-image: url("../src/assets/img/1.jpg");
 /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
}

 



</style>