<template>
    <div>
        <h1>
            page not found
        </h1>
        <button @click="goHome">
            Go To Homepage
        </button>
    </div>
</template>

<script>
export default {
    methods:{
        goHome: function(){
            this.$router.push({path:'/home'})
        }
    }
}
</script>

<style>

</style>