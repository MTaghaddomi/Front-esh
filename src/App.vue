<template>
    
    <div id="app">
        <p>
            <loginborder class="loginBox"> </loginborder>
        </p>
        
    </div>

</template>

<script>
import LoginBorder from './components/LoginBorder.vue'
export default{
    components: {
        'loginborder': LoginBorder
    }
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