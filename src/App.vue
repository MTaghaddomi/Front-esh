<template>
    
    <div id="app">
        <registerborder></registerborder>
        
    </div>

</template>

<script>

// import LoginBorder from './components/LoginBorder.vue'
import RegisterBorder from './components/RegisterBorder.vue'
export default{
    components: {
        // 'loginborder': LoginBorder,
        'registerborder': RegisterBorder
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