<template>
    <div>
        <p>
            <button @click="navigateToLogin"> Login </button>  
        </p>
        <p>
            <button @click="navigateToRegister"> Register </button>  
        </p>
        
    </div>
    
</template>

<script>
export default {
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

</style>