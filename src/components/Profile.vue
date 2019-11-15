<template>
    <div>
        <p>
            پروفایل شما:
        </p>
        <p> "{{userData}}"</p>
    </div>
</template>

<script>
import store from '../store.js'
export default {
    
    computed:{
        userData: function(){
            return store.state
        }
    },
    beforeRouteEnter : (to,from,next)=>{

              console.log("checking authentication for entering /profile ")
              if( ! store.state.username ){
                  console.log("nashod ke beshe")
                  next('/')
              }
              console.log("shod ke beshe")
              next()
            
    }
}
</script>
    
<style>

</style>