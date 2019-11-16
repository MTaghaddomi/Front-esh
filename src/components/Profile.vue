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
            return store.state.userProfile
        }
    },
    beforeRouteEnter : (to,from,next)=>{

            console.log("checking authentication for entering /profile ")
            store.dispatch('getProfile')
            console.log(localStorage.getItem('token'))
            if(loggedin){
                console.log("logged in successfuly, and got your profile")
                next()
            }else{
                console.log("failed to login to get your profile")
                next('/')
            }
            
    }
}
</script>
    
<style>

</style>