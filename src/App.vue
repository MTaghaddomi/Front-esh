<template>
    <div id="app">
            
        
        <h1 v-if="checkRoute">خوش آمدید</h1> 
        <!-- will only be displayed when we are at the home page url has only a '/'-->
        
       
        <router-view></router-view>
    </div>
    
</template>

<script>
export default{
    computed: {
        checkRoute: function(){
            if(this.$route.path==='/') 
                return true;
            return false;
        }
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
 



</style>